const getList = (req, res) => {
    res.status(200).json({message: 'Get Post'})
}

const createList = (req, res) => {
    res.status(200).json({message: 'Create Post'})
}

const updateList = (req, res) => {
    res.status(200).json({message: `Update Post ${req.params.id}`})
}

const deleteList = (req, res) => {
    res.status(200).json({message: `Delete Post ${req.params.id}`})
}

module.exports = {
    getList,
    createList,
    updateList,
    deleteList
}