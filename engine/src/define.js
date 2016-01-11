var define;

(function(global){

  var req;
  
  function module (map) {
    this.deps = [];
    this.map = map;
  };

  module.exports = {};

  define = function (fn) {
    req = require.relative(fn);
    fn.call(global, req, module, module.exports);
  };

})(this);
