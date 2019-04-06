
# 看不见的HTML元素
> 他们起作用了??

HTML的世界, 在浏览器中进行展示, 总是尽如人意, 通常意义下的尽如人意.所以一个很明显的问题就是, 为什么？在看不见的地方一定发生着什么, 才使的HTML表现的如此尽如人意.

## 看不见的元素
在HTML中一共有三个不可或缺的元素, 分别是html, head和body.head和body以并列的形式, 包含在html下.而html和head都看不见, 说到这里, 也有必要提一下文档类型`<!DOCTYPE ... >`, 它也不可见而且很重要.
当然, 不可见是相对的, 相对于body的内容在浏览器中展现这种形式, 如果非要说查看源代码的形式或者调试器, 好吧, HTML的世界可以说是透明的.

## head 中包含了什么
head 中可以包含很多内容, 但总的来讲, 可以将包含的内容称为, 提供文档元数据的元素集合.他们帮助应用识别文档, 按照一种预期的形式进行工作.

* `<title></title>`

    title很简单, 就是提供一个文档的标题名称, 更多的是帮助你在搜索引擎的搜索结果里面得到一个简单准确的展现.

* `<base />`

    base可以处理当前文档所有的相对超链接, 为他们设置一个基础的URI, 来进行相应的超链接跳转.

```
    <base href="http://www.my-blog-example.com/" target="_blank">
```

* `<style></style>`

    style在head中以嵌入式的形式插入文档样式片段.

```
    <style
        scoped // 限定是否影响所有文档元素还是只应用在它的父元素和所有子元素上
        type="text/css" // 不用也是缺省值
        media="print">
        img {
                display: none;
        }
    </style>
```

* `<script></script>`

    应用脚本片段或者引用脚本文件.

```
    <script type="text/javascript">
        function foo() {
            return bar;
        }
    </script>
    <script
        nomodule // 支持模块脚本的浏览器会忽略该脚本
        src="../scriptfile.js"></script>
    <script src="../heavyscripts.js" async defer crossorigin="use-credentials || anonymous"></script>
    <script src="functions.js" integrity="sha384-aHR0cDovL2h0bWxxdWljay5jb20vZnVuY3Rpb25zLmpzDQo="></script>
    <script src="http://www.anothersite.com/funcs.js" referrerpolicy="unsafe-url"></script>
```

* `<link />`

    link可以为文档提供相关的信息, 比如外联的样式文件或者其他类型的文件.

```
    <link rel="license" href="copyright.html">
    <link rel="next" href="the-empire-strikes-back.html">
    <link rel="icon" href="http://www.otherserver.com/icons/default.png" crossorigin="anonymous">
    <link rel="alternate" href="printer-version.html" media="print">
    <link rel="search" href="search.php" nonce="aHR0cDovL2h0bWxxdWljay5jb20vcy5waHANCg==">
    <link rel="next" href="article2.html" type="text/html">
    <link rel="icon" href="icon.ico" sizes="64x64 32x32 16x16">
```

* `<meta />`

    把meta放到最后, 是因为meta可以提供其他元素表达不了的元数据, 即以上元素提供不了的元数据, 都可以考虑使用meta来进行补充.

    而meta的应用方式, 可以分为三种.

    1. `<meta charset="utf-8"/>`. 直接定义文档字符类型.

    2. `<meta name="application-name" content="your application name"/>`, 拥有一个name属性和一个content属性的形式.

    3. `<meta http-equiv="content-type" content="text/html; charset=utf-8"/>`, 拥有一个http-equiv属性和一个content属性的形式.

meta的可自定义形式众多, 而[facebook open graph tags](https://developers.facebook.com/docs/sharing/webmasters/)或者[twitter cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)
都展现了足够而且丰富的可用性, 对于meta或许还可以有一些期待.

# References
* [The Head Element and Related Elements](https://www.w3.org/MarkUp/html3/dochead.html)
* [MDN HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [head](http://www.htmlquick.com/reference/tags/head.html)
* [title](http://www.htmlquick.com/reference/tags/title.html)
* [base](http://www.htmlquick.com/reference/tags/base.html)
* [style](http://www.htmlquick.com/reference/tags/style.html)
* [script](http://www.htmlquick.com/reference/tags/script.html)
* [link](http://www.htmlquick.com/reference/tags/link.html)
* [meta](http://www.htmlquick.com/reference/tags/meta.html)

