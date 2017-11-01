const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/blogs')

router.get('/', ctrl.getAll)
//router.get('/:id', ctrl.getOneBlog)

module.exports = router
