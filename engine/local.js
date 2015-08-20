var define, require, local;
(function(global){
  var deps = [], config = {};
  var root = document, head = root.head;

  function creatNode(){
    var node = root.creatElement("script");
    node.type = "text/javascript";
    node.charset = "utf-8";
    node.async = "async";

    return node;
  };

  function loadNode(url){
    var node = creatNode();
    node.src = url;
    head.appendChild(node);

    return watchNode(node);
  };

  function watchNode(node){
    if (typeof node == "object"){
      node.addEventListener("onload", function(){alert("loaded.")}, false);
    };
  };

  function isAry(x){
    return null;
  }

  function eachAry(ary, fn){
    
  };

  function curry(x){
    return function(y){
      return x + y;
    };
  };

})(this);
