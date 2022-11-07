const methodOverride = require('method-override')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const ejs = require('ejs')
const app = express()

connectDB()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended:true }))
app.use(methodOverride('_method'))
app.use('/', require('./routes/racesRoutes'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
