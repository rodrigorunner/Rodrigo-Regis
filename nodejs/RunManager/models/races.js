const mongoose = require('mongoose')
const Schema = mongoose.Schema

const raceSchema = new Schema({
    country: String,
    state: String,
    race: String,
    description: String,
    location: String
})

module.exports = mongoose.model('Race', raceSchema)