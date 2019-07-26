// mock-api.js
// cSpell:ignore ssns

const Chance = require('chance')
const faker = require('faker')
const vinGenerator = require('vin-generator')

const chance = new Chance()

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const slug = (count = 3) => {
  return faker.lorem.slug(count)
}

const ssns = (count = 3, dashes) => {
  return chance.unique(chance.ssn, count, {
    dashes: dashes === 'true',
  })
}

const uuid = () => {
  return faker.random.uuid()
}

const vins = (count = 3) => {
  return chance.unique(vinGenerator.generateVin, count)
}

const utils = {
  slug,
  ssns,
  uuid,
  vins,
}

// ROUTE Factory for our API
// =============================================================================
const createRouter = express => {
  const router = express.Router() // get an instance of the express Router

  router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our mock api!...' })
  })

  // more routes for our API will happen here

  router.get('/slug', (req, res) => {
    const count = req.query.count
    res.json(utils.slug(count))
  })

  router.get('/ssns', (req, res) => {
    const count = req.query.count
    const dashes = req.query.dashes
    res.json(utils.ssns(count, dashes))
  })

  router.get('/uuid', (req, res) => {
    res.json(utils.uuid())
  })

  router.get('/vins', (req, res) => {
    var count = req.query.count || 3
    res.json(utils.vins(count))
  })

  return router
}

module.exports = {
  createRouter,
  delay,
  utils,
}
