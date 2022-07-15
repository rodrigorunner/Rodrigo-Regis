const mongoose = require('mongoose');

const Content = require('./models/contents');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/study');
}

// const c = new Content({
//     name: 'ReactJS',
//     category: 'web development'        
// })

// c.save()
// .then(res => console.log(res))
// .catch(err => console.log(err))

const seedsContent = [
    {
        name: 'ReactJS',
        category: 'web development'
    },
    {
        name: 'Django',
        category: 'web development'
    },
    {
        name: 'Big Data',
        category: 'iot'
    },
    {
        name: 'Android Studio',
        category: 'mobile'
    },
    {
        name: 'PowerBI',
        category: 'analitycs'
    },
    {
        name: 'HTML',
        category: 'web development'
    },
    {
        name: 'PySpark',
        category: 'iot'
    }
]

Content.insertMany(seedsContent)
.then(res => console.log(res))
.catch(err => console.log(err))