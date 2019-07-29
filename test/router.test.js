// router.test.js
// cSpell:ignore ssns

const mocha = require('mocha')
const chai = require('chai')
const request = require('supertest')
const express = require('express')

const { createRouter } = require('../api/router')
const { describe, it } = mocha
const { expect } = chai

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
        name: '/slug',
        type: 'string',
        headers: ['x-mock-api', 'x-mock-count'],
      },
      {
        name: '/ssns',
        type: 'array',
        count: 3,
        headers: ['x-mock-api', 'x-mock-count'],
      },
      {
        name: '/uuid',
        type: 'string',
        headers: ['x-mock-api'],
      },
      {
        name: '/vins',
        type: 'array',
        count: 3,
        headers: ['x-mock-api', 'x-mock-count'],
      },
    ]

    tests.forEach(api => {
      describe(`GET: api${api.name}`, () => {
        it(`should respond to api${api.name} with ${api.type}`, () => {
          request(app)
            .get(`/api${api.name}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(res => {
              expect(res.body).to.be.a(api.type)
              if (api.count) {
                expect(res.body).to.have.lengthOf(api.count)
              }
              if (api.props) {
                api.props.forEach(prop => {
                  expect(res.body).to.have.property(prop)
                })
              }
              if (api.headers) {
                api.headers.forEach(prop => {
                  expect(res.header).to.have.property(prop)
                })
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
