const { expect } = require('chai')

const responseTests = (res, api) => {
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
    api.headers.forEach(header => {
      expect(res.header).to.have.property(header)
    })
  }
}

module.exports = {
  responseTests,
}
