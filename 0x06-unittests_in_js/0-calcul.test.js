const assert = require('assert');

const calculateNumber = require('./0-calcul.js');

describe("calculateNumber", function() {
  it('checks equality', function() {
    assert.equal(calculateNumber(1.1, 1.7), 3);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber(-1.1, 1.7), 1);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber(0, -1.7), -2);
  });
});
