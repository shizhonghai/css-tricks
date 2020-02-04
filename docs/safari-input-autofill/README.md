Safari 浏览器会为 `<input type="passport">` 标签自动添加一个小锁的图标（如下图），本意上是让用户可以从这里选择相应的 用户名/密码 进行自动填充，但是在某些场景下需要将其隐藏，可能是出于安全性考虑，当然也有可能出于 UI 样式方面考虑。

![](http://image.burongyi.com/css-bd-01.png)

从网上可以搜到很多种有效的解决方法，例如下面的代码就是其中之一，但是很少会告诉你为什么要这样做，以致于下次再遇到这样类似的问题时，还是要借助于 Google、Baidu。

```css
input::-webkit-credentials-auto-fill-button {
    display: none !important;
    visibility: hidden;
    pointer-events: none;
    position: absolute; /* 避免占用 input 元素额外的 padding，正常情况下存在 display: none!; 就可以了 */
    right: 0;
}
```

在了解为什么要这样做之前，我们需要稍微了解下什么是 Shadow DOM，简单点来说：
- Shadow DOM 允许在 document 渲染时插入一个 DOM 元素子树，但是这课子树并不在主 DOM 树中。
- 开发者可以利用 Shadow DOM 封装自己的 HTML 标签、CSS 样式和 JavaScript 代码。

在介绍 Shadow DOM 的所有例子中，最经典的就是 `<video>` 标签。在HTML中，我们只使用了一个 `<video>` 标签，但是在页面上却呈现了很多元素，例如，下载按钮、全屏按钮呀等等。这个就是 Shadow DOM 的功劳了，它在 document 渲染 `<video>` 元素时，在该元素的子树中插入了 `<button>`、`<span>` 等标签用来显示 下载、全屏 等一系列的元素。该原理同样适用于 `<input type="passowrd">` 标签，虽然它的子树中的元素相对于 `<video>` 来说少的可怜。

我们可以通过下述方法在 Safari 中打开显示 Shadow DOM 的开关。

![](http://image.burongyi.com/css-bd-02.png)

在显示 Shadow DOM 后，我们可以清楚的看到 `<input type="passport">` 中的小锁是由 `<div pseudo="-webkit-credentials-auto-fill-button"></div>` 渲染的。

![](http://image.burongyi.com/css-bd-03.png)

所以我们的问题就简化为如何通过 CSS 隐藏相应的 `<div>` 。说到这里，相信大家也都明白文章开头的 CSS 的作用以及为什么要这样做了吧。
