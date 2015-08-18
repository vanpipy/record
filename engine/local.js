var define, require, local;
(function(global){
  var head = document.head,
      context = {};

  local = function(deps){
    return context.require(local.deps);
  };

  local.config = function(config){
    //return local(config);
  };

  local.deps = [];

  local.createNode = function(){
    var node = document.createElement("script");
    node.type = "text/javascript";
    node.charset = "utf-8";
    node.async = true;
    
    return node;
  };

  local.load = function(url){
    var node = local.createNode();
    node.src = url;

    return head.appendChild(node);
  };

  context.require = function(deps){
    _.eachAry(deps, function(i, elem){
      if (typeof elem == "string"){
        local.load(elem);
      }
    });
  };

  function getScript(){
    return document.getElementsByTagName("script");
  };

  var _ = {
    eachAry: function(ary, fn){
      for(var i=0,l=ary.length;i<l;i++){fn(i, ary[i])};
    },
    eachObj: function(obj, fn){
      for(var each in object){fn(each, obj[each])};
    }
  };

  //Filter the scripts node and get local config.
  _.eachAry(getScript(), function(i, elem){
    if (elem.getAttribute("local")){
      var localScript = elem.getAttribute("local");
      
      var src = localScript.split("/");
      var scriptName = src.pop();
      src.length ? scriptName = src.join("/") + "/" + scriptName : scriptName = "./" + scriptName ;

      local.deps.push(scriptName);
    };
  });

  context.require(local.deps);

  define = function(){
    fn.apply(global);
  };
})(this);
