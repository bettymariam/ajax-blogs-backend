const db = require('../../db');

const getAllPosts = () => {
  return db('blog_posts')
    .select('*')
}

const getOnePost = (id) => {
  return db('blog_posts')
    .select('*')
    .where({id})
}

const newPost = (post) => {
  return db('blog_posts')
    .insert(post)
    .returning('*')
}

const editPost = (id, post) => {
  return db('blog_posts')
    .update(post, '*')
    .where({id})
    .returning('*')
}

const deletePost = (id) => {
  return db('blog_posts')
    .where({id})
    .del()
}


module.exports = { getAllPosts, getOnePost, newPost, editPost, deletePost }
