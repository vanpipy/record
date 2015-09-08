var define, require, local;
(function(global){
  var deps = [], config = {};

  var root = document,
      head = root.head;

  var shift = Array.prototype.shift;

  var op = Object.prototype,
      tostring = op.toString;

  var regPro = /^([http|https]\:\/\/)/,
      regUrl = /[\d\w\-\_]+\//g;

  var scriptCreater = {
    load: function(url){
      this.url = url;
      this.create().append().watch();
    },
    create: function(){
      var node = root.createElement("script");
      node.type = "text/javascript";
      node.charset = "utf-8";
      node.async = "async";
      this.node = node;

      return this;
    },
    watch: function(){
      var _this = this, node = this.node;

      node.addEventListener("load", function(){}, false);
      node.addEventListener("error", function(){err(_this.url +" is't exsit.")}, false);

      return this;
    },
    append: function(){
      var node = this.node;
      node.src = this.url;
      head.appendChild(node);

      return this;
    }
  };

  function isType(type){
    return function(x){
      return tostring.call(x) == "[object "+ type +"]";
    };
  };

  var isAry = isType("Array");

  function eachAry(ary, fn){
    for (var i = 0, l = ary.length;i < l;i++){fn(ary[i], i)};
  };

  function err(word){
    throw new Error(word);
  };

  function anonyer(deps, fns){
    var _deps = isAry(deps) ? deps : [],
        _fns = isAry(fns) ? fns : [];
    var concat = Array.prototype.concat;

    function _add(a, b){
      _deps = concat.apply(_deps, isAry(a) ? a : [a]);
      _fns = concat.apply(_fns, isAry(b) ? b : [b]);

      this.target = b;

      return this;
    };

    function _remove(){

    };

    function _run(){
      this.target.call(this);
    };

    return {
      add: _add,
      remove : _remove,
      run: _run
    }
  };

  var _a = anonyer(["a"] , [function(){console.log("a")}]);
  _a.add("b", function(){
    console.log(123)
  }).run();

  /* Get first script's config location from custom name local */
  eachAry(root.scripts, function(elem, i){
    if (elem.getAttribute("local")){
      var local = elem.getAttribute("local");
      scriptCreater.load(local);
    }
  });

})(this);
