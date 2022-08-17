// Arquivo de configuração do servidor.
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000 
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

connectDB()

app.use('/api/todo', require('./routes/todoRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`App listening on port ${port}`))

