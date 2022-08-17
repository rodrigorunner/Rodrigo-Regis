const express = require('express')
const router = express.Router()
const {
    getList,
    createList,
    updateList,
    deleteList
} = require('../controller/listController')

router.route('/').get(getList).post(createList)
router.route('/:id').put(updateList).delete(deleteList)

module.exports = router 