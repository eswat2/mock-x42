// mock-api.test.js
// cSpell:ignore ssns

const mocha = require('mocha')
const chai = require('chai')
const sinon = require('sinon')

const { describe, it } = mocha
const { expect } = chai

const { delay, respondTo } = require('../api/utils')

const fakeApi = {
  status: 200,
  header: { 'x-fake': 42 },
  data: { id: 42 },
}

const header = sinon.spy()
const status = sinon.spy()
const json = sinon.spy()

const res = {
  header: (key, value) => {
    header(key, value)
    return res
  },
  status: code => {
    status(code)
    return res
  },
  json: data => {
    json(data)
    return res
  },
}

describe('utils test suite', () => {
  describe('delay', () => {
    const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    tests.forEach(step => {
      const value = delay()
      it(`${step}. should return a number between 500 & 3500 -- ${value}`, () => {
        expect(value).to.be.a('number')
        expect(value).to.be.within(500, 3500)
      })
    })
  })

  describe('respondTo', () => {
    it('should be a function', () => {
      expect(respondTo).to.be.a('function')
    })

    respondTo(res, fakeApi)

    it('should call header', () => {
      expect(header.callCount).to.equal(1)
    })
    it('should call status', () => {
      expect(status.callCount).to.equal(1)
    })
    it('should call json', () => {
      expect(json.callCount).to.equal(1)
    })
  })
})
