/**
 *  Lterator
 *  Make the same visit way for ['array', 'object', 'string', 'number'];
 *  
 *  @example
 *  var demo = {'a': 1, 'b': 2} || [1, 2, 3] || '123' || 123;
 *  var exa = new lterator(demo);
 *
 *  exa.__ALL__ to show all method avaliable.
 */

(function (global, factory, undefined) {

  var lterator = factory();

  function makeLterator(target, fn) {
    target[lterator.name] = fn;
  };

  if (global.barm) {
    makeLterator(barm, lterator);
  } else if (module) {
    module.exports = lterator;
  } else if (typeof define == 'function') {
    return lterator;
  } else {
    makeLterator(global, lterator);
  };

})(this, function () {

  var op = Object.prototype;
  var tostring = op.toString;
  var hasOwn = op.hasOwnProperty; 

  /**
   * @name lterator
   * Function lterator entry,
   * return a lterator object.
   *
   * @param {object||array||string||number} data
   */
  function lterator (data) {
    this.version = '0.0.1';
    this._name_ = 'lterator';

    this.keys = [];
    this.data = data;
    this.pointer = 0;

    this.length = this.setKeys(this.data);
  };

  /**
   * @name setKeys
   * Loop input data index as keys array.
   *
   * @param {object||array||string||number} data
   * @method
   */
  lterator.prototype.setKeys = function (input) {
    if (input.length) {
      for (var i = 0, l = input.length; i < l; i++) {
        this.keys[i] = i;
      };
    } else {
      for (var each in input) {
        if (hasOwn.call(input, each)) {
          this.keys.push(each);
        }
      };
    };

    return this.keys.length;
  };

  /**
   * @name current
   * return current value.
   *
   * @method
   * @return {}
   */
  lterator.prototype.current = function () {
    return this.data[ this.keys[this.pointer] ];
  };

  /**
   * @name next
   * Go to next position && return value.
   *
   * @method
   * @return {}
   */
  lterator.prototype.next = function () {
    this.hasNext() ? this.pointer++ : 0;
    return this.current();
  };

  /**
   * @name prev
   * Go to previous position && return value.
   *
   * @method
   * @return {}
   */
  lterator.prototype.prev = function () {
    this.itsFirst() ? 0 : this.pointer--;
    return this.current();
  };

  /**
   * @name setKeys
   * Loop input data index as keys array.
   *
   * @method
   * @return {number}
   */
  lterator.prototype.hasNext = function () {
    return this.length - 1 > this.pointer ? 1 : 0;
  };

  /**
   * @name itsFirst
   * Charge whether pointer at first index or not.
   *
   * @method
   * @return {boolean}
   */
  lterator.prototype.itsFirst = function () {
    return this.pointer === 0 ? true : false;
  };

  lterator.version = '0.0.1';
  lterator.name = 'lterator';

  return lterator;
});
