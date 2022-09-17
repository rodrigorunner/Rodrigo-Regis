const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Visualizar Jogos'})
})

router.get('/:id', (req, res) => {
    res.status(200).json({message: `Pegar informações sobre o jogo: ${req.params.id}`})
})

router.post('/', (req, res) => {
    res.status(200).json({message: 'Criar Jogo.'})
    console.log(req.body)
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Atualizar jogo: ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Deletar jogo: ${req.params.id}`})
})

module.exports = router 