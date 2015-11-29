/*
 * Bot Arm
 * Yes, it's just like a rebot Arm
 * To select someone element from the Tree.
 * Begin at 2015/07/23 21:46:--
 * author by van
 *
 * Hahaha it's first time I try to complete a arm in web brower.
 * In this time, it's really not hard, but I spend lots of time to understand
 * how it's going in web brower. Everything always worth to try and
 * everything need to try, cause I am not smart enough. 
 * Just do it always a nice way for me :).
 *
 * The first part 1 end at 2015/11/29 20:58:--
 */

(function(global, factory) {
  global.barm = factory();
})(window, function() {
  var context;
  var root = document;

  var barm = function(selector, context) {
    return new barm.fn.select(selector, context);
  };

  barm.fn = barm.prototype = {
    select: function(selector) {
      var box = []; 
      var nodes = [];
      var start = context || root;
      var i = 0;
      var cache;

      selector.replace(/([\>\-\+\~]*)(\s*[.#]?)([\d\w-]+)/g, function(match, rela, type, name, length, all) {
        box.push({rela: rela, type: type, name: name});
        return '';
      });

      var a = [start];
      var b = [];

      for (; i < a.length; i++) {
        b = b.concat(children(a[i]));

        if (b.length) {
          filterElement(b, box, nodes);
        }

        if (i + 1 == a.length && b.length != 0) {
          a = b;
          b = [];
          i = -1;
        }else {
          continue;
        };
      };

      return nodes;
    }
  };

  function filterElement(elementAry, markAry, nodesAry) {
    var filterFn;
    
    for (var i = 0, l = markAry.length; i < l; i++) {
      for (var k =  0, len = elementAry.length; k < len; k++) {
        filterFn = filterName(markAry[i].type);

        if (filterFn(elementAry[k], markAry[i].name)) {
          setDOM(nodesAry, elementAry[k]);
        };
      };
    };
  };

  function filterName(sysbol) {
    return function (element, name) {
      var equalTarget = false;

      if (sysbol == "#") {
        equalTarget = element.id == name;
      }else if (sysbol == ".") {
        equalTarget = element.className == name;
      }else {
        var reg = new RegExp(name);
        equalTarget = reg.test(element.nodeName.toLowerCase());
      };

      return equalTarget;
    };
  };

  function setDOM(cacheAry, element) {
    if (!element._setIn) {
      element._setIn = true;
    }else {
      return false;
    };

    cacheAry.push(element);
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
