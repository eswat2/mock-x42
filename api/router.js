// api/router.js
// cSpell:ignore ssns

const { mocks, utils } = require('./mock')
const { slugGet, ssnsGet, uuidGet, vinsGet } = mocks
const { respondTo } = utils

// ROUTE Factory for our API
// =============================================================================
const createRouter = express => {
  const router = express.Router() // get an instance of the express Router

  router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our Mock api!...' })
  })

  // more routes for our API will happen here

  router.get('/slug', (req, res) => {
    const count = req.query.count
    respondTo(res, slugGet(count))
  })

  router.get('/ssns', (req, res) => {
    const count = req.query.count
    const dashes = req.query.dashes
    respondTo(res, ssnsGet(count, dashes))
  })

  router.get('/uuid', (req, res) => {
    respondTo(res, uuidGet())
  })

  router.get('/vins', (req, res) => {
    var count = req.query.count || 3
    respondTo(res, vinsGet(count))
  })

  return router
}

module.exports = {
  createRouter,
}
