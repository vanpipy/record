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

  function makeLterator(target, lterator) {
    target['lterator'] = lterator;
  };

  var lterator = factory();

  if (global.barm) {
    makeLterator(barm, lterator);
  } else if (typeof define == 'function') {
    return lterator;
  } else {
    makeLterator(global, lterator);
  };

})(this, function () {

  var op = Object.prototype;
  var tostring = op.toString;
  var hasOwn = op.hasOwnProperty; 

  function lterator (data) {
    this.keys = [];
    this.data = data;
    this.pointer = 0;

    this.setLength();
  };

  lterator.prototype.setLength = function () {
    this.length = this.setKeys(this.data);
  };

  lterator.prototype.setKeys = function (input) {
    if (input.length) {
      for (var i = 0, l = input.length; i < l; i++) {
        this.keys[i] = i;
      };
    } else {
      for (var each in input) {
        this.keys.push(each);
      };
    };

    return this.length = this.keys.length;
  };

  lterator.prototype.current = function () {
    return this.data[ this.keys[this.pointer] ];
  };

  lterator.prototype.next = function () {
    this.hasNext() ? this.pointer++ : 0;
    return this.current();
  };

  lterator.prototype.prev = function () {
    this.itsFirst() ? 0 : this.pointer--;
    return this.current();
  };

  lterator.prototype.hasNext = function () {
    return this.length - 1 > this.pointer ? 1 : 0;
  };

  lterator.prototype.itsFirst = function () {
    return this.pointer === 0 ? true : false;
  };

  return lterator;
});
