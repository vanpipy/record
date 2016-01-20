var context = {
  required: '',
  deps: {},
  defQueue: []
};
var request;

(function(global){

  var req;
  var doc = document;
  var head = doc.getElementsByTagName('head')[0];

  req = request = function (path, fn) {
    var node;

    path = req.resolve(path);

    node = req.createNode();
    node.src = path;

    node.addEventListener('load', function () {
      fn.apply(global, context.defQueue);
    });

    head.appendChild(node);

    return path;
  };

  req.resolve = function (path) {
    path = path.split('/');

    if (!/\.js$/.test(path[path.length - 1])) {
      path[path.length - 1] = path[path.length - 1] + '.js';
    };

    if (path[0].charCodeAt(0) != 46) {
      path.unshift('.');
    };

    return path = path.join('/');
  };

  req.createNode = function () {
    var node = document.createElement('script');

    node.type = 'text/javascript';
    node.charset = 'utf-8';
    node.async = true;

    return node;
  };

})(this);
