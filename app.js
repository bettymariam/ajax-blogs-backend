const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')

app.use(cors())

app.disable('x-powered-by')
if (!process.env.NODE_ENV) app.use(logger('dev'))

app.use(bodyParser.json())

const blogs = require('./src/routes/blogs')
app.use('/', blogs)

app.use((err, req, res, next) => {
  const status = err.status || 500

  res.status(status).json({ error: err})
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found!' }})
})

module.exports = app;
