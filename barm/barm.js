/*
 * Bot Arm
 * Yes, it's just like a rebot Arm
 * To select someone element from the Tree.
 * Begin at 2015/07/23 21:46:--
 * author by van
 */

(function(global, factory) {
  global.barm = factory();
})(window, function() {
  var root = document;

  var barm = function(selector) {
    return new barm.fn.select(selector);
  };

  barm.fn = barm.prototype = {
    select: function(selector) {
      var box = []; 
      var nodes = [];
      var start = root;
      var i = 0;
      var cache;

      selector.replace(/([\>\-\+\~]*)(\s*[.#]?)([\d\w-]+)/g, function(match, rela, type, name, length, all) {
        box.push([rela, type, name]);
        return '';
      });

      var board = children(start);
      var deep;

      while (start.length - i) {
        console.log(i, start[i]);
        i++;

        /*
        if (start.length == i) {
          i = 0;
          deep = children(start.shift());

          while (deep.length) {

          }
        };
        */
      };

      return box;
    }
  };

  function children(parentNode) {
    var nodes = parentNode.children;

    return covert2Ary(nodes);
  };

  function covert2Ary(collection) {
    var ary = [];

    for ( var i = 0, l = collection.length; i < l; i++ ) {
      ary[i] = collection[i];
    };

    return ary;
  };

  return barm;
});
