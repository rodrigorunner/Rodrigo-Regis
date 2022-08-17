const asyncHandler = require('express-async-handler')

const getList = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Post'})
})

const createList = asyncHandler(async (req, res) => {
    if(!req.body.nome || !req.body.sobrenome || !req.body.email || !req.body.idade) {
        res.status(400)
        throw new Error('Please add a text.')
    }

    res.status(200).json({message: 'Create Post'})
})

const updateList = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Post ${req.params.id}`})
})

const deleteList = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Post ${req.params.id}`})
})

module.exports = {
    getList,
    createList,
    updateList,
    deleteList
}