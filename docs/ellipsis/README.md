## 单行文字

<singleEllipsis/>

```scss
// 注意宽度是必须的
.article-container {
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 多行文字

<multipleEllipsis/>

```scss
/*  不带阴影的省略号 */
.article-container {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; //需要显示的行数
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```scss
/*  
 * 带阴影的省略号 
*/
p {
    position: relative;
    line-height: 20px;
    max-height: 40px;
    overflow: hidden;
}
p::after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
}
```

