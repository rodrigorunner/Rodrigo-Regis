const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const errorHandler = require('./middleware/errorHandler')
const { logger } = require('./middleware/logEvent')

// custom middleware logger.
app.use(logger)

// cross origin resource sharing
const whiteList = ['http://localhost:3000', 'http://127.0.0.1:5500']
const corsOptions = {
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not Allwed by CORS.'))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

/**
 * built-in middleware to handle urlenconded data
 * in other words, form data
 * content-type: application/x-www-form-urlenconded
 */
app.use(express.urlencoded({ extended: true }))

// built-in middleware for json
app.use(express.json())

// serve static files
app.use(express.static(path.join(__dirname, '/public')))

// set the views directory.
app.set('views', path.join(__dirname, 'view'))

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/subdir', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/subdir'))
})

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html')
})

// route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('Calling the next function on the tree')
    next()
}, (req, res) => {
    res.send('I am the last one man in the whole world.')
})

const one = (req, res, next) => {
    console.log('One.')
    next()
}

const two = (req, res, next) => {
    console.log('Two.')
    next()
}

const three = (req, res) => {
    console.log('Three.')
    res.send('End of the road')
}

app.get('/chain', [one, two, three])

app.all('*', (req, res) => {
    res.status(404)
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if(req.accepts('json')) {
        res.json({ error: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))

