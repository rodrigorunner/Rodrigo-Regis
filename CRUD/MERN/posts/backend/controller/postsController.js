const asyncHandler = require('express-async-handler')
const Post = require('../model/postModel')

const getPost = asyncHandler(async (req, res) => {
    const post = await Post.find()

    res.status(200).json(post)
})

const getPostId = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    res.status(200).json(post)
})

const createPost = asyncHandler(async (req, res) => {
    if(!req.body.titulo || !req.body.comentario) {
        res.status(400)
        throw new Error('Please add a text.')
    }

    const createPost = await Post.create({
        titulo: req.body.titulo,
        comentario: req.body.comentario
    })

    res.status(200).json(createPost)
})

const updatePost = asyncHandler(async (req, res) => {
    // Primeiro, recuperamos o ID através do corpo da requisição.
    const post = await Post.findById(req.params.id)

    // Verificar se o ID existe senão tratar o erro.
    if(!post) {
        res.status(400)
        throw new Error('Please, invalid operation.')
    }

    // Recebe o ID do cliente e realiza uma troca com o que temos setado no banco.
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedPost)
})

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(400)
        throw new Error('Please, invalid operation.')
    }

    await post.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getPost,
    getPostId,
    createPost,
    updatePost,
    deletePost
}