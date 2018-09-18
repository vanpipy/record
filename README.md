# Remember
The purpose of learning a programming language is to become a better programmer; that is, to to become more effective at designing and implementing new systems and at maintaining old ones.

# The difference between ECMAScript prototype and OOP.
In a class-based object-oriented language, in general, state is carried by instances, methods are carried by classes, and inheritance is only of structure and behaviour.
In ECMAScript, the state and methods are carried by objects, and structure, behaviour, and state are all inherited.

# TODO
低层软件结构对高层结构提供功能支持, 达到高层结构的软件功能完善的目的. 而更低层结构, 更高层结构亦遵循该规则.

# TODO about webpack
Webpack is a module bundler.

Module loaders and bundlers, and they replace the a lots of `<script>` tag in HTML.

## `<script>` 的劣势

* 需要按顺序追踪所有脚本资源, 即便不需要的文件也会提前引用. 
* 多个`<script>`意为着多个对于服务器的资源请求，性能可能表现的不如你想象的那么好.
* 人工干预过多，而且是可以被计算机所替代的。

## webpack 的优势

* 相对于类似的前辈系列，更新颖，而且避免或者解决了之前面临的问题。
* 易于上手，文档齐全。
* 插件系统十分强大，而且可以通过配置文件，能做的事情包含更多。

## Webpack 功能的增加
主要通过两种方式增加webpack的功能

1. Webpack Loaders
    - 加载器用作给定类型文件的转换和执行操作
    - 一个加载器是导出一个函数的node模块。这个导出的函数会在资源需要转换的时候调用。

2. Webpack Plugins
    - 插件系统可以对webpack添加自定义的功能

## Lazy-Loading Chunks
webpack 提供了两种方法激活懒加载功能

```
// CommonJS
require.ensure(['module-a', 'module-b'], function(require) {

});

// AMD
require(['module-a', 'module-b'], function(a, b) {

});
```

* CommonJS 提供了在非浏览器环境中的开发规范，为了解决JavaScript的作用域问题，通过定义模块的形式，使每个模块的内容在自身的命名空间运行。`module.exports` 到处对外的变量，`require(...)`引入其他模块。
* AMD 异步模块加载，主要为浏览器涉及的加载机制。

## CommonsChunkPlugin creates a vendor chunk

## [What do you mean by "Event-Driven"?](https://martinfowler.com/articles/201701-event-driven.html)
1. Event Notification
2. Event-Carried State Transfer
3. Event-Sourcing
4. CQRS(Command Query Responsibility Segregation)

Make sense of these patterns. 

