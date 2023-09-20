const Race = require('../models/races')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/races', async (req, res) => {
    const races = await Race.find({})
    res.render('races/index', { races })
})

router.get('/races/new', (req, res) => {
    res.render('races/new')
})

router.post('/races', async (req, res) => {
    const races = new Race(req.body.races)
    await races.save()
    res.redirect(`/races/${races._id}`)
})

router.get('/races/:id', async (req, res) => {
    const { id } = req.params
    const races = await Race.findById(id)
    res.render('races/show', { races })
})

router.get('/races/:id/edit', async (req, res) => {
    const { id } = req.params
    const races = await Race.findById(id)
    res.render('races/edit', { races })
})

router.put('/races/:id', async (req, res) => {
    const { id } = req.params
    const races = await Race.findByIdAndUpdate(id, {...req.body.races})
    res.redirect(`/races/${races._id}`)
})

router.delete('/races/:id', async (req, res) => {
    const { id } = req.params
    await Race.findByIdAndDelete(id)
    res.redirect('/races')
})

module.exports = router