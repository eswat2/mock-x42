const Chance = require('chance')
const faker = require('faker')
const vinGenerator = require('vin-generator')

const chance = new Chance()

const id = () => {
  return Date.now()
}

const ssns = (count, dashes) => {
  return chance.unique(chance.ssn, count, {
    dashes: dashes === 'true',
  })
}

const vins = count => {
  return chance.unique(vinGenerator.generateVin, count)
}

const slug = count => {
  return faker.lorem.slug(count)
}

// NOTE:  verify the data... (property order matters)
const compare = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

module.exports = {
  compare,
  delay,
  id,
  slug,
  ssns,
  vins,
}
