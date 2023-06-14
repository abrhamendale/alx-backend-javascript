const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment.js');
const utils = require('./utils.js');
const sinon = require("sinon");

const expect = chai.expect;

describe("calculateNumber", function() {
  it('checks equality', function() {
    sinon.spy(utils, "calculateNumber");
    const a = 1.1;
    const b = 1.7;
    sendPaymentRequestToApi(a, b);
    expect(utils.calculateNumber.calledOnce).to.be.true;
  });
});
