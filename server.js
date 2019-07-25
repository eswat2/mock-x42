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

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router() // get an instance of the express Router

router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!...' })
})

// more routes for our API will happen here

router.get('/id', (req, res) => {
  res.json({ id: mock.id() })
})

router.get('/slug', (req, res) => {
  const count = req.query.count
  res.json(mock.slug(count))
})

router.get('/ssns', (req, res) => {
  const count = req.query.count
  const dashes = req.query.dashes
  res.json(mock.ssns(count, dashes))
})

router.get('/vins', (req, res) => {
  const count = req.query.count
  res.json(mock.vins(count))
})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

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
