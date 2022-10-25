const mongoose = require('mongoose')
const express = require('express')
const { places } = require('./seedsHelpers')
const Schema = mongoose.Schema
const app = express()

mongoose.connect('mongodb://localhost:27017/run-manager')
.then(() => console.log('MongoDB connected.'))
.catch(err => console.log(err))

const raceSchema = new Schema({
    country: String,
    state: String,
    race: String,
    description: String,
    location: String
})

const Race = mongoose.model('Race', raceSchema)

const seedDB = async () => {
    await Race.deleteMany({})
    for(let i = 0; i < places.length; i++) {
        const race = new Race({
            country: `${places[i].country}`,
            location: `${places[i].race}, ${places[i].state}`,
        })
        const res = await race.save()
        console.log(res)

    }
}
seedDB()