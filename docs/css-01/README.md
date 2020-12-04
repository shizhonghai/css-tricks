# 说一下 CSS 盒模型

CSS 中的 `box-sizing` 属性定义了浏览器应该如何计算一个元素的总宽度和总高度。

## 属性值

- `content-box`： 默认值，标准盒子模型。`width` = 内容的宽度

- `border-box`： `width` = border + padding + 内容的宽度

## 相关内容

1. 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)。

2. 类型： IE 盒子模型、标准 W3C 盒子模型。

3. 两种盒模型的主要区别是：标准盒模型的宽高是值内容宽高(content)。

4. 而IE盒模型的宽高是指：content+padding+border。

5. 设置盒模型的方式是：设置 `box-sizing: box-sizing:content-box`标准盒模型；`box-sizing:border-box` IE盒模型。
