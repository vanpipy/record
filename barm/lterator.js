/**
 *  Lterator
 *
 *
 */

(function (global, undefined) {

  var op = Object.prototype;
  var tostring = op.toString;
  var hasOwn = op.hasOwnProperty; 
  var isFun = is('function');
  var isAry = is('array');
  var isObj = is('object');

  function is (type) {
    return function (o) {
      return tostring.call(o) === '[object '+ type +']';
    };
  };

  function lterator (data) {
    this.index = [];
    this.data = data;
    this.pointer = 0;

    this.init();
  };

  lterator.prototype.init = function () {
    for (var i = 0, l = this.data.length; i < l; i++) {
      this.index[i] = i;
    };
  };

  lterator.prototype.current = function () {
    return this.data[ this.index[this.pointer] ];
  };

  lterator.prototype.next = function () {
    this.pointer++;
  };

  window.lterator = lterator;

})(window);

var a = ['a', 'b', 'c'];

var b = new lterator(a);

b.current();
b.next();
b.current();
