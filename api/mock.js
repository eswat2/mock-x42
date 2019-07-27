// api/mock.js
// cSpell:ignore ssns

const Chance = require('chance')
const faker = require('faker')
const vinGenerator = require('vin-generator')

const chance = new Chance()

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const slug = (count = 3) => {
  return faker.lorem.slug(count)
}

const ssns = (count = 3, dashes) => {
  return chance.unique(chance.ssn, count, {
    dashes: dashes === 'true',
  })
}

const uuid = () => {
  return faker.random.uuid()
}

const vins = (count = 3) => {
  return chance.unique(vinGenerator.generateVin, count)
}

const utils = {
  slug,
  ssns,
  uuid,
  vins,
}

module.exports = {
  delay,
  utils,
}
