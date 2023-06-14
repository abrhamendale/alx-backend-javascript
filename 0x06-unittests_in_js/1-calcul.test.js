const assert = require('assert');

const calculateNumber = require('./1-calcul.js');

describe("calculateNumber", function() {
  it('checks equality', function() {
    assert.equal(calculateNumber('SUM', 1.5, 1.9), 4);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUM', -Infinity, 0.9), -Infinity);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUM', -Infinity, Infinity), NaN);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUM', 1, 0), 1);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUBTRACT', Infinity, 1.7), Infinity);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUBTRACT', -1.5, 1.7), -3);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 0), 1);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', 1.1, 1.5), 0.5);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', Infinity, 1.7), Infinity);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', 1, Infinity), 0);
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', Infinity, 0), 'Error');
  });
  it('checks equality', function() {
    assert.equal(calculateNumber('DIVIDE', Infinity, Infinity), NaN);
  });
});
