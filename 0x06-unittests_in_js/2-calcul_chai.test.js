const assert = require('assert');
const chai = require('chai');
const calculateNumber = require('./1-calcul.js');

const expect = chai.expect;

describe("calculateNumber", function() {
  it('checks equality', function() {
    expect(calculateNumber('SUM', 1.4, 4.5) === 6).to.be.true;
  });
  it('checks equality', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5) === -4).to.be.true;
  });
  it('checks equality', function() {1
    expect(calculateNumber('DIVIDE', 1.4, 4.5) === 0.2).to.be.true;
  });
  it('checks equality', function() {1
    expect(calculateNumber('DIVIDE', 1.4, 0) === 'Error').to.be.true;
  });
});
