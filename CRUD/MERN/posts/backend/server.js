// Arquivo responsável por configurar o servidor express.
const  erroHandle  = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Setando configuração de rota e importando o arquivo de configuração das rotas.
app.use('/api/posts', require('./routes/postsRoutes'))

app.use(erroHandle)

app.listen(port, () => console.log(`App listening on port ${port}`))
