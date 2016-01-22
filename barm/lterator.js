/**
 *  Lterator
 *
 *
 */

(function (global, undefined) {

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
    this.length = 0;

    this.setKeys(this.data);
  };

  lterator.prototype.setKeys = function (input) {
    if (isAry(input)) {
      this.length = input.length;

      for (var i = 0, l = this.length; i < l; i++) {
        this.keys[i] = i;
      };
    };

    if (isObj(input)) {
      for (var each in input) {
        this.keys.push(each);
      };

      this.length = this.keys.length;
    };

    return this.length;
  };

  lterator.prototype.current = function () {
    return this.data[ this.keys[this.pointer] ];
  };

  lterator.prototype.next = function () {
    this.pointer++;
    return this.current();
  };

  window.lterator = lterator;

})(window);

var a = ['a', 'b', 'c'];
var c = {'a': 'abc', 'b': 2, 'c': 3};

var b = new lterator(c);

console.log(b.current());
console.log(b.next());
console.log(b.next());
