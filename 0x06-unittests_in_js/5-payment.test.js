const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment.js');
const utils = require('./utils.js');
const sinon = require("sinon");

const expect = chai.expect;

describe('hooks', function() {
  before(function() {
    sinon.spy(console, "log");
  });
  describe("calculateNumber", function() {
    it('checks equality', function(done) {
      sendPaymentRequestToApi(100, 20);
      expect(console.log.returned('The total is: 120'));
      done();
    });
    it('checks equalit', function(done) {
      sendPaymentRequestToApi(10, 10);
      expect(console.log.returned('The total is: 10'));
      done();
    });
  });
});
