const db = require('../../db');

const getAll = () => {
  return db('blog_posts')
    .select('*')
}

module.exports = { getAll }
