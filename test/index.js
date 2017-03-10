'use strict';

let test = require('unit.js');
let {Vector} = require('../src');

describe('Basic', function () {

  it('Availability check', function () {
    test.assert(typeof Vector === 'function');
  });
});