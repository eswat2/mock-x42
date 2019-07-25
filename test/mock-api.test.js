const mocha = require('mocha')
const chai = require('chai')
const mock = require('../mock-api')

const { describe, it } = mocha
const { expect } = chai

describe('mock-api test suite', () => {
  describe('delay', () => {
    const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    tests.forEach(step => {
      const value = mock.delay()
      it(`${step}. should return a number between 500 & 3500 -- ${value}`, () => {
        expect(value).to.be.a('number')
        expect(value).to.be.within(500, 3500)
      })
    })
  })

  describe('id', () => {
    const value = mock.id()
    it('should return a number', () => {
      expect(value).to.be.a('number')
    })
  })

  describe('slug', () => {
    const value = mock.slug()
    it('should return a string', () => {
      expect(value).to.be.a('string')
    })
    it('should contain 3 words by default', () => {
      const words = value.split('-')
      expect(words).to.have.lengthOf(3)
    })
    it('should contain 4 words when requested', () => {
      const value = mock.slug(4)
      const words = value.split('-')
      expect(words).to.have.lengthOf(4)
    })
  })

  describe('ssns', () => {
    const value = mock.ssns()
    it('should return an array', () => {
      expect(value).to.be.a('array')
    })
    it('should return 3 items by default', () => {
      expect(value).to.have.lengthOf(3)
    })
    it('should return 10 items when requested', () => {
      const value = mock.ssns(10)
      expect(value).to.have.lengthOf(10)
    })
  })

  describe('vins', () => {
    const value = mock.vins()
    it('should return an array', () => {
      expect(value).to.be.a('array')
    })
    it('should return 3 items by default', () => {
      expect(value).to.have.lengthOf(3)
    })
    it('should return 20 items when requested', () => {
      const value = mock.vins(20)
      expect(value).to.have.lengthOf(20)
    })
  })
})
