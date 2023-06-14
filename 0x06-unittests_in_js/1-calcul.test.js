const assert = require('assert');

const calculateNumber = require('./1-calcul.js');

describe("calculateNumber", function() {
  it('checks equality', function() {
    assert.equal(calculateNumber('SUM', 1.1, 1.7), 3);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUM', -1.1, 1.7), 1);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 0), 0);
  });
});
