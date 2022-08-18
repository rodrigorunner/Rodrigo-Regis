const express = require('express')
const router = express.Router()
const {
    getList,
    createList,
    updateList,
    deleteList,
    getListById
} = require('../controller/listController')

router.route('/').get(getList).post(createList)
router.route('/:id').put(updateList).delete(deleteList).get(getListById)

module.exports = router 