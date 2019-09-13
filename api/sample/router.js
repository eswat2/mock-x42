// api/router.js

const {
  autoGet,
  colorGet,
  gtGet,
  slugGet,
  ssnsGet,
  uuidGet,
  vinsGet,
} = require('./mock')
const { respondTo } = require('../utils')

// ROUTE Factory for our API
// =============================================================================
const createRouter = express => {
  const router = express.Router() // get an instance of the express Router

  router.get('/', (req, res) => {
    res.json({
      message:
        'hooray! welcome to our Mock api!... [ auto, color, gt, slug, ssns, uuid, vins ]',
    })
  })

  // more routes for our API will happen here

  router.get('/auto', (req, res) => {
    respondTo(res, autoGet())
  })

  router.get('/color', (req, res) => {
    respondTo(res, colorGet())
  })

  router.get('/gt', (req, res) => {
    respondTo(res, gtGet())
  })

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
