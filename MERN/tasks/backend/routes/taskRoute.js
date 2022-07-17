const express = require('express')
const router = express.Router()
const { getTasks, createTask, updateTask, deleteTask } = require('../controller/taskController')

router.route('/').get(getTasks).post(createTask)
router.route('/:id').put(updateTask).delete(deleteTask)

module.exports = router 