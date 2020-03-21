const mocha = require('mocha')
const chai = require('chai')
// const sinon = require('sinon')

const { describe, it } = mocha
const { expect } = chai
const clrs = require('../../api/data/colors')
const apis = [
  { name: 'colors', type: 'object' },
  { name: 'asArray', type: 'array' },
  { name: 'names', type: 'array' },
  { name: 'values', type: 'array' },
]

describe('colors test suite', () => {
  it('export should be an object', () => {
    expect(clrs).to.be.a('object')
  })

  describe('api test suite', () => {
    apis.forEach((api) => {
      it(`${api.name}: should exist in export`, () => {
        expect(clrs).to.have.property(api.name)
      })

      const refCount = Object.keys(clrs.colors).length

      if (api.type == 'array') {
        const results = clrs[api.name]()
        const count = results.length
        it(`${api.name}: should return an ${api.type}, ${count} items`, () => {
          expect(results).to.be.a(api.type)
          expect(count).to.be.eq(refCount)
        })
      } else {
        const results = clrs[api.name]
        const count = Object.keys(results).length
        it(`${api.name}: should return an ${api.type}, ${count} keys`, () => {
          expect(results).to.be.a(api.type)
          expect(count).to.be.eq(refCount)
        })
      }
    })
  })
})
