
var assert = require('better-assert');
var lterator = require('../lterator.js');

describe('lterator', function () {

  describe('array', function () {
    var a = [1, 2, 3, 4, 5], demo;
    demo = new lterator(a);

    it('It will get current number.', function () {
      assert(1 === demo.current());
    });

    it('It will get next number.', function () {
      assert(2 === demo.next());
    });

    it('It will get prev number .', function () {
      assert(1 === demo.prev());
    });

    it('It charge whether first index or not.', function () {
      assert(true === demo.itsFirst());
      assert(2 === demo.next());
      assert(3 === demo.next());
      assert(false === demo.itsFirst());
    });
  });

  describe('object', function () {
    var b = {'a': 1, 'b': 2, 'c': 3};
    var _b = new lterator(b);

    it('It will get current number', function () {
      assert(1 === _b.current());
    });

    it('It will get next number', function () {
      assert(2 === _b.next());
    });

    it('It will get prev number .', function () {
      assert(3 === _b.next());
      assert(2 === _b.prev());
    });

    it('It charge whether at the end or not .', function () {
      assert(3 === _b.next());
      assert(3 === _b.next());
      assert(3 === _b.next());
    });
  });

  describe('string', function () {
    var s = '12345';
    var _s = new lterator(s);

    it('It will get current number', function () {
      assert(1 == _s.current());
    });

    it('It will get next number', function () {
      assert(2 == _s.next());
      assert(3 == _s.next());
      assert(4 == _s.next());
      assert(5 == _s.next());
      assert(5 == _s.next());
      assert(5 == _s.next());
    });
  });

});
