'use strict';

require('mocha');
const assert = require('assert');
const isNotEven = require('./');

describe('isNotEven', function() {
  it('should return true if the number is odd:', function() {
    assert(!isNotEven(0));
    assert(!isNotEven(2));
    assert(isNotEven(1));
    assert(isNotEven(3));
    assert(isNotEven(-1));
    assert(isNotEven(-3));
    assert(isNotEven(1.0e0));
    assert(isNotEven(9007199254740991));
  });

  it('should work with strings:', function() {
    assert(!isNotEven('0'));
    assert(!isNotEven('2'));
    assert(isNotEven('1'));
    assert(isNotEven('3'));
    assert(isNotEven('1.0e0'));
    assert(isNotEven('9007199254740991'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isNotEven(), /expected a number/);
    assert.throws(() => isNotEven('foo'), /expected a number/);
    assert.throws(() => isNotEven('1.1e0'), /expected an integer/);
    assert.throws(() => isNotEven('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => isNotEven(9007199254740992), /value exceeds maximum safe integer/);
  });
});