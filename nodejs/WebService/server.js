const logEvents = require('./logEvent')

// buit-in nodejs module.
const EventEmitter = require('events')

// extends the default behaviour.
class Emitter extends EventEmitter {}

// initialize the object
const emitter = new Emitter()

emitter.on('logs', (msg) => logEvents(msg))

emitter.emit('logs', 'Event Log')

