# 什么是React Fiber？


`JavaScript` 与样式计算、界面布局等各种绘制，一起运行在浏览器的主线程中，当 `JavaScript` 运行时间过长时，将占用整个线程，阻塞其它任务。为了能在React渲染期间回到主线程执行其它任务，在React v16中提出了 `Fiber Reconciler`，并将其设为默认的 `Reconciler`，解决了过去 `Stack Reconciler` 中的固有问题和遗留的痛点，提高了动画、布局和手势等领域的性能。`Fiber Reconciler` 的主要目标是：

1. 暂停和切分渲染任务，并将分割的任务分布到各个帧中。
2. 调整优先级，并重置或复用已完成的任务。
3. 在父子元素之间交错处理，以支持 `React` 中的布局。
4. 在 `render()` 方法中返回多个元素。
5. 更好地支持错误边界。

Fiber可以分解任务，根据优先级将任务调度到浏览器提供的两个全局函数中，如下所列：
1. `requestAnimationFrame`：在下一个动画帧上执行高优先级的任务。
2. `requestIdleCallback`：在线程空闲时执行低优先级的任务。

当网页保持在每秒60帧（1帧约为16ms）时，整体会变得很流畅。在每个帧中调用 `requestAnimationFrame()` 执行高优先级的任务；而在两个帧之间会有一小段空闲时间，此时可执行 `requestIdleCallback()` 中的任务，该函数包含一个deadline参数（截止时间），用于切分长任务。

参考资料《[React源码分析](https://www.kancloud.cn/pwstrick/fe-questions/1477688)》

::: tip
- React Fiber 是一种基于浏览器的单线程调度算法。
- React 16之前 ，reconcilation 算法实际上是递归，想要中断递归是很困难的，React 16 开始使用了循环来代替之前的递归。
:::
