const express = require('express')
const router = express.Router()
const path = require('path')

/**
 * regex
 * "^" = begin with /
 * "&" = end with /
 * "|" or
 * /index(.html)?
 * (.html) = optional.
 */
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'))
})

router.get('/test(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'))
})

module.exports = router 