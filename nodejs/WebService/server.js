const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const logEvents = require('./logEvent')
const EventEmitter = require('events')
class Emitter extends EventEmitter { }
const emitter = new Emitter()

emitter.on('logs', (msg, fileName) => logEvents(msg, fileName))

const PORT = process.env.PORT || 3000


const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath,
            contentType.includes('imgage') ? 'utf8' : '')
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200,
            { 'Content-Type': contentType })
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data)
    } catch (err) {
        console.log(err)
        emitter.emit('logs', `${err.name}: ${err.message}`, 'errLog.txt')
        response.statusCode = 500
        response.end()
    }

}

// http server.
// "req" - is the request.
// "res" - is the response.
const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    emitter.emit('logs', `${req.url}\t${req.method}`, 'eventLog.txt')

    // the extension of the file
    const extension = path.extname(req.url)

    // set the media type 
    let contentType

    switch (extension) {
        case '.css':
                contentType = 'text/css'
            break
        case '.javascript':
                contentType = 'text/javascript'
                break
        case '.json':
                contentType = 'application/json'
                break
        case '.jpg':
                contentType = 'image/jpeg'
                break
        case '.png':
                contentType = 'image/png'
                break 
        case '.txt':
                contentType = 'text/plain'
                break
        default:
                contentType = 'text/html'
    }

    let filePath = 
            contentType === 'text/html' && req.url === '/'
                ? path.join(__dirname, 'views', 'index.html')
                : contentType === 'text/html' && req.url.slice(-1) === '/'
                    ? path.join(__dirname, 'views', req.url, 'index.html')
                        : contentType === 'text/html'
                        ? path.join(__dirname, 'views', req.url)
                        : path.join(__dirname, req.url)

    // do not need to write .html extension.
    if(!extension && req.url.slice(-1) !== '/') filePath += '.html'

    // verify if the file exists - true/false value.
    const fileExists = fs.existsSync(filePath)

    if(fileExists) {
        serveFile(filePath, contentType, res)
    } else {
        switch(path.parse(filePath).base) {
            // 301 - redirect
            case 'old-page.html':
                    res.writeHead(301, {'Location' : '/new-page.html'})
                    res.end()
                    break
            case 'www-page.html':
                    res.writeHead(301, {'Location': '/'})
                    res.end()
                    break
            default: 
                // 404 - not found.
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res)
        }
    }

})

server.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))

