const Chance = require('chance')
const faker = require('faker')
const vinGenerator = require('vin-generator')
const gts = require('./gtsports')

const chance = new Chance()

const createID = () => {
  return Date.now()
}

const createVINs = count => {
  return chance.unique(vinGenerator.generateVin, count)
}

// NOTE:  verify the data... (property order matters)
const compare = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

module.exports = {
  compare,
  createID,
  createVINs,
  delay,
}
