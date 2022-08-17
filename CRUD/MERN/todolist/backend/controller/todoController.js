const asyncHandler = require('express-async-handler')
const Todo = require('../model/todoModel')

const getTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.find({})

    res.status(200).json(todo)
})

const postTodo = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text.')
    }

    const createTodo = await Todo.create({
        text: req.body.text
    })

    res.status(200).json(createTodo)
})

const updateTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if(!todo) {
        res.status(400)
        throw new Error('Todo does not exists.')
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTodo)
})

const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if(!todo) {
        res.status(400)
        throw new Error('Id not exists.')
    }

    await todo.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTodo,
    postTodo,
    updateTodo,
    deleteTodo
}