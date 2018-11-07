const express = require('express')
const morgan = require('morgan')
const compress = require('compression')
const bodyParser = require('body-parser')
const formidable = require('formidable')
const helmet = require('helmet')
const { join } = require('path')

const { logs } = require('./vars')
const routes = require('../api/routes/v1')
// const { hotMiddleware } = require('../api/middlewares/hot')

const app = express()

// Logging -> dev: console | production: file
app.use(morgan(logs))

app.use(express.static(join(__dirname, '..', '..', '..', '/dist/public')))

app.use('/static', express.static(join(__dirname, '..', '/api/forms/output/')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  if (
    req.url.match(/\/api\/v1\/forms\/([^/])+\/compile-source/) &&
    req.method.toLowerCase() === 'post'
  ) {
    const form = new formidable.IncomingForm({
      encoding: 'utf-8',
      uploadDir: join(__dirname, '/Upload'),
      multiples: true,
      keepExtensions: true,
    })
    form.once('error', console.log)
    form.parse(req, (err, fields, files) => {
      Object.assign(req, { fields, files })
      next()
    })
  } else {
    next()
  }
})

// gzip compression
app.use(compress())

// secure apps setting HTTP headers for secure
app.use(helmet())

app.use('/api/v1', routes)

// temporal dev
// app.use(hotMiddleware)

app.get('*', (req, res) =>
  res.sendFile(join(__dirname, '..', '..', '..', '/dist/public/js/index.html'))
)

module.exports = app
