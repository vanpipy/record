
# 如何建立前端工作流
* [代码](#代码)
* [流程](#流程)
* [测试](#测试)
* [文档](#文档)
* [总结](#总结)

## 代码
应用在网络尤其是超文本链接为跳转方式的环境, 主要由一下三种内容构成:

1. [HTML](https://zh.wikipedia.org/wiki/HTML) - 标准标记语言
    * [HTML使用方法](#HTML使用方法)
    * [HTML自定义标签](#HTML自定义标签)
2. [CSS](https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8) - 结构化文档
    * [CSS权重系统](#CSS权重系统)
    * [CSS书写规范](#CSS书写规范)
    * [CSS预编译工具](#CSS预编译工具)
3. [Javascript](https://zh.wikipedia.org/wiki/JavaScript) - 高级解释性编程语言
    * [JS语言特性](#JS语言特性)
    * [JS书写规范](#JS语言特性)
    * [JSorTS编译工具](#JS编译工具)

## HTML使用方法
HTML并非是一门编程语言, 所以对于其使用主要在于熟悉和记忆, 进而形成良好的结构化信息, 产生足够人类理解的语义化信息.

而其使用的方式十分简单:
```
<DOCTYPE html>
<html>
    <head>...</head>
    <body>
        <p>Hello World</p>
        <img src="..." alt />
    </body>
</html>
```

如上的代码给与了几点启示:

* 除了文档类型, 其余标记皆是小写的形式.
* 所有的标签都需要闭合, 即`<p>...</p>` or `<img/>`
* 标记内容由单双闭合标签 和 替换,非替换标签组成.

## HTML自定义标签
在现代化的应用构建的过程中, 单纯的使用HTML4和HTML5提供的标记并不能达成代码重用的目的, 所以自定义标签对于web软件开发来说, 是必要的.

同时在平台已经不同的框架都提供了对应的支持:

* [Web Component](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
* [Angular Component](https://angular.io/api/core/Component)
* [React Component](https://zh-hans.reactjs.org/docs/react-component.html)
* [Vue Component](https://cn.vuejs.org/v2/guide/components.html)

一般情况下, 自定义标签表现如下:

```
<my-custom-a></my-custom-a>

<my-custom>
    <p>Hello World</p>
    <my-custom-a></my-custom-a>
</my-custom>
```

可以看到两个自定义标签显然的特点:

* 结构化的信息表达
* 只使用小写字母, 通过横线进行单词连接
* 可以同其他标签进行混合嵌套使用

## CSS权重系统
TODO

## CSS书写规范
层叠样式表只要求了形成结构化信息, 并没有说明内容如何形成, 而作为软件开发者, 形成可读的代码是很重要的, 所以这里需要引入CSS的书写约束.

常见的同CSS实现过程相关的方法论有:

* [OOCSS](https://en.wikipedia.org/wiki/OOCSS)
* [BEM](http://getbem.com/naming/)
* [NEC](http://nec.netease.com/standard)

它们各有各自的优缺点, 而为了达到代码重用, 或者说模块化需要, 这里选择BEM的书写规范.

```
.module {
    ...
}

module__child {
        ...
}

module--active {
        ...
}
```

如上的形式很好的描述了在模块这个层级所需要表达的细节内容.

当然如OOCSS会在整体的内容和结构分离, 以及整体的设计会达成更好的结果. 而NEC亦提供了关于整个工作流较为完善的工作方式. 都是各有特点.

只是站在建立模块这个颗粒度上来说, BEM的表达方式更容易理解和使用.

## CSS预编译工具
结合CSS的书写约束, 选择预编译工具需要解决的一个最大的问题就是大量的重复代码书写. 比如希望可以如同HTML一般, 写结构化, 嵌套的CSS代码.

```
.module {
    &__child {
        ...
    }

    &--active {
        ...
    }
}
```

幸运的是, 不论 [Sass](https://sass-lang.com/), [Less](https://less.bootcss.com/), 还是 [styl](https://github.com/tj/styl), 都可以很好的支持这个特点.

这里推荐是Sass或者Less, 因为它们的实现内容同原始的CSS表现差异较小.

## JS语言特性
`JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言`

* 单线程执行
* 即时编译执行
* 函数优先
* 弱类型
* 异步支持

## JS书写规范

* [Standard Javascript Style](https://standardjs.com/)
* [Airbnb Javascript Style](https://github.com/airbnb/javascript)
* [Google Javascript Style](https://google.github.io/styleguide/jsguide.html)

可以通过继承调整为适应各自项目的JS书写规范.

## JSorTS编译工具

* [Babel](https://babeljs.io/)
* [Typescript](https://www.typescriptlang.org/)

Babel让开发者可以更快的用上新特性, 甚至是实验性的内容.

Typescript作为ES6的超集, 不仅包含的新的特性, 还提供了静态类型检查.

## 流程
* 瀑布 or 迭代?
* 瀑布流开发大致工作工作流程是: 需求分析 -> 设计 -> 编码 -> 集成 -> 测试 -> 维护, 并且严格遵循预先计划的步骤, 以此确保方法的预见性.
* 迭代开发大致步骤: 每次只设计和实现这个产品的一部分, 逐步逐步完成的方法叫迭代开发, 每次设计和实现一个阶段叫做一个迭代. 

现有的开发模式为:

需求分析评审 -> 设计 -> 开发 -> 测试 -> 维护

此类可以算作一种瀑布流开发的变种或者迭代化的瀑布流?

如果加入TDD的方式, 开发流程的细节可以拟定如下:

1. 需求分析
2. 任务拆解
3. 单元测试
4. 功能实现
5. 红绿检测
6. 功能自测
7. 用例演示
8. 功能测试
9. 集成测试
10. 次级生产环境集成
11. 次级生产环境用力测试
12. 部署
13. 发布 or 灰度发布

从步骤上观察, 如果按照传统的软件开发模式, 那不论是环节还是时间消耗, 都会大大提高. 所以这里需要引入自动化工具来进行环节的加速和离散 - 单位时间成本.

## 物料系统
TODO

## 测试
TODO

## 文档
TODO

## 总结
TODO

# 参考
* [What is the HTML](https://zh.wikipedia.org/wiki/HTML)
* [CSS 的模組化方法：OOCSS、SMACSS、BEM、CSS Modules、CSS in JS](https://cythilya.github.io/2018/06/05/css-methodologies/)
* [PostCss](https://github.com/postcss/postcss/blob/master/docs/README-cn.md)
* [MDN Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [ECMA2015](http://www.ecma-international.org/ecma-262/6.0/)
* [ECMA2020](https://www.ecma-international.org/ecma-262/)
* [Waterfall or Agile?](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/704043/)
* [软件开发模式对比](https://www.cnblogs.com/-oyk/archive/2012/10/08/2714669.html)
