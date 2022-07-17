const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel')

//@desc Get Tasks
//@route GET /api/task
//@access Private 
const getTasks = asyncHandler(async (req, res) => {
    const task = await Task.find()
    res.status(200).json(task)
})

//@desc Create Tasks
//@route POST /api/task
//@access Private 
const createTask = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text.')
    }

    const createTask = await Task.create({
        text: req.body.text 
    })

    res.status(200).json(createTask)
})

//@desc Update Tasks
//@route PUT /api/task
//@access Private 
const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error('Id does not exists.')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTask)
})

//@desc Delete Tasks
//@route DELETE /api/task
//@access Private 
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error('ID does not exists.')
    }

    await task.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}