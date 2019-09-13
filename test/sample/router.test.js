// router.test.js

const mocha = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const express = require('express')

const { createRouter } = require('../../api/sample/router')

const { describe, it } = mocha
const { expect } = chai

chai.should()
chai.use(chaiHttp)

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
      { name: '', type: 'object', props: ['message'] },
      {
        name: '/auto',
        type: 'object',
        headers: ['x-mock-api'],
        props: ['make', 'model', 'year', 'group', 'color', 'vin'],
        status: 200,
      },
      {
        name: '/color',
        type: 'object',
        headers: ['x-mock-api'],
        props: ['name', 'value'],
        status: 200,
      },
      {
        name: '/gt',
        type: 'object',
        headers: ['x-mock-api'],
        props: ['make', 'model', 'year', 'group'],
        status: 200,
      },
      {
        name: '/slug',
        type: 'string',
        headers: ['x-mock-api', 'x-mock-count'],
        status: 200,
      },
      {
        name: '/ssns',
        type: 'array',
        count: 3,
        headers: ['x-mock-api', 'x-mock-count'],
        status: 200,
      },
      {
        name: '/uuid',
        type: 'string',
        headers: ['x-mock-api'],
        status: 200,
      },
      {
        name: '/vins',
        type: 'array',
        count: 3,
        headers: ['x-mock-api', 'x-mock-count'],
        status: 200,
      },
    ]

    tests.forEach(api => {
      describe(`GET: api${api.name}`, () => {
        it(`should respond to api${api.name} with ${api.type}`, () => {
          chai
            .request(app)
            .get(`/api${api.name}`)
            .buffer()
            .end((err, res) => {
              if (err) throw err
              if (api.status) {
                res.should.have.status(api.status)
              }
              if (api.type) {
                res.body.should.be.a(api.type)
              }
              if (api.count) {
                res.body.length.should.be.eql(api.count)
              }
              if (api.props) {
                api.props.forEach(prop => {
                  res.body.should.have.property(prop)
                })
              }
              if (api.headers) {
                api.headers.forEach(header => {
                  res.headers.should.have.property(header)
                })
              }
            })
        })
      })
    })
  })
})
