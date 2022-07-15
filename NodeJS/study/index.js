const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Setar configuração do caminho absoludo do 
// diretório "views" e o mecanismo padrão "ejs"
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const Content = require('./models/contents');
const { findByIdAndDelete } = require('./models/contents');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/study');
}

const categories = ['web development', 'mobile', 'iot', 'analitycs']

app.get('/home', async (req, res) => {
    const {category} = req.query;
    if(category) {
      const contents = await Content.find({category});
      res.render('products/index', { contents, category });
    } else {
      const contents = await Content.find({});
      res.render('products/index', { contents, category: 'Todos' });
    }
})

app.post('/home', async (req, res) => {
  const newContent = new Content(req.body);
  await newContent.save();
  res.redirect(`/home/${newContent._id}`);
})

app.get('/home/new', (req, res) => {
  res.render('products/new', { categories });
})

app.get('/home/:id', async (req, res) => {
  const {id} = req.params;
  const content = await Content.findById(id);
  res.render('products/show', { content });
})

app.get('/home/:id/edit', async (req, res) => {
  const {id} = req.params;
  const content = await Content.findById(id);
  res.render('products/edit', { content, categories });
})

app.put('/home/:id', async (req, res) => {
  const {id} = req.params;
  const content = await Content.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
  res.redirect(`/home/${content._id}`);
})

app.delete('/home/:id', async (req, res) => {
  const {id} = req.params;
  const content = await Content.findByIdAndDelete(id);
  res.redirect('/home');
})


app.listen(3000, () => {
    console.log('App listening on port 3000!')
})