const mocha = require('mocha')
const chai = require('chai')
// const sinon = require('sinon')

const { describe, it } = mocha
const { expect } = chai
const { data, total, filters } = require('../../api/data/gtSports')
const props = ['nonExotics', 'exotics', 'makes', 'groups']

describe('gtSports test suite', () => {
  it('data: should be an array', () => {
    expect(data).to.be.a('array')
  })
  it('total: should be an number', () => {
    expect(total).to.be.a('number')
  })
  it('total: should be equal to the length of data', () => {
    expect(total).to.be.eql(data.length)
  })
  it('filters: should be an object', () => {
    expect(filters).to.be.a('object')
  })

  describe('filters test suite', () => {
    props.forEach(prop => {
      it(`${prop}: should exist in filters`, () => {
        expect(filters).to.have.property(prop)
      })
      it(`${prop}: should filter data`, () => {
        const results = filters[prop](data)
        expect(results).to.be.a('array')
        expect(results.length).to.be.greaterThan(0)
      })
    })
  })
})
