// router.test.js
// cSpell:ignore ssns

const chai = require('chai')
const { expect } = chai
const request = require('supertest')
const express = require('express')

const { createRouter } = require('../api/router')

const app = express()
const router = createRouter(express)

app.use('/api', router)

describe('app router test suite', () => {
  describe('createRouter', () => {
    it('should be a function', () => {
      expect(createRouter).to.be.a('function')
    })

    const value = createRouter(express)

    it('should return an object', () => {
      expect(value).to.be.a('function')
    })
  })

  describe('api test suite', () => {
    const tests = [
      { name: '', type: 'object' },
      { name: '/slug', type: 'string' },
      { name: '/ssns', type: 'array' },
      { name: '/uuid', type: 'string' },
      { name: '/vins', type: 'array' },
    ]

    tests.forEach(api => {
      describe(`api${api.name}`, () => {
        it(`should respond to api${api.name}`, () => {
          request(app)
            .get(`/api${api.name}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(res => {
              expect(res.body).to.be.a(api.type)
              if (api.type === 'array') {
                expect(res.body).to.have.lengthOf(3)
              }
            })
            .end(function(err, res) {
              if (err) throw err
            })
        })
      })
    })
  })
})
