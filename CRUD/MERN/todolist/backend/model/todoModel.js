const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        require: [true, 'Please add a name.']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema)