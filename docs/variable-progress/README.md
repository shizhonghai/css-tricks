# CSS变量与上传进度条
<variable-progress/>

<p style="height: 15px"></p>

Html 代码
```html
<label>图片1：</label>
<div class="bar" style="--percent: 60;"></div>
<label>图片2：</label>
<div class="bar" style="--percent: 40;"></div>
<label>图片3：</label>
<div class="bar" style="--percent: 20;"></div>
```

<p style="height: 15px"></p>

CSS 代码
```css
.bar {
    height: 20px;
    width: 300px;
    background-color: #f5f5f5;
    margin: 5px 0 10px;
}

.bar::before {
    counter-reset: progress var(--percent);
    content: counter(progress) '%\2002';
    display: block;
    width: calc(300px * var(--percent) / 100);
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    background-color: #2486ff;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
}
```

