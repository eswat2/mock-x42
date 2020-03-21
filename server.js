// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express') // call express
const app = express() // define our app using express
const bodyParser = require('body-parser')
const mock = require('./api/sample/router')
const uuid = require('./api/uuid/router')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.use(express.static('public'))

// simulate delay response
app.use((req, res, next) => {
  const delay = 1 // utils.delay()
  setTimeout(() => next(), delay)
})

// configure app to use CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Expose-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  if ('OPTIONS' === req.method) {
    res.sendStatus(204)
  } else {
    next()
  }
})

const port = process.env.PORT || 8180 // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
{
  const router = mock.createRouter(express)
  app.use('/api/mock', router)
}
{
  const router = uuid.createRouter(express)
  app.use('/api/uuid', router)
}

app.get('/api', function (req, res) {
  res.json({ message: 'hooray! welcome to our api server!... [ mock ]' })
})

app.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our server!...' })
})

// REGISTER OUR ERROR HANDLERS -----------------------
const logErrors = (err, req, res, next) => {
  console.log('-- ERROR')
  console.error(err.stack)
  next(err)
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  res.status(500).send({ error: 'Something failed!...' })
}

app.use(logErrors)
app.use(errorHandler)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log(`Magic happens here -- http://localhost:${port}`)
console.log(`         mock apis -- http://localhost:${port}/api/mock`)
console.log(`        sample api -- http://localhost:${port}/api/mock/auto`)
console.log(`          uuid api -- http://localhost:${port}/api/uuid`)
console.log('--')
