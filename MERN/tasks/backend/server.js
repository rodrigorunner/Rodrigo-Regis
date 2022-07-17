const { errorMiddleware } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const express = require('express')
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/task/', require('./routes/taskRoute'))

app.use(errorMiddleware)

app.listen(port, () => console.log(`App listening on port ${port}`))