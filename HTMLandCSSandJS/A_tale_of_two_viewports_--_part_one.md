# 视窗的故事(一)

原文地址: [A tale of two viewports — part one](https://www.quirksmode.org/mobile/viewports.html)
---

> 在该迷你系列中我将阐释的内容分为视窗和多个重要元素标签是如何运作, 比如`<html>`元素, 同样还有`window`和`screen`.

当前内容是关于桌面浏览器的, 当然另外的目的是, 为移动端浏览器相似的讨论提供一个可见的不同阶段. 大部分web开发者早已凭借直觉思维理解了桌面涉及的内容。而在移动端存在相同的内容，但是更复杂。所以一种温习式的讨论，讨论每个人都已经熟知的知识和术语将会有很大的帮助去理解移动端浏览器。

## 设备像素和CSS像素

第一个需要理解的内容是CSS像素，以及它和设备像素的不同。

设备像素是一种我们凭借直觉认定是 "对的" 的像素。这种像素单位提供了一个标准方案，使在不同设备工作的我们有了一直的认知。这个属性可以从`screen.width/height`获得。

如果你给予一个确定的元素一个宽度`width: 128px`，同时你的显示器是1024px的宽度，也就是你的浏览器的最大显示宽度，这个确定的元素可以通过八次来铺满你的显示器(粗略的当成这个样子; 现在先忽略这些细节)。

如果使用浏览器的用户进行缩放，计算的结果也会发生变化。当缩放的结果是200%，那么宽度`width: 128px`的元素就会变成只需要四次就可以铺满1024px宽度的显示器。

缩放功能正如字面含义一样，在浏览器中它就是这样。实际的情况就是，元素的宽度并不是从128变成了256，取而代之的是真实像素变成了两倍。讲道理，确定的元素的宽度依然是128 CSS像素，即便真实像素变成了256像素。

换一种说法，既放大至200%使一个CSS像素增长了元素原有大小的四倍，参考真实像素的话。(两倍宽度，两倍高度，一共产生四倍面积大小)

使用一些图片来阐明这些内容。现在有4像素大小缩放比例为100%的设备像素栅格。实际上就这样; CSS像素的栅格完全覆盖设备像素的栅格。

![](https://www.quirksmode.org/mobile/pix/viewport/csspixels_100.gif)

现在试试缩小。CSS像素的栅格开始缩小，这意味着设备像素的栅格覆盖着多个CSS像素的栅格。

![](https://www.quirksmode.org/mobile/pix/viewport/csspixels_out.gif)

那么如果尝试放大的话，相反的情况就会发生。CSS像素的栅格会增大，一个CSS像素的栅格会覆盖多个设备像素的栅格。

![](https://www.quirksmode.org/mobile/pix/viewport/csspixels_in.gif)

这个的一个关键点就是_你唯一感兴趣的是CSS像素_。就是这种像素规定了你的样式如何去渲染。

设备像素几乎完全对你没什么用。当然对用户并不是; 用户会缩放页面知道页面阅读起来很舒适。不过缩放的比例的确和你没什么关系。浏览器会自动的适应并确保你的CSS图层跟随缩放进行变化。

## 100%的缩放比例
我从一个假设缩放比例为100%的例子开始。同时也是时候稍微更为正式和严格的定义一下如下内容:

> 在缩放比例为100%的情形下，一个CSS像素的确等于一个设备像素。

100%缩放比例的事实对于阐释接下来的内容是非常有用的，但是你也不用过于担心，它并不会对你的日常工作造成影响。通常情况在桌面环境你只会测试你的网站效果且缩放比例为100%，不过即便用户通过放大或者缩小，CSS像素的魔法也会确保你的图层保留相同的比例。

## 屏幕尺寸
首先让我们来做一些实际的度量。从 `screen.width` 和 `screen.height` 开始。他们的含义是用户屏幕的整个宽和高，测量的基础尺寸是设备像素，因为他们从来没有变化过。他们是显示器的特征，不是浏览器的。

很好，这很有意思! 所以我们能拿这个做些什么？

基本没什么用。用户显示器对于我们而言，并不重要。好吧，除非你想保存测量结果，存放在网络静态数据库中。

## 窗口大小
你想知道的是浏览器的内部尺寸大小。内部尺寸可以告诉你，你的布局对于当前用户有效部分。可以通过 `window.innerWidth` 和 `window.innerHeight` 获得这些数据。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_inner.jpg)

显然，内部窗口的宽度是基于CSS像素来进行测量的。你需要知道的事情是你的布局挤进窗口到底有多少。同时当用户放大的时候减少的数量。因为当用户放大时，窗口可用的空间变少了，而 `window.innerWidth/Height` 也相应的减少了。

(这里有个例外，也就是opera浏览器，它的 `innerWidth/Height` 不会减少，因为计算的基本单位是设备像素，这个情况在桌面环境只是让人比较困扰，一旦放在移动设备上便十分致命，稍后会再谈这个问题)

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_inner_zoomed.jpg)

需要有一点需要注意的是，宽高的度量是包含了滚动条的。滚动条也被当作内部窗口的一部分(这可能是历史发展原因造成的)。

## 滚动偏移量
`window.pageXOffset` 和 `window.pageYOffset`，包含当前文档水平和垂直滚动偏移量，以此可以知道滚动的距离。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_page.jpg)

这些测量的基准是CSS像素。即不论如何所方，你都可以知道文档发生偏移的数值。

理论上，当滚动或者放大时，pageX/YOffset 都会发生变化。不过浏览器会保证可视部分顶部元素位置始终是一致的，当放大时，有时候也不会完全生效，也就意味着pageX/YOffset不会真正发生变化，滚动窗口边界的像素会大致保持一致。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_page_zoomed.jpg)

## 内容: 视窗
在讨论更多的javascript属性之前，必须先介绍另外一个内容: 视窗。

视窗的功能就是约束 `<html>` 元素，也就是处于网站最外层的容器。

这可能听起来模糊，那么先来一个练习的例子。假设你有一个流动布局，且其中边栏宽度为10% `width: 10%` 现在你调整窗口大小，边栏也整齐的增加或者减小，不过它到底怎么工作的？

从技术方面来看，所发生的事情就是边栏获得父元素的10%宽度，也就是 `<body>` (不过没设置宽度)。那么问题来了： `<body>`拥有的宽度是？

正常情况下，所有的块级元素都是从父元素获得100%的宽度(有例外，但现在忽略这个)，所以 `<body>` 的宽度是从 `<html>` 来的。

那么 `<html>` 的宽度是？为啥看起来和浏览器窗口宽度一样。同时这也是为什么你的样式`width: 10%`起作用，并使边栏占据整个浏览器窗口的10%。基本上所有的web开发者都凭借直觉了解并使用这个现象。

实际上，你可能不知道这个现象在理论上是如何工作的。`<html>`的宽度被视窗所限制，`<html>` 元素获得视窗100%的宽度。

作为视窗，反过来讲，的确等于浏览器窗口，也的确是如此定义的。视窗不是HTML结构，所以CSS对其没有影响，它只是和浏览器宽高相同，在桌面环境中如此。而在移动设备环境中会稍微复杂一点。

## 意义
这些事务的状态有一些很有趣的结论。你在当前站点的就可以看到其中的一个现象。滚动到顶部，然后放大两倍或者三倍然后网站的内容就跑到浏览器窗口的外面了。

然后再滚动到右边，可以看到网站的蓝色边框没有覆盖到具体的位置了。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_htmlbehaviour.jpg)

这个行为就是视窗如何定义的一个结论。我定义蓝色边框宽度为`width: 100%`，100%的属性参考是什么？当然是`<html>`元素，和视窗宽度一致，同样也和浏览器宽度一致。

注意：当缩放等级为100%的时候，100%宽度工作如同我们认为那样，但是当我们放大视窗后边框变得比网站宽度小了。对于内容本身来将，这没什么影响，因为html元素具有属性`overflow: visible`，代表超出的内容始终会显示。

但是蓝色边框并不会泄漏出去。定义的宽度`width: 100%`，同时浏览器也遵循视窗给出的宽度来显示。他们也并不关心宽度显示的如何糟糕。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_100percent.jpg)

## 文档宽度?
实际上我的确需要知道的是所有内容组成的页面的宽度是多少，包含"伸出"的那些部分。迄今为止，我发现不大可能找到这些数值(好吧，除非你通过计算页面上所有元素的各个宽度和外间距，但是讲道理，很容易出错)。

我开始相信一个事实，即我们需要一对Javascript属性来描述我称为`document width`的内容(显然，是面向CSS像素的)。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_documentwidth.jpg)

如果我们真的觉得很好的话，为啥不把这个数值暴露到CSS中？我真的蛮喜欢标记`width: 100%`到我的蓝色横幅上且基于文档宽度，而不是`<html>`元素的宽度。(这样做势必需要一个鬼把戏才能实现，所以我对于不可能并不惊讶。)

浏览器供应商，你怎么想？

## 测量视窗
也许你想知道视窗的尺寸。视窗的属性可以通过`document.documentElement.clientWidth` 和 `Height`来访问。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_client.jpg)

如果你知道你的DOM，你就会知道`document.documentElement`实际上就是`<html>`元素：任意HTML文档的根元素。不过怎么说呢，视窗还要高那么一个级别。视窗是包含`<html>`元素的元素。当然赋予`<html>`元素一个宽度对这些并没有什么影响。(我并不建议这么做，只是因为有这个可能性。)

在某种情况下`document.documentElement.clientWidth` 和 `-Height` 一直都可以代表视窗的尺寸，而不是`<html>`元素。(这是一个特殊的规则，只有这个元素且只有这一对属性。在其他情况使用元素的实际宽度)

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_client_smallpage.jpg)

所以`document.documentElement.clientWidth` 和 `-Height` 总是代表视窗的尺寸，而不是`<html>`的尺寸。

## 两个属性对
是不是视窗的尺寸也可以通过`window.innerWidth/Height`来获得？好吧，可以也不可以。

在两个属性对之间有一个很正是的差异：`document.documentElement.clientWidth/Height`不包含滚动条，而`window.innerWidth/Height`是包含的。当然这看起来有点鸡蛋里挑骨头。

实际上事实是这两个属性对是浏览器大战的延续。那时候网景只支持`window.innerWidth/Height`，而IE只支持`document.documentElement.clientWidth/Height`。直到所有的其他浏览器开始支持`clientWidth/Height`，但是IE就是这么叼，并不支持`window.innerWidth/Height`。

同时在桌面环境中支持两个属性对都是可用只是一个小麻烦 -- 但是在移动设备上，就成了一个祝福了，其后我们将看到这个。

## 测量`<html>`元素
因此`clientWidth/Height`在所有情况下都给出了视窗的尺寸。但是哪里可以找到`<html>`元素的尺寸？这些尺寸存储在`document.documentElement.offsetWidth/Height`。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_offset.jpg)

这些属性的确让你可以访问`<html>`元素如同访问块级元素；如果你设置`width`,那么`offsetWidth`也会同步变化。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_offset_smallpage.jpg)

## 事件坐标
然后就是事件坐标。当鼠标移动时，不少于五对属性对可以给予你关于时间的确切位置信息。对于我们的讨论而言，其中三个是重要的：

1. `pageX/Y`代表相对于`<html>`元素的CSS像素坐标。
2. `clientX/Y`代表相对于视窗的CSS像素坐标。
3. `screenX/Y`代表相对于屏幕的设备像素坐标。

pageX/Y

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_pageXY.jpg)

clientX/Y

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_clientXY.jpg)

screenX/Y

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_screenXY.jpg)

你会使用`pageX/Y`的几率在90%；通常情况下，你向知道的是事件相对于文档的坐标位置。还有其他10%就是你会使用`clientX/Y`。你大概永远也不需要知道相对于设备的坐标位置。

## 媒体查询
最后，还有一点关于媒体查询的内容。这个概念很简单：你可以定义特殊的CSS规则只有当页面的宽度大于或者等于或者小于一个确定的尺寸的时候，才应用这段规则。举个栗子：

    div.sidebar {
        width: 300px;
    }

    @media all and (max-width: 400px) {
        // styles assinged when width is smaller than 400px;
        div.sidebar {
            width: 100px;
        }
    }

现在sidebar宽度为300px，除了CSS宽度小于400px的时候，小于400px的宽度的时候sidebar宽度将变成100px。

问题当然是：哪一个宽度是我们需要测量的？

这里有两个相关的媒体查询要素：`width/height`和`device-width/device-height`。

1. `width/height`使用同`documentElement.clientWidth/Height`相同的数值(同样也是视窗)。基于CSS像素。
2. `device-width/height`使用同`screen.width/height`的数值(同屏幕相同)。基于设备像素。

![](https://www.quirksmode.org/mobile/pix/viewport/desktop_mediaqueries.jpg)

到底该使用哪一个呢？想都不用想：`width`，必须的。Web开发者并不关心设备尺寸；它是浏览器窗口的宽度。

因此在桌面环境中使用`width`，然后忘掉`device-width`。正如同我们看到的，在移动设备中情况要严重复杂的多。

## 结论
以上便是我们进入桌面环境中，总结的浏览器的行为和表现。[这系列的第二部分](https://www.quirksmode.org/mobile/viewports2.html)展示了，同样行为在在移动设备的表现，以及一些重要且显著的区别。
