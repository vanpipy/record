/*
 * Bot Arm
 * Yes, it's just like a rebot Arm
 * To select someone element from the Tree.
 * Begin at 2015/07/23 21:46:--
 * author by van
 */

(function(global, factory){
  global.barm = new factory();
})(window, function(){

  var barm = function(selector){
    return new barm.fn.select(selector);
  };

  barm.fn = barm.prototype = {
    select: function(selector){
      var s = [];
      selector.replace(/([\s>~]?)([.#]?)([\d\w-]+)/g, function(all, relation, attrType, name){
        s.push([relation, attrType, name]);
        return '';
      });

      return s;
    }
  };

  return barm;
});
