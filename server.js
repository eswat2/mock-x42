// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express') // call express
const app = express() // define our app using express
const bodyParser = require('body-parser')
const NodeCache = require('node-cache')
const mock = require('./mock-api')

// NOTE:  data is purged after 5 minutes...
const myCache = new NodeCache({ stdTTL: 300, checkperiod: 320 })

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// NOTE:  we're providing this to export SVG icons
app.use(express.static('public'))

// simulate delay response
app.use((req, res, next) => {
  const delay = mock.delay()
  setTimeout(() => next(), delay)
})

// configure app to use CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

const port = process.env.PORT || 8180 // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
{
  const router = mock.createRouter(express)
  app.use('/api', router)
}

app.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our server!...' })
})

// REGISTER OUR ERROR HANDLERS -----------------------
const logErrors = (err, req, res, next) => {
  console.log('-- ERROR')
  console.error(err.stack)
  next(err)
}

const errorHandler = (err, req, res, next) => {
  res.status(500).send({ error: 'Something failed!...' })
}

app.use(logErrors)
app.use(errorHandler)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log('Magic happens here -- http://localhost:' + port)
console.log('--')
