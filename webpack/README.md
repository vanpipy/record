
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
主要通过两种方式增加webpack的功能

1. Webpack Loaders
    - 是webpack构建过程的一个模块
    - 针对指定类型的文件, 依赖loader提供的纯函数进行转换操作(返回原始值也是一种转换).

2. Webpack Plugins
    - 主要可以弥补Loader不能做到的事情, 展现为webpack功能的扩展.
    - 或者添加基于webpack的自定义功能.

* CommonJS 提供了在非浏览器环境中的开发规范，为了解决JavaScript的作用域问题，通过定义模块的形式，使每个模块的内容在自身的命名空间运行。`module.exports` 到处对外的变量，`require(...)`引入其他模块。
* AMD 异步模块加载，主要为浏览器涉及的加载机制。

