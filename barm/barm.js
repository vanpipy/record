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
      var nodeCache = [];
      var fns = [];

      var node = root;

      var state = true;
      var catchTime = false;

      selector.replace(/([\>\-\+\~]*)(\s*[.#]?)([\d\w-]+)/g, function(match, rela, type, name, length, all) {
        box.push({rela: rela, type: type || ' ', name: name});
        return '';
      });

      for (var i = 0, l = box.length; i < l; i++) {
        fns[i] = filter(box[i].type);
      };

      i = 0; 

      do {
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

            catchTime = false;

            // Avoid repeat visit once a node visited already. 
            // So do this, goto next loop.
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

        //Open catch progress when any match happened.
        if ( i < l && fns[i](node, box[i].name) ) {
          catchTime = true;
        };

        if ( catchTime ) {
          //Catching next node again and again.
          //And if got it once, try to cache it.
          if (fns[i](node, box[i].name)) {
            //Try to cache the match node, if the index of match is the last one.  
            if (i == l - 1) {
              nodes.push(node);

              //Once cached successfully, keep the match function state,
              //waiting next right node, if the rest of searching has more node matched.
              continue;
            };

            i++;
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
    return {
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
    }[ (sysbol.length > 1 && trim(sysbol)) || sysbol ];
  };

  function trim (string) {
    return string.replace(/^\s+/, '').replace(/\s+$/, '');
  };

  return barm;
});
