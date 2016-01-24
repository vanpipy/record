/**
 *  Lterator
 *
 *
 */

(function (global, factory, undefined) {

  global.lterator = factory();

})(this, function () {

  var op = Object.prototype;
  var tostring = op.toString;
  var hasOwn = op.hasOwnProperty; 
  var isFun = is('Function');
  var isAry = is('Array');
  var isObj = is('Object');

  function is (type) {
    return function (o) {
      return tostring.call(o) === '[object '+ type +']';
    };
  };

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

var a = ['a', 'b', 'c'];
var c = {'a': 'abc', 'b': 2, 'c': 3};

var b = new lterator(a);

console.log(b);
console.log(b.current());
console.log(b.next());
console.log(b.next());
console.log(b.prev());
