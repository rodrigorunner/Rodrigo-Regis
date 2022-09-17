const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    nome: {
        type: String,
        require: [true, 'Please add a name.']
    },
    comentario: {
        type: String,
        require: [true, 'Please add a comment.']
    }
}, 
{
    timestampas: true
})

module.exports = mongoose.model('Post', postSchema)