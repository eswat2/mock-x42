const Chance = require('chance')
const faker = require('faker')
const vinGenerator = require('vin-generator')

const chance = new Chance()

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const id = () => {
  return Date.now()
}

const slug = (count = 3) => {
  return faker.lorem.slug(count)
}

const ssns = (count = 3, dashes = false) => {
  return chance.unique(chance.ssn, count, {
    dashes: dashes === 'true',
  })
}

const vins = (count = 3) => {
  return chance.unique(vinGenerator.generateVin, count)
}

module.exports = {
  delay,
  id,
  slug,
  ssns,
  vins,
}
