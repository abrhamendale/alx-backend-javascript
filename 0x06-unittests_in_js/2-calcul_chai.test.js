const assert = require('assert');
const chai = require('chai');
const calculateNumber = require('./1-calcul.js');

const expect = chai.expect;

describe("calculateNumber", function() {
  it('checks equality', function() {
    expect(calculateNumber('SUM', 1.1, 1.7) === 3).to.be.true;
  });
  it('checks equality', function() {
    expect(calculateNumber('SUM', -1.1, 1.7) === 1).to.be.true;
  });
  it('checks equality', function() {1
    expect(calculateNumber('DIVIDE', 1, 0) === 0).to.be.false;
  });
});
