const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');
const sinon = require("sinon");

const expect = chai.expect;

describe('calculateNumber', function() {
  it('checks equality', function (done) {
    getPaymentTokenFromAPI(true).then((res) => {
    expect(res.data).to.equal('Successful response from the API');
    done();});
  });
});
