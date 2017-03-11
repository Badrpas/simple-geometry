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
        .contains({x: 2, y: 3});
    });
  });

  describe("Immutable", function() {
    let original;

    beforeEach(function () {
      original = new Vector({x: 2, y: 3});
    });

    it("Creation from other Vector", function() {
      test.assert(new Vector(original) !== original);
    });

    it("normalize()", function() {
      test.assert(original.normalize() !== original);
    });

    it("invert()", function() {
      test.assert(original.invert() !== original);
    });

    it("setLength()", function() {
      test.assert(original.setLength(123) !== original);
    });

    it("add()", function() {
      test.assert(original.add(new Vector(3,2)) !== original);
    });
    
    it("sub()", function() {
      test.assert(original.sub(new Vector(3,2)) !== original);
    });
    
    it("interpolate()", function() {
      test.assert(original.interpolate(new Vector(3,2), 0.5) !== original);
    });
  });

  describe("Methods", function() {
    let v;

    beforeEach(function () {
      v = new Vector(2, 3);
    });

    it("length()", function() {
      test
        .number(v.length())
        .is(Math.sqrt(2*2 + 3*3));
    });

    it("lengthTo()", function() {
      test
        .number(v.lengthTo(new Vector(2, 2)))
          .is(1)
        .number(v.lengthTo(2, 2))
          .is(1)
        .number(v.lengthTo([2, 2]))
          .is(1)
        .number(v.lengthTo(2))
          .is(1);
    });

    it("squaredLength()", function() {
      test
        .number(v.squaredLength())
        .is(2*2 + 3*3);
    });

    it("squaredLengthTo()", function() {
      test
        .number(v.squaredLengthTo(new Vector(2, 2)))
          .is(1)
        .number(v.squaredLengthTo(2, 2))
          .is(1)
        .number(v.squaredLengthTo([2, 2]))
          .is(1)
        .number(v.squaredLengthTo(2))
          .is(1);
    });
  });
});
