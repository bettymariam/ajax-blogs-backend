const model = require('../models/blogs')

const getAll = ((req, res, next) => {
  model.getAll()
    .then((data) =>{
      res.status(200).json({data})
    })
})

module.exports = { getAll }
