// api/mock.js
// cSpell:ignore ssns

const Chance = require('chance')
const faker = require('faker')
const vinGenerator = require('vin-generator')

const chance = new Chance()

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const slugGet = (count = 3) => {
  const data = faker.lorem.slug(count)
  return {
    status: 200,
    header: { 'x-mock-api': 'slug', 'x-mock-count': count },
    data,
  }
}

const ssnsGet = (count = 3, dashes) => {
  const data = chance.unique(chance.ssn, count, {
    dashes: dashes === 'true',
  })
  return {
    status: 200,
    header: { 'x-mock-api': 'ssns', 'x-mock-count': count },
    data,
  }
}

const uuidGet = () => {
  const data = faker.random.uuid()
  return {
    status: 200,
    header: { 'x-mock-api': 'uuid' },
    data,
  }
}

const vinsGet = (count = 3) => {
  const data = chance.unique(vinGenerator.generateVin, count)
  return {
    status: 200,
    header: { 'x-mock-api': 'vins', 'x-mock-count': count },
    data,
  }
}

const respondTo = (res, mock) => {
  const { status, header, data } = mock
  const keys = Object.keys(header)
  keys.forEach(key => {
    res.header(key, header[key])
  })
  res.status(status).json(data)
}

const mocks = {
  slugGet,
  ssnsGet,
  uuidGet,
  vinsGet,
}

const utils = {
  delay,
  respondTo,
}

module.exports = {
  mocks,
  utils,
}
