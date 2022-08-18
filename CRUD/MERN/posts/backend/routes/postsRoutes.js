const express = require('express')
const router = express.Router()
const {
    getPost,
    getPostId,
    updatePost,
    createPost,
    deletePost
} = require('../controller/postsController')

router.route('/').get(getPost).post(createPost)
router.route('/:id').put(updatePost).delete(deletePost).get(getPostId)

module.exports = router