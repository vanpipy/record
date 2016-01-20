var define;

(function(global){

  define = function (id, factory) {
    context.required = factory;
    context.deps[id] = factory;
    context.defQueue.push(factory());
  };

})(this);
