# 说一下 React-Fiber

## 背景

1. `React` 在进行组件渲染时，从 `setState` 开始到渲染完成整个过程是同步的("一气呵成")。如果需要渲染的组件比较庞大，js 执行会占据主线程时间较长，会导致页面响应度变差，使得 `React` 在动画、手势等应用中效果比较差。
2. 页面卡顿：`Stack reconciler` 的工作流程很像函数的调用过程。父组件里调子组件，可以类比为函数的递归；对于特别庞大的 `vDOM` 树来说，`reconciliation` 过程会很长(x00ms)，超过 16ms，在这期间，主线程是被 js 占用的，因此任何交互、布局、渲染都会停止，给用户的感觉就是页面被卡住了。

## 实现原理

::: tip TIPS
旧版 `React` 通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止。而 `Fiber` 实现了自己的组件调用栈，它以链表的形式遍历组件数，可以灵活的暂停、继续和丢弃执行的任务。实现方式是使用了浏览器的 `requestldleCallback` 这一 API。`Fiber` 其实指的是一种数据结构，它可以用一个纯 JS 对象来表示：
:::

```JavaScript
const fiber = {
    stateNode,      // 接地单实例
    child,          // 子节点
    sibling,        // 兄弟节点
    return,         // 父节点
}
```

1. `React` 内部运转分三层：
    - Virtual DOM 层，描述页面长什么样。
    - Reconcile 层，负责调用组件生命周期方法，进行 Diff 运算等。
    - Renderer 层，根据不同的平台，渲染出相应的页面，比较常见的是 `ReactDOM` 和 `ReactNative`。

2. 为了实现不卡顿，就需要有一个调度器(Scheduler)来进行任务分配。优先级高的任务（如键盘输入）可以打断优先级低的任务（如 Diff）的执行，从而更快的生效。任务的优先级有六种：

3. Fiber Reconciler（react）执行阶段：

    - 阶段一，生成 Fiber 数，得出需要更新的节点信息。这一步是一个渐进的过程，可以被打断。
    - 阶段二，将需要更新的节点一次过批量更新，这个过程不能被打断。
  
4. Fiber 树：Fiber Reconciler 在阶段一进行 Diff 计算的时候，会基于 Virtual DOM 数生成一颗 Fiber 数，它的本质是链表。
5. 从 Stack Reconciler 到 Fiber Reconciler，源码层面其实就是干了一件递归改循环的事件。
