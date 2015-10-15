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

    function templateFn(fn){
      return function(){
        fn.call(this);

        return this;
      }
    }
  };

  function join(sourcePath){

  };

  var _deps = anonyer();

  local = {
    config: function(cfg){
      _deps.add(scriptCreater);
    }
  };

  var sourcePath, srcPath, script;

  /* Get first script's config location from custom name local */
  eachAry(root.scripts, function(elem, i){
    //Found the init config path.
    if (elem.getAttribute("local")){
      sourcePath = elem.getAttribute("local");
      srcPath = sourcePath.split(regSys);
      script = srcPath.pop();
      //Set default baseUrl.
      if (!config['baseUrl']){
        config['baseUrl'] = srcPath.length ? srcPath.join('/') + '/' : './';
      };

      _deps.add( config['baseUrl'] + script );
    }
  });

  _deps.run(scriptCreater);

})(this);
