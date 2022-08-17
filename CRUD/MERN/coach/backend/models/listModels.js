const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    nome: {
        type: String,
        require: [true, 'Please add a name.']
    },
    sobrenome: {
        type: String,
        require: [true, 'Please add a lastname.']
    },
    email: {
        type: String,
        require: [true, 'Please add a email']
    },
    idade: {
        type: Number,
        require: [true, 'Please add a age']
    }
})

module.exports = mongoose.model('List', listSchema)