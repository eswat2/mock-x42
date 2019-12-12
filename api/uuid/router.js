const { respondTo } = require('../utils')

function b(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b)
}

const uuidGet = () => {
  const data = b()
  return {
    status: 200,
    header: { 'x-mock-api': 'uuid' },
    data,
  }
}

// ROUTE Factory for our API
// =============================================================================
const createRouter = express => {
  const router = express.Router() // get an instance of the express Router

  router.get('/', (req, res) => {
    respondTo(res, uuidGet())
  })

  // more routes for our API will happen here

  return router
}

module.exports = {
  createRouter,
}
