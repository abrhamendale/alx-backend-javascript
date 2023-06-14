const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');
const sinon = require("sinon");

const expect = chai.expect;

describe("calculateNumber", function() {
  it('checks equality', function(done) {
    const res = getPaymentTokenFromAPI(true);
    return res.then(function(dat) {
      expect(dat.data).to.eventually.equal('Successful response from the API');
      done(error);});
  });
});
