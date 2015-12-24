/*
 * Name
 * -- Bot Arm
 * Description
 * -- Give some document help, like document API function 
 *    querySelector, getElementById or other else.
 * Version 
 * -- 1.0.0.
 *
 * Author by van
 * 12/24 2015
 */

(function(global, factory) {
  global.barm = factory();
})(window, function() {
  var context;
  var root = document;

  var barm = function(selector, context) {
    return new barm.fn.select(selector, context);
  };

  /**
   * Main query interface.
   *
   * @param {string} selector
   * @return {Array}
   * @public
   */
  barm.fn = barm.prototype = {
    select: function(selector) {
      var box = []; 
      var nodes = [];
      var cache, nodeCache;

      selector.replace(/([\>\-\+\~]*)(\s*[.#]?)([\d\w-]+)/g, function(match, rela, type, name, length, all) {
        box.push({rela: rela, type: type || ' ', name: name});
        return '';
      });

      var TreeA = [], i = 0, l = 0;

      cache = box.shift();

      if (cache) {
        var filterFn = filter(cache.type);

        if ( filterFn(root, cache.name) ) {
          TreeA.push(root);
        } else {
          TreeA = TreeA.concat( children(root) );
        };

        for (l = TreeA.length; i < l ; i++) {
          TreeA = TreeA.concat( children(TreeA[i]) );

          if ( filterFn(TreeA[i], cache.name) ) {
            nodes.push(TreeA[i]);
          };

          l = TreeA.length;
        };
      };

      if (box.length) {
        do {
          cache = box.shift();
          filterFn = filter(cache.type);

          for (i = 0, l = nodes.length; i < l; i++) {
            nodeCache = nodes.shift();
            nodes = nodes.concat( children(nodeCache) );
          };

          for (i = 0, l = nodes.length; i < l; i++) {
            nodeCache = nodes.shift();
            if ( filterFn(nodeCache, cache.name) ) {
              nodes.push(nodeCache);
            };
          };
        } while (box.length);
      }

      return nodes;
    }
  };

  /**
   * Retrun filter function as different nameType.
   *
   * @param {string} sysbol
   * @return {function}
   */
  function filter(sysbol) {
    var filterFunction = {
      '#': function (element, name) {
        return element.id == name;
      },
      '.': function (element, name) {
        return element.className == name;
      },
      ' ': function (element, name) {
        var reg = new RegExp(name+ "$");
        return reg.test(element.nodeName.toLowerCase());
      }
    };

    return filterFunction[sysbol];
  };

  /**
   * Retrun children nodes of parent node.
   *
   * @param {Node} parentNode
   * @return {Array}
   */
  function children(parentNode) {
    var nodes = parentNode.children;

    return covert2Ary(nodes);
  };

  /**
   * Covert document collection to array.
   *
   * @param {HTMLCollection} collection
   * @return {Array}
   */
  function covert2Ary(collection) {
    var ary = [];

    for ( var i = 0, l = collection.length; i < l; i++ ) {
      ary[i] = collection[i];
    };

    return ary;
  };

  return barm;
});
