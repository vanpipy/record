var require;

(function(global){
  var doc = document;
  var head = doc.getElementsByTagName('head')[0];

  require = function (path) {
    path = require.resolve(path);

    return path;
  };

  require.resolve = function (path) {
    return path;
  };

  require.relative = function (fn) {
    return function (path) {

    };
  };

})(this);
