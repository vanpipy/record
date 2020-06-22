# 受控与非受控组件在React中的定义

> 信息是事物及属性标识的集合, 代表了确定性. 那么数据呢, 一种无法增加确定性的信息, 或者就只是数据而已. 

继[前文](https://zhuanlan.zhihu.com/p/146540113)所述, React中存在受控和非受控的表单组件, 而其原理也很直观, 仅依赖于是否使用状态映射对用的值. 不过自定义组件才是在使用React的过程中的主角, 关于受控和非受控的表现形式应当值得讨论.

在使用React进行开发的时候, 无论组件是如何的实现, 都只是为了承载数据而生. 各种不同的实现过程, 都是为了把数据更好更高效的展示出来. 那么对于组件内部来说具有某种状态, 在组件外部又应当如何来定义数据对于组件的意义?

## 从状态到数据的定义转换
在React中有如此的定义 - [Props](https://reactjs.org/docs/react-component.html#props), 即参数亦或者接口. 那数据接口就应该是一个合适的定义, 这便是把内部的状态转换成一种数据定义的方式. 而且React也提供了这样的方式. 从这里其实可以明白一个React本身已经描述的事实 - [A JavaScript library for building user interfaces](https://reactjs.org/).

## 数据一致的表现形式
通过代码来观察数据一致在React中的表现:

```
const A = (props) => <div>{props.value}</div>

class B extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'hello world'
        };
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <A value={value} />
            </div>   
        )
    }
}
```

可以看到的B中的状态值直接传递给了A, 同时组件A没有自己的任何状态, 而是从props中直接使用了属性 `value` 的值. 这里可以说组件A受控与使用它的组件B, 因为展示在A中的数据内容完全依赖与B所提供的状态. 同时也可以描述为, 组件A和B中的数据一致.

## 总结
`state` 和 `props` 是在不同的使用角度产生的不同定义. 实际上, 它们关心的都是数据.

## 参考
* [React](https://reactjs.org/)
* [React Props](https://reactjs.org/docs/react-component.html#props)
* [What is “Props” and how to use it in React?](https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0)