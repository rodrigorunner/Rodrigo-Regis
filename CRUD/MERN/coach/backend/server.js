const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {erroHandler} = require('./middleware/errorMiddleware')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/', require('./routes/routesList'))

app.use(erroHandler)

app.listen(port, () => console.log(`App listening on port ${port}`))
