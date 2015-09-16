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

  function eachObj(obj, fn){
    for (var each in obj){fn(obj[each], each)};
  }

  function err(word){
    throw new Error(word);
  };

  /*
   * @param -->['a', 'b'], [funA, funB]
   * @return -->{key : value...}
   */
  function anonyer(deps, fns){
    var _unit = {};
    var _come_in;

    _add(deps, fns);

    function _add(key, value){
      var _k = [].concat(key),
          _v = [].concat(value);

      _modify(_k, _v);
    };

    function _remove(key){
      var _keys = [].concat(!key ? _come_in : key);
      var cache = {};

      eachAry(_keys, function(elem, i){
        _unit[_keys[i]] = undefined;
      });

      eachObj(_unit, function(v, k){
        if (!!_unit[k]){
          cache[k] = _unit[k];
        }
      });

      return _unit = cache;
    };

    function _run(key){
      _unit[key].call(global);
    };

    function _modify(deps, fns){
      _come_in = deps;

      eachAry(deps, function(elem, i){
        _unit[deps[i]] = fns[i];
      });
    };

    return {
      add: _add,
      remove : _remove,
      run: _run
    }
  };

  var _a = new anonyer(["a"] , [function(){console.log("a")}]);
  _a.add("b", function(){
    console.log(this)
  });

  _a.run('a');

  /* Get first script's config location from custom name local */
  eachAry(root.scripts, function(elem, i){
    if (elem.getAttribute("local")){
      var local = elem.getAttribute("local");
      scriptCreater.load(local);
    }
  });

})(this);
