// mock-api.test.js
// cSpell:ignore ssns

const mocha = require('mocha')
const chai = require('chai')
const sinon = require('sinon')
const { mocks, utils } = require('../api/mock')
const router = require('../api/router')

const { describe, it } = mocha
const { expect } = chai
const { slugGet, ssnsGet, uuidGet, vinsGet } = mocks
const { delay, respondTo } = utils
const { createRouter } = router

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

const generalApi = (tag, type, value, count) => {
  describe(`generalApi test suite - ${tag}`, () => {
    it('api: should be a function', () => {
      expect(slugGet).to.be.a('function')
    })

    it('api: should return an object', () => {
      expect(value).to.be.a('object')
    })

    it('api: should include 3 properties: status, header, data', () => {
      expect(value).to.have.property('status')
      expect(value).to.have.property('header')
      expect(value).to.have.property('data')
    })

    it('api: should return status set to 200', () => {
      expect(value.status).to.equal(200)
    })

    it(`api; should return header with x-mock-api ${tag}`, () => {
      expect(value.header).to.have.property('x-mock-api')
      expect(value.header['x-mock-api']).to.equal(tag)
    })

    if (count) {
      it(`api; should return header with x-mock-count ${count}`, () => {
        expect(value.header).to.have.property('x-mock-count')
        expect(value.header['x-mock-count']).to.equal(count)
      })
    }

    it(`api: should return data as ${type}`, () => {
      expect(value.data).to.be.a(type)
    })
  })
}

describe('mock-api test suite', () => {
  describe('createRouter', () => {
    it('should be a function', () => {
      expect(createRouter).to.be.a('function')
    })
  })

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
  })

  describe('mocks test suite', () => {
    describe('slugGet', () => {
      generalApi('slug', 'string', slugGet(), 3)

      it('data: should contain 3 words by default', () => {
        const value = slugGet().data
        const words = value.split('-')
        expect(words).to.have.lengthOf(3)
      })

      it('data: should contain 4 words when requested', () => {
        const value = slugGet(4).data
        const words = value.split('-')
        expect(words).to.have.lengthOf(4)
      })
    })

    describe('ssnsGet', () => {
      generalApi('ssns', 'array', ssnsGet(), 3)

      it('data: should return 3 items by default', () => {
        const value = ssnsGet().data
        expect(value).to.have.lengthOf(3)
      })
      it('data: should return 10 items when requested', () => {
        const value = ssnsGet(10).data
        expect(value).to.have.lengthOf(10)
      })
    })

    describe('uuidGet', () => {
      generalApi('uuid', 'string', uuidGet())

      const value = uuidGet().data
      const words = value.split('-')
      const count = words.length

      it('data: should contain dashes', () => {
        expect(value).to.include('-')
      })
      it(`data: should contain dashes -- ${count}`, () => {
        expect(words).to.not.be.empty
      })
    })

    describe('vinsGet', () => {
      generalApi('vins', 'array', vinsGet(), 3)

      it('data: should return 3 items by default', () => {
        const value = vinsGet().data
        expect(value).to.have.lengthOf(3)
      })
      it('data: should return 10 items when requested', () => {
        const value = vinsGet(10).data
        expect(value).to.have.lengthOf(10)
      })
    })
  })
})
