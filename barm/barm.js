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
      var box = nodes = nodeCache = [];
      var node = root;
      var state = true;
      var i = 0;

      selector.replace(/([\>\-\+\~]*)(\s*[.#]?)([\d\w-]+)/g, function(match, rela, type, name, length, all) {
        box.push({rela: rela, type: type || ' ', name: name});
        return '';
      });

      do {
        console.log("<---", node, Object.prototype.toString.call(node), "--->");
        // Depend on the boolean of state, go deep or broad search;
        if (state) {
          // Deep search
          node = node.firstElementChild;
          if (!node.firstElementChild) {
            // FirstElementChild is null, turn to broad search.
            state = false;
          };
        } else {
          // Broad search
          if (!state && !node.nextElementSibling) {
            // When the node is only has the relation child to parent.
            // And back to parent, the state is still false cause it's
            // do deep search ever, the state is a luck coincidence. 
            node = node.parentNode;

            // Avoid repeat visit once a node visited already. 
            // So do this, return parent node.
            continue;
          };

          // To search next brother if it has one.
          if (node.nextElementSibling) {
            node = node.nextElementSibling;
          } else {
            // And next brother is not exsit, turn to deep search.
            state = true;
          };

          // When run broard search but the node has child, turn to deep search.
          if (!state && node.firstElementChild) {
            state = true;
          };
        };

        if (node === root) {
          break;
        };
      } while (node);

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
