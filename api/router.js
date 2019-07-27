// api/router.js
// cSpell:ignore ssns

const { utils } = require('./mock')

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
}
