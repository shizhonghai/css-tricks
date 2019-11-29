<backdropFilter/>

### 各个滤镜方法对应含义如下表：

|标题|标题|
|:---|:---|
|blur|	模糊|
|brightness|	亮度|
|contrast|	对比度|
|drop-shadow|	投影|
|grayscale|	灰度|
|hue-rotate|	色调变化|
|invert|	反相|
|opacity|	透明度|
|saturate|	饱和度|
|sepia|	褐色|

### backdrop-filter 和 filter 区别

`backdrop-filter` 是让当前元素所在区域后面的内容模糊灰度或高亮之类，要想看到效果，需要元素本身半透明或者完全透明；
而 `filter` 是让当前元素自身模糊灰度或高亮之类。

```css
/*
 *  核心样式
 */
dialog {
    -webkit-backdrop-filter: blur(5px);	
    backdrop-filter: blur(5px);	
}
```

::: tip Chrome(76版本以上支持)、Edge(17版本以上支持)、Safari(9版本以上支持)
[CanIUse 兼容性查询](https://caniuse.com/#search=backdrop-filter)
:::

