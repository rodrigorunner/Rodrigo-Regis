const asyncHandler = require('express-async-handler')
const List = require('../models/listModels')

const getList = asyncHandler(async (req, res) => {
    const list = await List.find()

    res.status(200).json(list)
})

const getListById = asyncHandler(async (req, res) => {
    const list = await List.findById(req.params.id)

    if(!list) {
        res.status(400)
        throw new Error('This is does not exists.')
    }

    res.status(200).json(list)
})

const createList = asyncHandler(async (req, res) => {
    if(!req.body.nome || !req.body.sobrenome || !req.body.email || !req.body.idade) {
        res.status(400)
        throw new Error('Please add a text.')
    }

    const createlist = await List.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        idade: req.body.idade
    })

    res.status(200).json(createlist)
})

const updateList = asyncHandler(async (req, res) => {
    const list = await List.findById(req.params.id)

    if(!list) {
        res.status(400)
        throw new Error('List does not exists.')
    }

    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedList)
})

const deleteList = asyncHandler(async (req, res) => {
    const list = await List.findById(req.params.id)

    if(!list) {
        res.status(400)
        throw new Error('Sorry.')
    }

    await list.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getList,
    createList,
    updateList,
    deleteList,
    getListById
}