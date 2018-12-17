
# 一个故事

> 纸上得来终觉浅, 须知此事要躬行.

# 起由
新增一个只在移动设备中展示的网站。

# 预期的设计

### 条件
1. 只有预期设计图, 没有预期最终效果指定机型.

2. 可以不考虑在PC设备中的展示问题, 因为有对应的PC网站.

3. 需要对各类手机设备进行一定程度的展示适配.

### 如何满足条件
1. 设置预期机型为Iphone6(375x667)。

2. 针对第二个条件，通过匹配 `window.navigator.userAgent` 的设备标志来区分不同的访问终端。

3. 而对于第三个条件，需要更多的准备才可以达到预期的行为:
    1. 使用 `<meta name="viewport" />` 固定虚拟视窗，并保持默认缩放比例为50%。
    2. 取得设备宽度，并使用总设备宽度的__十分之一__作为基础显示单位。
    3. 基于CSS测量单位 `rem`，作为实际样式书写时的统一单位。

### 额外的问题
* 在满足第三个条件时，使用rem会产生额外的计算成本。
* 不同平台对于代码的兼容性。

### 处理过程
* 使用webpack作为构建和转换的基础。
    1. [babel](https://github.com/babel/babel)转换所有由javascript组成业务代码，如果某个语法相对于es2015版本是一种更新的特性，那就通过[polyfill](https://remysharp.com/2010/10/08/what-is-a-polyfill)的形式退回到基于es2015版本特性的实现版本。
    2. [px2rem](https://github.com/songsiqi/px2rem)处理px到rem的转换计算。
    3. [autoprefixer](https://github.com/postcss/autoprefixer)补充不同浏览器的样式前缀。

在只使用webpack, babel, px2rem, autoprefixer的情况下，好像所有的问题都解决的，看起来棒棒的。

# 实际的情况

### 又是额外的问题
1. __十分之一__在缩小50%之后该用37.5还是75?
    * 假设设计图是750x1334，缩小虚拟视窗50%后，布局视窗就和设计图保持一致了，所以用75是更好的选择。

2. 实际的浏览器好像比ui设计图预期的更小!? 是的，手机浏览器在默认的情况下并不是全屏的，可能会有顶部的选项卡或者底部的菜单栏，这个时候屏幕更小，而且选项卡或者菜单栏也可能收起或者显示。
    * `window.resize` 可以帮助我们记录在窗口调整时候变动的数据，从而调用对应的辅助函数或者进入对应的更新周期。

3. 在水平方向的间距表现良好，但是在 `高度/宽度` 比例增高的设备中，高度的表现不是太好。
    * 本质上和上面的2问题是一样的，但是如何选择适合基本单位是个问题，这个问题并没有得到很好的解决。

# 结论
单纯的一个可行方案，并不能带来问题的解决，但是或许能够带给我们一些启发和认识。

---

# 什么启发

### `<meta name="viewport" />` 带来了什么
可以先看一个应用的例子，`<meta name="viewport" content="width=device-width,initial-scale=0.86,maximum-scale=3.0,minimum-scale=0.86" />`:

* width=device-width // 应用设备宽度作为视窗宽度
* initial-scale=0.86 // 初始缩放比例为0.86
* maximum-scale=3.0  // 最大缩放比例为3.0
* minimum-scale=0.86 // 最小缩放比例为0.86

如此可以尝试得到一个简略的结论，即 viewport的类型描述 可以对视窗进行属性的设定。

所以 `<meta name="viewport">` 将视窗的控制能力开放给了开发者。

### 为什么是十分之一
这个问题本质上或许可能是，如何把ui设计图完整的转换成对应的工程实现。涉及到的便是网格，应用的表现大概如同:

![](https://raw.githubusercontent.com/vanpipy/record/master/HTMLandCSSandJS/rem-grid-min.jpg)

可以看到的是，按照这种网格分割方式，需要选择一个黄金的分割比例! 就好像真正的黄金比例一样。当然在手机设备上不可能完全应用和[960 grid system](https://960.gs/)一样的设置。

所以选择一个简单而且方便计算的比例就刚刚好，而十进制天然具有这样的属性。最后分割结果就是一个网格刚好占十分之一，而这种网格就是我们选择的基础单位。

### 视窗单位
使用视窗单位是处理垂直方向尺寸的更优方式，这得益于其实际的定义。因为 `vw` 和 `vh` 代表初始化的时候视窗百分之一的宽度或者高度。

    // 375x667
    body {
        width: (300 / 375) * 100 vw;
        height: (600 / 667) * 100 vh;
    }

当然也是一个转换过程。

---

最后的结论应该是，学无止境。

![](https://ws3.sinaimg.cn/large/9150e4e5gy1fx4e0qfkd3g20b40b4wl1.gif)

# 参考
* [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
* [CSS Length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
* [Viewport Rule](https://drafts.csswg.org/css-device-adapt/#at-ruledef-viewport)
* [Grid-Based Design Theory](https://designmodo.com/grid-design-theory/)
* [使用Flexible实现手淘H5页面的终端适配](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)
