const assert = require('assert');

const calculateNumber = require('./1-calcul.js');

describe("calculateNumber", function() {
  it('checks equality', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
