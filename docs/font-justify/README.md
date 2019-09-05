# 文字两端对齐

<font-justify/>

<details>
<summary>展开查看代码</summary>

```scss
    div {
        box-sizing: border-box;
        margin-bottom: 20px;
        display: block;
        width: 100px;
        height: 24px;
        border: 1px solid #00adb5;
        // 以下为关健代码
        text-align: justify;
        text-align-last: justify;
        // 对 Safari 浏览器做兼容
        &:after {
            content: '';
            width: 100%;
            display: inline-block;
        }
    }
```
</details>

::: tip Safari 浏览器不支持 `text-align-last` 属性的方法
使用 `after` 伪类，添加一个空白行，使得当前行不是最后一行，实现等价于 `text-align-last:justify;` 分散对齐的效果 。
:::