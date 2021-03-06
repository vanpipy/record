
# About webpack
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
主要通过两种方式增强webpack的功能

1. Webpack Loaders
    - 是webpack构建过程的一个模块
    - 针对指定类型的文件, 依赖loader提供的纯函数进行转换操作(返回原始值也是一种转换).

2. Webpack Plugins
    - 可以补充Loader不能做到的事情, 展现为webpack功能的扩展.
    - 通过添加自定义事件到webpack的构建过程中, 增强webpack的功能.

* CommonJS 提供了在非浏览器环境中的开发规范，为了解决JavaScript的作用域问题，通过定义模块的形式，使每个模块的内容在自身的命名空间运行。`module.exports` 到处对外的变量，`require(...)`引入其他模块。
* AMD 异步模块加载，主要为浏览器涉及的加载机制。

# Q&A
***Q***: What is the webpack?

***A***: Here is from article [what-is-webpack](https://survivejs.com/webpack/what-is-webpack/):
> Webpack can take care of bundling alongside a separate task runner. However, the line between bundler and task runner has become blurred thanks to community developed webpack plugins.

Lots of thanks to webpack plugins developers make webpack grow taller and stronger.

The webpack's wrok begins from entry which is javascript module, and then webpack traverses and evaluates the entry matches against loader configuration that tell webpack how to transform each match.

***Q***: What is a bundle in webpack?

***A***: The result of webpack execution is the bundle, that means the output files generated by webpack is bundle. It contains all of the modules used in the application. And the bundles generating process can be configured by webpack config file.

***Q***: what modules design patterns webpack supports?

***A***: [commonjs](http://www.commonjs.org/), [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md), [es6](https://www.tutorialspoint.com/es6/es6_quick_guide.htm)(since webpack 2).

***Q***: Webpack's Execution Process and how to make it dose work.

***A***: ![](https://survivejs.com/538c4af0d21e375d6d252d38cbb8a993.png)

***Q***: What is webpack building process?

***A***:\
Webpack begins its work from entry\
-> Resolution Process, webpack uses the entry's `resolve` configuration to match the entry files and the loader used in application, the resolution process must be correctly finished then go to next process or raises a runtime error and block.
-> Evaluation Process, all loaders are found, webpack evaluates the matched loaders from bottom to top and right to left. Of course, Plugins do their work cause they allow you to intercept runtime events at different stages of the building process.
-> Finishing, everything is ok without any errors, the webpack writes the result ***output*** as we wished. The output file include a bootstrap script with a manifest that describes how to begin executing the result in the browser.

***Q***: What is a loader in webpack?

***A***:
> Loaders allow you determine what should happen when webpack's module resolution mechanism encounters a file.\
So the loader is a function that try to help webpack to transform the file encountered in the evaluation process and make the result matched as expected.

***Q***: What is a plugin in webpack?

***A***:
> Compared to loaders, plugins are a more flexible means to extend webpack. You have access to webpack's compiler and compilation processes. It's possible to run child compilers, and plugins can work in tandem with loaders as `MiniCssExtractPlugin` shows.\


# 参考
* [what-is-webpack](https://survivejs.com/webpack/what-is-webpack/)
* [webpack-interview-questions](https://github.com/styopdev/webpack-interview-questions/blob/master/answers.md)
* [commonjs](https://requirejs.org/docs/commonjs.html)
* [webpack 中文指南 模块系统](https://zhaoda.net/webpack-handbook/module-system.html)
* [ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/)
* [spped-up-webpack](https://medium.com/onfido-tech/speed-up-webpack-ff53c494b89c)
* [Module 的加载实现规则](http://es6.ruanyifeng.com/#docs/module-loader)

