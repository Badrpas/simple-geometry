'use strict';

class Vector {

  constructor (x, y) {
    if (!x && x !== 0) {
      this.x = 0;
      this.y = 0;
      return;
    }

    switch (x.constructor.name) {
      case 'Vector':
        Object.assign(this, x);
        break;
      case 'Object':
        Object.assign(this, x);
        this.x = this.x || 0;
        this.y = this.y || 0;
        break;
      case 'Array':
        this.x = x[0] || 0;
        this.y = x[1] || 0;
        break;
      default:
        this.x = x || 0;
        this.y = y || 0;
        arguments.length === 1 && (this.y = this.x);
    }
  }

  transformOther (other) {
    if (other && other instanceof Vector) {
      return other;
    }
    return new Vector(...arguments);
  }

  length () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  lengthTo (other) {
    other = this.transformOther(...arguments);
    return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
  }

  squaredLength () {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
  }

  squaredLengthTo (other) {
    other = this.transformOther(...arguments);
    return Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2);
  }

  dot (other) {
    other = this.transformOther(...arguments);
    return this.x * other.x + this.y * other.y;
  }

  normalize () {
    let l = this.length();
    return new Vector(this.x / l, this.y / l);
  }

  invert () {
    return new Vector(-this.x, -this.y);
  }

  /**
   * Execute .normlize().scalar(length)
   * @param   {number}  length
   * @return  {Vector}         New vector with given length
   */

  setLength (length) {
    return this.normalize().scalar(length);
  }

  add (other) {
    other = this.transformOther(...arguments);
    return new Vector([this.x + other.x, this.y + other.y]);
  }

  sub (other) {
    other = this.transformOther(...arguments);
    return new Vector([this.x - other.x, this.y - other.y]);
  }

  cross (other) {
    other = this.transformOther(...arguments);
    return ((this.x * other.y) - (this.y * other.x));
  }

  angle () {
    return Math.atan2(this.y, this.x);
  }

  multiply (k) {
    if (k || k === 0) {
      return new Vector([k * this.x, k * this.y]);
    }
  }

  scalar (k) {
    return this.multiply(k);
  }

  /**
   * From this vector in direction of given vector - interpolate by given coefficient
   * @param  {Vector} other End point in which direction we going to interpolate
   * @param  {number} coef  Coefficient of how much we want to move in given direction
   * @return {Vector}       Point of interpolation
   */
  interpolate (other, y, coef) {
    let args = [...arguments];
    if (coef === void 0) {
      coef = y;
      y = void 0;
      args = args.slice(0,2);
    }
    other = this.transformOther(...args);
    return new Vector(this.x * (1 - coef) + other.x * coef, this.y * (1 - coef) + other.y * coef);
  }

  equals (other) {
    other = this.transformOther(...arguments);
    return this.x === other.x && this.y === other.y;
  }

  equalsRound (other) {
    other = this.transformOther(...arguments);
    return Math.round(this.x) === Math.round(other.x)
        && Math.round(this.y) === Math.round(other.y); // jshint ignore:line
  }

}

module.exports = Vector;