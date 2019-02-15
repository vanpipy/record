
# Reflow 和 Repaint 的故事
> 管中窥豹 可见一斑

按照标题的字面意思翻译成中文, 可以接受的含义便有回流和重绘, 重排和重绘, 这种多义的可能性其实让人困惑.同时这样的解释也没法让这个故事继续将下去.所以有必要往更宽广一点的地方看看, 做一些预备.

# 现代浏览器
现今的浏览器的功能之多, 已远远超越了一开始仅仅只能显示超文本内容的古代浏览器, 不过浏览器本身便更新的十分快速, 我也不知道什么时候现在使用的浏览器会变成一类新的古董.
唯一可以确定的是, 现代浏览器正在往复杂的大道上飞驰. 已有的桌面浏览器主要有: Chrome, Internet Explorer, Firefox, Safari and Opera.而在移动设备上, 选择就更为多样, 
Android Browser, iPhone, Opera Mini and Opera Mobile, UC Browser等等.

浏览器的高阶结构图:

![](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/layers.png)

一个浏览器最主要的功能便如同图里面描述的一样, 若按照结构图的顺序来讨论, 可能赶不上这一周回家的班车.

# 渲染引擎
这里引用 [How browsers work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork) 中的回答:

> 渲染引擎的职责就是...好吧, 就是渲染, 就是把请求的内容显示在浏览器的屏幕上.

单独从这句话来理解, 渲染引擎做的事情好像并不复杂.可惜的是, 计算机的世界里面最常见的就是把复杂隐藏在简单的背后.

而且不同浏览器使用的也是不同的渲染引擎, IE 使用的是 Trident, 火狐使用的是 Gecko, Safari 使用的是 Webkit. Chrome 和 Opera(version 15以上) 使用的是 Blink, 一个 Webkit 的分支.

# 渲染流程
主要的渲染流程可以这样形容:

1. 解析 HTML, 并构建 DOM 树.
2. 构建渲染树.
3. 渲染树的布局计算.
4. 根据渲染树, 进行绘制.

看起来很简单, 那我们先来看看两个渲染引擎的渲染过程的示意图:

![](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png)

webkit main flow

![](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/image008.jpg)

Mozilla's Gecko rending engine main flow

这里可能看到的是, 实际的过程中做的事情, 远比描述多.而且可以看到的是, 有一些内容和要讲述的故事有了关联了.所以预备知识就在这里结束了.

# Reflow 和 Repaint 的释义
可以看到, 只有 Reflow 这个词才在示意图当中出现过一次, 而 Repaint 从来都没有看到过, 最最近似的就是 Painting.这和我一开始的预想好像不太一样.
或者换种说法, Reflow 和 Repaint 可能本来就不存在, 它们也和主要渲染流程的描述一样, 是一种抽象命名, 概括了某一个阶段, 而实际工作中是被拆分或者冠以另外一种名称.
如果这样解释, 那 Reflow 便代表了 `流程3`, 而 Repaint 则代表了 `流程4`. 这样的解释看起来好像合情合理.

# 布局计算
在经过一系列[复杂的统计之后](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Render_tree_construction), 渲染引擎需要给予渲染树的每个节点一个确定的坐标和它的尺寸, 
以便将它们准确的绘制在正确的屏幕位置上, 而这个过程便称作布局或者重排.

# Dirty bit 系统
不可能为了一个很小的修改, 便每次重新计算所有的节点的尺寸和位置, Dirty bit 系统便为布局提供了预置判断.

有两种标志:

1. 它自己 dirty.
2. 它的子节点 dirty.

只有满足这两种标志的其中一种, 才会引发布局的重新计算.

# 绘制阶段
好了, 绘制阶段就是遍历渲染树, 然后使用渲染方法进行渲染, 然后显示在浏览器的屏幕上.对, 确定的事物再做起来就是这么快.

# 总结
到了这里, 可以很好地理解 Reflow 和 Repaint 的含义了, 也可以明确它们这样的释义的确是合情合理的.同时也知道了, 它们并不复杂, 只是隐藏的细节很多很多! 而我们将其称为重排和重绘也是合理的.
更加可以理解CSS的改变引发了重排, 的确是会引发重绘, 因为它们是有明确前后顺序的两个阶段.

通过这样的探索, 可以发现一个情况, 那就是当扩大了查看的范围之后, 许多在当时散发很多困惑的问题, 或许可以带来新的思考.

同时万分感谢 [taligarsiel](http://taligarsiel.com/) 的工作, 没有 [How browsers work](http://taligarsiel.com/) 的清晰说明, 大概猴年马月才能达到更好的理解, 它的确值得推荐给更多的读者!

PS: 探索快乐.

# References
* [How browsers work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork)
* [What's the difference between reflow and repaint?](https://stackoverflow.com/questions/2549296/whats-the-difference-between-reflow-and-repaint)
* [REFLOWS & REPAINTS: CSS PERFORMANCE MAKING YOUR JAVASCRIPT SLOW?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)
* [CSS Triggers](https://csstriggers.com/)

