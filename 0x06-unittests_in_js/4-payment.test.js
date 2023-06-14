const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment.js');
const utils = require('./utils.js');
const sinon = require("sinon");

const expect = chai.expect;

describe("calculateNumber", function() {
  it('checks equality', function() {
    const calculateNumberStub= sinon.stub(utils, "calculateNumber").returns(10);
    const cl_spy = sinon.spy(console, "log"); 
    const a = 100;
    const b = 20;
    sendPaymentRequestToApi(a, b);
    expect(calculateNumberStub()).to.equal(10);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(cl_spy.returned('The total is: 10'));
  });
});
