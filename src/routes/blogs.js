const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/blogs')

router.get('/', ctrl.getAllPosts)
router.get('/posts/:id', ctrl.getOnePost)
router.post('/', ctrl.newPost)
router.put('/posts/:id', ctrl.editPost)
router.delete('/posts/:id', ctrl.deletePost)


module.exports = router
