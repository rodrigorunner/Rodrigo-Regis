const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['web development', 'mobile', 'iot', 'analitycs']
    }
})

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;

