const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    titulo: {
        type: String,
        require: [true, 'Please add a title.']
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