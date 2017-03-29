var express = require('express'),
  request = require('supertest')

describe('app.all()', function () {
  it('should add a router per method', function (done) {
    var app = express()

    app.all('/seth', function (req, res) {
      res.end(req.method)
    })

    request(app)
    .put('/seth')
    .expect('PUT', function () {
      request(app)
      .get('/seth')
      .expect('GET', done)
    })
  })

  it('should run the callback for a method just once', function (done) {
    var app = express(),
      n = 0

    app.all('/*', function (req, res, next) {
      if (n++) return done(new Error('DELETE called several times'))
      next()
    })

    request(app)
    .del('/seth')
    .expect(404, done)
  })
})