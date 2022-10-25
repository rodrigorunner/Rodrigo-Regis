const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('It worked.')
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
