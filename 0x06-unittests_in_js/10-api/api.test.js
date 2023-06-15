const chai = require('chai');
const request = require('request');

const expect = chai.expect;

describe('get test', function() {
  it('checks equality', function (done) {
    request('http://localhost:7865/cart/12', methods='GET', function (error, response, body) {
      expect(response.statusCode == 200).to.be.true;
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('checks equality', function (done) {
    request('http://localhost:7865/cart/abc', methods='GET', function (error, response, body) {      expect(response.statusCode == 404).to.be.true;
      done();
    });
  });
});
