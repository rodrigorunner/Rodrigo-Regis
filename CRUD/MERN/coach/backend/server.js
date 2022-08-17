const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

app.use('/api/v1/', require('./routes/routesList'))


app.listen(port, () => console.log(`App listening on port ${port}`))
