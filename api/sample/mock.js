// api/mock.js

const Chance = require('chance')
const faker = require('faker')
const vinGenerator = require('vin-generator')
const clrs = require('../data/colors')
const gtSports = require('../data/gtSports')

const chance = new Chance()
const colors = clrs.asArray()

const autoGet = () => {
  const color = chance.pickone(colors)
  const { make, model, year, group } = chance.pickone(gtSports.data)
  const vin = vinGenerator.generateVin()
  return {
    status: 200,
    header: { 'x-mock-api': 'auto' },
    data: {
      make,
      model,
      group,
      year,
      color,
      vin,
    },
  }
}

const colorGet = () => {
  const data = chance.pickone(colors)
  return {
    status: 200,
    header: { 'x-mock-api': 'color' },
    data,
  }
}

const gtGet = () => {
  const data = chance.pickone(gtSports.data)
  return {
    status: 200,
    header: { 'x-mock-api': 'gt' },
    data,
  }
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

module.exports = {
  autoGet,
  colorGet,
  gtGet,
  slugGet,
  ssnsGet,
  uuidGet,
  vinsGet,
}
