const model = require('../models/blogs')

const getAllPosts = ((req, res, next) => {
  model.getAllPosts()
    .then((data) =>{
      res.status(200).json({data})
    })
})

const getOnePost = ((req, res, next) => {
  model.getOnePost(req.params.id)
    .then((data) => {
      if (data.length) {
        res.status(200).json({data})
      } else {
        const error = { 'status': 400, 'message': 'Post not found'}
        next(error)
      }
    })
})

const newPost = ((req, res, next) => {
  const post = req.body
  const errors = []

  if(!post.title) errors.push('Title is required')
  if(!post.body) errors.push('Body is required')
  if(!post.author) errors.push('Author is required')
  if(!post.image_url) errors.push('Image URL is required')

  if (errors.length) {
    const error = { 'status': 400, 'message': 'Cannot create post', 'errors': errors}
    next(error)
  } else {
    model.newPost(post)
      .then((data) => {
        res.status(200).json({data})
      })
  }
})

const editPost = ((req, res, next) => {
  const post = req.body
  const id = req.params.id
  const errors = []

  if(!post.title) errors.push('Title is required')
  if(!post.body) errors.push('Body is required')
  if(!post.author) errors.push('Author is required')
  if(!post.image_url) errors.push('Image URL is required')

  if (errors.length) {
    const error = { 'status': 400, 'message': 'Cannot edit post', 'errors': errors}
    next(error)
  } else {
    model.editPost(id, post)
      .then((data) => {
        res.status(200).json({data})
      })
  }
})

const deletePost = ((req, res, next) => {
  model.deletePost(req.params.id)
    .then((data) => {
      if (data) {
        res.status(200).json({data})
      } else {
        const error = { 'status': 400, 'message': 'Post not found'}
        next(error)
      }
    })
})
module.exports = { getAllPosts, getOnePost, newPost, editPost, deletePost}
