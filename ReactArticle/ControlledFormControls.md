# 论受控与非受控控件在React中的定义

*React的受控和非受控含义*

> In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

> In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

依据此类, 可以得到一个提纲:

1. React受控与非受控的定义
2. React的这种定义方式是狭义的
3. 实现的代码 - 受控和非受控组件

## React 受控与非受控的定义
对于受控与非受控组件的讨论对应只有表单控件, 比如:

* input
* textarea
* select
* checkbox
* radio

之类的元素. 显然, 超出了这类表单元素的范围, 实际上同定义的受控和非受控的含义就不再成立了.

接下来以input元素作为例子进行定义阐释.

受控: the value of the input 被 React.Component 通过 `setState` 的形式进行赋值, 即这个value全程是被React组件所控制, 那就符合受控组件的定义.

非受控: the value of the input 只通过DOM节点操作进行赋值和获取. 这种形式表现为React组件没有与之相关联的 `state` 或数据.

## React的这种定义方式是狭义的
受控与非受控的形式在React中是一种具体的描述, 符合某种条件才能成立. 显然, 它是一种狭义定义 - 只适用与React使用表单控件的场景.

如此一来在这种概念上, 可以将可能存在广义形式的受控或非受控解释隔离开来, 这无疑是正确的.

## 实现的代码 - 受控和非受控控件
```
class InputWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
           value: 0
        };

        this.uncontrolledInput = React.createRef();
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <section>
                    <h1>Contolled<h1>
                    <div>
                        {{value}}
                        <input value={value} onChange={this.onChange} name="controlledInput" />
                    </div>
                </section>
                <section>
                    <h1>Uncontrolled</h1>
                    <input defaultValue="10" ref={this.uncontrolledInput}/>
                    <button onClick={(e) => alert(e.target.value)}>alert the value</button>
                </section>
            </div>
        )
    }
}
```

从上面的代码可以看到受控input一定是通过 `onChange` 和 `setState` 的组合方式来进行数值的更新, 而非受控的input就遵循DOM节点的方式进行数值更新.

有一个小问题就是, 在当前代码的基础上, 无法准确的说出一个事情 - `InputWrapper` 是一个受控组件还是一个非受控组件, 只能描述成:

`InputWrapper` 有一个受控表单控件和一个非受控表单控件.

这样的解释在 React 狭义的定义基础上来看, 是可以接受的一个说法, 同时也是一种准确的描述.

# Reference
* [Controlled Component](https://reactjs.org/docs/forms.html#controlled-components)
* [Uncontrolled Component](https://reactjs.org/docs/uncontrolled-components.html)
* [React 之受控组件和非受控组件](https://juejin.im/post/5b3507df51882574af2821ce)
* [React（三）：受控组件与非受控组件](https://juejin.im/post/5c0f22ace51d452acf59f10f)
* [受控组件与非受控组件](https://zhuanlan.zhihu.com/p/89223413)