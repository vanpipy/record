var define, require, local;
(function(global){
  var deps = [], config = {};

  var root = document,
      head = root.head;

  var shift = Array.prototype.shift;

  var op = Object.prototype,
      tostring = op.toString;

  var regPro = /^([http|https]\:\/\/)/,
      regUrl = /[\d\w\-\_]+\//g,
      regSys = /\//g;

  var config = {};

/*
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
*/

  function scriptCreater(deps){
    //isAry(deps) || err("deps must be an array!");

    var _creater = {
      loader: function(url){
        this.url = url;
        this.createNode().appendNode();
      },
      createNode: templateFn(function(){
        this.node = root.createElement("script");
        this.node.type = "text/javascript";
        this.node.charset = "utf-8";
        this.node.async = "async";
        this.node.src = this.url;
      }),
      appendNode: templateFn(function(){
        head.appendChild(this.node);
      })
    };

    eachAry(deps, function(elem){
      _creater.loader(elem);
    });

    function join(rootPath, sourcePath){
      var rpath = rootPath.split(regSys);
      var spath = sourcePath.split(regSys);

    };

    function templateFn(fn){
      return function(){
        fn.call(this);

        return this;
      }
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

  local = {
    config: function(cfg){
      var reserve = ['baseUrl', 'paths'];

      for (var each in cfg){
        if (reserve.indexOf(each) >= 0){
          config[each] = cfg[each];
        };
      };
    }
  };

  /*
   * Only operate an array.
   */
  function anonyer(){
    var _come_in;

    function _add(key){
      return _come_in = [].concat(key);
    };

    function _run(fn){
      fn.call(this, _come_in);
    }

    return {
      check: function(){
        console.log(_come_in);
      },
      add: _add,
      run: _run
    }
  };

  var _deps = anonyer();

  /* Get first script's config location from custom name local */
  eachAry(root.scripts, function(elem, i){
    if (elem.getAttribute("local")){
      var path = elem.getAttribute("local");
      _deps.add(path);
    }
  });

  _deps.run(scriptCreater);

})(this);
