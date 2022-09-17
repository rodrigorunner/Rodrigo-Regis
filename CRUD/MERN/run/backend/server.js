// Arquivo de configuração do servidor.
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// Rota de acesso.
app.use('/api/v1/', require('./routes/runRoutes'))

app.listen(port, () => console.log(`App listening on port ${port}`))