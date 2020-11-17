# React Hook

## 什么是 React Hook？
**“Hook 是 React 16.8 的新增特性。它可以让你在不编写 `class` 的情况下使用 `state` 以及其它的 React 特性。”**

从官网的这句话中，我们可以明确的知道，`Hook` 增加了函数式组件中 `state` 的使用，在之前函数式组件是无法拥有自己的状态，只能通过 `props`
以及 `context` 来渲染自己的 `UI`，而在业务逻辑中，有些场景必须要使用到 `state`，那么我们就只能将函数式组件定义为 `class` 组件。
而现在通过 `Hook`，我们可以轻松的在函数式组件中维护我们的状态，不需要更改为 `class` 组件。

React 16.8 加入 `Hooks`，让 React 函数式组件更加灵活

`Hooks` 之前，React 存在很多问题：
1. 在组件间复用状态逻辑很难
2. 复杂组件变得难以理解，高阶组件和函数组件的嵌套过深。
3. `class` 组件的 `this` 指向问题
4. 难以记忆的生命周期

`Hooks` 很好的解决了上述问题，`Hooks` 提供了很多方法。
1. `useState` 返回有状态值，以及更新这个状态值的函数。
2. `useEffect` 接受包含命令式，可能有副作用代码的函数。
3. `useContext` 接受上下文对象（从 `React.createContext` 返回的值）并返回当前上下文值。
4. `useReducer` `useState` 的替代方案。
5. `useCallback` 返回一个回忆的 `memoized` 版本，该版本仅在其中一个输入发生更改时才会更改。纯函数的输入输出确定性。
6. `useMemo` 纯的一个记忆函数。
7. `useRef` 返回一个可变的 `ref` 对象，其 `.current` 属性被初始化为传递的参数。
8. `useMutationEffict` 更新兄弟组件之前，它在 React 执行其 DOM 改变的同一阶段同步触发。
10. `useLayoutEffict` DOM 改变后同步触发。使用它来从 DOM 读取布局并同步重新渲染。

## React Hook 要解决什么问题
`React Hooks` 要解决的问题是状态共享，这里的状态共享是指只共享状态逻辑复用，并不是指数据之间的共享。

## React Hook 实现原理
Hooks 的基本类型：
```JavaScript
type Hooks = {
    memoizedState: any,             // 指向当前渲染节点 Fiber
    baseState: any,                 // 初始化 initialState，已经每次 dispatch 之后 newState
    baseUpdate: Update<any> | null, // 当前需要更新的 Update，每次更新完之后，会赋值上一个 update，方便 react 在渲染错误的边缘，数据回溯
    queue: UpdateQueue<any> | null, // UpdateQueue 通过
    next: Hook | null,              // link 到下一个 hooks，通过 next 串联每一个 hooks
}

type Effect = {
    tag: HookEffectTag,             // effectTag 标记当前 hook 作用在 life-cycles 的哪一个阶段
    create: () => mixed,            // 初始化 callback
    destroy: (() => mixed) | null,  // 卸载 callback
    deps: Array<mixed> | null,
    next: Effect,
}
```

React Hooks 全局维护了一个 `workInProgressHook` 变量，每一次调取 Hooks API 都会首先调取 `createWorkInProgressHook` 函数。

当我们了解 React Hooks 的简单原理，得到 Hooks 的串联不是一个数组，但是是一个链式的数据结构，从根节点 `workInProgressHook` 向下通过
`next` 进行串联。这也就是为什么 Hooks 不能嵌套使用，不能再条件判断中使用，不能再循环中使用。否则会破坏链式结构。

## 生命周期的区别
函数组件的本质是函数，没有 `State` 的概念的，因此不存在生命周期一说，仅仅是一个 `render` 函数而已。

但是引入 Hooks 之后就变得不同了，它能让组件在不使用 `class` 的情况下拥有 `state`，所以就有了生命周期的概念，所谓的生命周期其实就是
`useState`、`useEffect` 和 `useLayoutEffect`。

即：Hooks 组件（使用了 Hooks 的函数组件）有生命周期，而函数组件（未使用 Hooks 的函数组件）是没有生命周期的。

下面，是具体的 class 和 Hooks 的生命周期对应关系：

|class 组件|Hooks 组件|
|:---:|:---:|
|constructor|useState|
|getDerivedStateFromProps|useState 里面 update 函数|
|shouldComponentUpdate|useMemo|
|render|函数本身|
|componentDidMount|useEffect|
|componentDidUpdate|useEffect|
|componentWillUnmount|useEffect 里面返回的函数|
|componentDidCatch|无|
|getDerivedStateFromError|无|

