// api/utils.js

const Chance = require('chance')
const chance = new Chance()

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const expandQuery = query => {
  const keys = Object.keys(query)
  return keys.reduce((acc, key, index) => {
    const separator = index ? '&' : '?'
    return `${acc}${separator}${key}=${query[key]}`
  }, '')
}

const respondTo = (res, mock) => {
  const { status, header, data } = mock
  const keys = Object.keys(header)
  keys.forEach(key => {
    res.header(key, header[key])
  })
  res.status(status).json(data)
}

module.exports = {
  delay,
  expandQuery,
  respondTo,
}
