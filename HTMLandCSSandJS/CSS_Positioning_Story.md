
# 层叠样式表中的定位模块
> 熟悉，有时候有可能是最大的障碍。

# 一点点背景介绍
通常情况下，对于展示在浏览器中的HTML页面，都被视作一个二维的平面。换言之，仅用x，y轴构成的坐标系统就可以很好的表示任意一点了

显然，在HTML页面中的随意一个存在的元素都必定和某一个坐标点(x, y)以进行关联，并以某种形式进行设置，而这种可以进行设置的形式可以通过CSS中的定位模块来使用。

# 定位模块
若要使用定位模块，就需要了解它的基本属性和性质，可以大致分为两部分进行了解

1. 定位性质的改变
  - 定位的性质由 `position` 来体现，一共包含 static，relative，absolute，fixed，sticky五个类别。

2. 定位数值的改变
  - 定位数值的改变通过 `top`, `right`, `bottom`, `left` 四个类别来修改，只是必须在非static的position定位性质的时候才起作用。

# 一个栗子
这个栗子是建立在使用relative, absolute定位性质，代码如下

```
<body>
  <div class="no-relative block">
    <div class="absolute side">
    </div>
    <div class="absolute another-side">
    </div>
  </div>
</body>

// style sheet
.side {
  width: 400px;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rebeccapurple;
}
.another-side {
  top: 0;
  right: 0;
  bottom: 0;
  left: 400px;
  background-color: orange;
}
```

看起来就差不多跟下面一样

![]()

没有高度，也自动占据了整个屏幕，这样我们可以理解:

> 被绝对定位的元素可以通过指定top和bottom ，保留height未指定（即auto），来填充可用的垂直空间。它们同样可以通过指定left 和 right并将width 指定为auto来填充可用的水平空间。

描述的情况是真实可靠而又作用非凡的了。

只是如果使用的代码如下:

```
<body>
  <div class="relative block">
    <div class="absolute side">
    </div>
    <div class="absolute another-side">
    </div>
  </div>
</body>

// style sheet
.side {
  width: 400px;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rebeccapurple;
}
.another-side {
  top: 0;
  right: 0;
  bottom: 0;
  left: 400px;
  background-color: orange;
}
```

可能得到的只有一个简单的白屏，通过筛选器会发现绝对定位的元素高度是零。先来看看绝对定位的阐释:

> 不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。

意思就是绝对定位的元素相对与最近的一个block定位, 而这个是相对定位性质的block高度看起来应该是零，那么可以理解为边界自动填充是依据的祖先元素的宽度和高度。　

可是为什么祖先元素都没有非 static 的属性的时候，使用absolute可以填充整个屏幕，按照absolute的定义，应该有一个宽度和高度适应整个屏幕的这样一个基准节点，或许是视窗?

这里可能要留下一个问题，虽然看起来是基于视窗，可是没有确切的文档来说明，姑且把实际的现象当作一个经验型的参照。

# 世界可是三维的
在浏览器中的HTML世界也是三维的，作为一个开发者可能对这个说明并不惊讶，只是这个世界上并不是所有人都是开发者。

所以实际情况是HTML的世界是由x，y，z的三维坐标系统进行表示的，只是在z轴上能看到的只有在x，y轴方向构成的平面，这也和实际的HTML表现是相符的。

# z-index 和 stacking context
使用z-index很简单，也可以分为两类:

* auto - 当使用auto的时候，元素的堆叠层级，也就是stacking context，是和父级元素的堆叠层级一样的。
* 数值 - 使用数值的时候，在当前的堆叠上下文中，元素的堆叠层级就是该数值。并且同时会有一个堆叠层级为0的本地堆叠上下文。所有后代元素，位于设置了数值z-index的父元素中，都不会同在父元素外的元素进行比较z-index的堆叠层级。

按照这种描述，在z轴方向的层级是以本地z-index为零的堆叠上下文为基础，以不同数值的z-index为延伸，可以想象成每一个大于零的z-index都是一个本地堆叠上下文，所有在其内部的后代元素都基于父元素创建的本地堆叠上下文进行比较，而不会超出边界。

# 另外一个栗子
虽然很想提供一个这样的栗子，只是MSDN已经提供了最完善简单的栗子，所以引用于此。 

[z-index stacking context example](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

# 总结
对于HTML中建立的坐标系统，的确值得去了解清楚，这样才能在设计实现的时候，提供更为完善合理的方案。

# 参考
* [CSS Positioning](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning)
* [Understanding_z_index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

