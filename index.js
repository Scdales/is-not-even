/*!
 * is-not-odd <https://github.com/Scdales/is-not-odd>
 *
 * Copyright (c) 2015-2017, Sean Daley.
 * Released under the MIT License.
 */

'use strict';

const isNumber = require('is-number');

module.exports = function isNotOdd(value) {
  const n = Math.abs(value);
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error('value exceeds maximum safe integer');
  }
  return (n % 2) === 0;
};