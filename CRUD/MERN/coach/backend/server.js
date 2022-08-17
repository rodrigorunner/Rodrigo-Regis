const {erroHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const express = require('express')
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/', require('./routes/routesList'))

app.use(erroHandler)

app.listen(port, () => console.log(`App listening on port ${port}`))
