'use strict';

let test = require('unit.js'); //jshint ignore:line
let {Vector} = require('..');

describe('Vector', function () {

  it('Availability check', function () {
    test.assert(typeof Vector === 'function');
  });

  describe("Constructor", function() {
    it("No arguments", function() {
      test
        .object(new Vector())
        .contains({x: 0, y: 0});
    });

    it("Usual x and y", function() {
      test
        .object(new Vector(2, 3))
        .contains({x: 2, y: 3});
    });

    it("From array", function() {
      test
        .object(new Vector([2, 3]))
        .contains({x: 2, y: 3});
    });

    it("From object", function() {
      test
        .object(new Vector({x: 2, y: 3}))
        .contains({x: 2, y: 3});
    });

    it("From other Vector", function() {
      let original = new Vector({x: 2, y: 3}); 
      test
        .object(new Vector(original))
        .contains({x: 2, y: 3})
        .isNotEqualTo(original);
    });
  });
});
