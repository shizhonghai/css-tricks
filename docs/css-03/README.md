# 移动端click事件延迟300ms和点击穿透问题

## 300ms延迟由来

07年，苹果公司发布首款Iphone前夕，遇到一个问题：当时的网站都是为大屏设计，手机屏幕太小无法正常浏览，于是苹果工程师做了一些约定解决此类问题。
这些约定当中，最为有名的是双击缩放（double tap to zoom）,这是产生300ms延迟的根源。
用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。
如果用户在 iOS Safari 里边点击了一个链接。由于用户可以进行双击缩放或者双击滚动的操作，
当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。
因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。 
鉴于iPhone的成功，其他移动浏览器都复制了 iPhone Safari 浏览器的多数约定，包括双击缩放，几乎现在所有的移动端浏览器都有这个功能。 
由此产生了300ms延迟问题。

### 解决方案

1. 方案一 禁用缩放
在html文档头部的meta标签中加入如下语句：
```JavaScript
//  1.禁用缩放 user-scalable=no
<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
```
**`user-scalable=no`** 表明这个页面不可缩放，也就是浏览器禁用的双击缩放事件并且同时会去掉300ms点击延迟。
但这个方案也有缺点，就是完全禁用了双击缩放，当我们需要放大文字或者图片时无法满足我们的需求。

2. 方案二 封装一个处理函数
```JavaScript
//封装tap解决click 300ms 延时
function tap (obj,callback) {
	var isMove = false;//记录手指是否移动
	var startTime = 0;//记录手指触摸的时间
	obj.addEventListerner('touchstart',function(e){
		startTime = Date.now();//记录触摸时间
	})
	obj.addEventListerner('touchmove',function(e){
		isMove = true;//查看手指是否滑动
	})
	obj.addEventListerner('touchend',function(e){
		if(!isMove && (Date.now()-statrTime) < 150){
		callback && callback();
		}
		isMove = false;//取反 重置
		startTime = 0;
	})
};
tap(div,function(){ //执行代码 }）；
```
这个代码可以监测元素点击发生时的状态，从而避免300ms的延迟。
但这个方法有一个弊端，一次只能给一个元素去解决问题。

3. 方案三 fastclick 插件解决问题

FastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。

## 点击穿透问题

> 说完移动端点击300ms延迟的问题，还不得不提一下移动端点击穿透的问题。可能有人会想，既然click点击有300ms的延迟，那对于触摸屏，我们直接监听touchstart事件不就好了吗？
  使用touchstart去代替click事件有两个不好的地方。
  第一：touchstart是手指触摸屏幕就触发，有时候用户只是想滑动屏幕，却触发了touchstart事件，这不是我们想要的结果；
  第二：使用touchstart事件在某些场景下可能会出现点击穿透的现象。
  什么是点击穿透？
  假如页面上有两个元素A和B。B元素在A元素之上。我们在B元素的touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，当我们点击B元素，B元素被隐藏了，随后，A元素触发了click事件。
  这是因为在移动端浏览器，事件执行的顺序是 touchstart > touchend >click。
  而click事件有300ms的延迟，当touchstart事件把B元素隐藏之后，隔了300ms，浏览器触发了click事件，但是此时B元素不见了，所以该事件被派发到了A元素身上。如果A元素是一个链接，那此时页面就会意外地跳转。
