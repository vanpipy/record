var define, require, local;
(function(global){
  var define, require;

  var req = require = function(url){
    return url;
  };

  function define(ary, fn){
    fn.apply(global, [require]);
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
      var _local = elem.getAttribute("local");
      console.log(_local);
    };
  });

})(this);
