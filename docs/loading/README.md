## loading_1

<loading-load1/>
<details>
<summary>展开查看代码</summary>

```html
  <div class="load-container">
    <div class="boxLoading"></div>
  </div>
```

```scss
.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: "";
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: "";
      width: 50px;
      height: 50px;
      background: #00adb5;
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
```
</details>

::: tip
<a href="https://codepen.io/dicson/pen/vOxZjM" target="_blank">https://codepen.io/dicson/pen/vOxZjM</a>
:::


## loading_2

<loading-load2/>
<details>
<summary>展开查看代码</summary>

```html
  <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
    <circle id="loading-inner" cx="75" cy="75" r="60"/>
  </svg>
```

```scss
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 150px;
}

#load {
  width: 75px;
  animation: loading 3s linear infinite;
  #loading-inner {
    stroke: {
      dashoffset: 0;
      dasharray: 300;
      width: 10;
      miterlimit: 10;
      linecap: round;
    }
    animation: loading-circle 2s linear infinite;
    stroke: #00adb5;
    fill: transparent;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
```
</details>

::: tip
<a href="https://codepen.io/pedox/pen/PwQezw" target="_blank">https://codepen.io/pedox/pen/PwQezw</a>
:::

## loading_3

<loading-load3/>
<details>
<summary>展开查看代码</summary>

```html
  <div class="load"></div>
```
```scss
.load {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 169, 178,.2);;
  &::before {
    content: "";
    width: 70px; // 50 * √2
    height: 70px; // 50 * √2
    background-color: #00adb5;
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: rotate 1.5s infinite linear;
  }
  &::after {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

</details>

## loading_4

<loading-load4/>

<details>
<summary>展开查看代码</summary>

```html
<div class="load-container">
  <div class="container">
      <div class="boxLoading boxLoading1"></div>
      <div class="boxLoading boxLoading2"></div>
      <div class="boxLoading boxLoading3"></div>
      <div class="boxLoading boxLoading4"></div>
      <div class="boxLoading boxLoading5"></div>
  </div>
</div>
```
```scss
.load-container {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
        .boxLoading {
            background-color: #00adb5;
            height: 100%;
            width: 6px;
            display: inline-block;

            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }
        .boxLoading2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        .boxLoading3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }
        .boxLoading4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .boxLoading5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
    }
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
```

</details>

## loading_5

<loading-load5/>
<details>
<summary>展开查看代码</summary>

```html
  <div class="load-container"></div>
```
```scss
.load-container {
    width: 60px;
    height: 60px;
    background-color: #00adb5;

    margin: 50px auto;
    -webkit-animation: rotateplane 1.2s infinite ease-in-out;
    animation: rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
```
</details>

## loading_6

<loading-load6/>
<details>
<summary>展开查看代码</summary>

```html
  <div class="load-container">
      <div class="load load1"></div>
      <div class="load load2"></div>
      <div class="load"></div>
  </div>
```
```scss
.load-container {
    margin: 50px auto;
    width: 150px;
    text-align: center;
    .load {
        width: 20px;
        height: 20px;
        background-color: #00adb5;

        border-radius: 100%;
        display: inline-block;
        -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
        animation: bouncedelay 1.4s infinite ease-in-out;
        /* Prevent first frame from flickering when animation starts */
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .load1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .load2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
```

</details>

## loading_7

<loading-load7/>
<details>
<summary>展开查看代码</summary>

```html
<div class="load-container">
  <div class="container container1">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
  <div class="container container2">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
  <div class="container container3">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
</div>
```
```scss
.load-container {
    margin: 50px auto;
    width: 48px;
    height: 48px;
    position: relative;
    .container{
        position: absolute;
        width: 100%;
        height: 100%;
        .circle{
            width: 12px;
            height: 12px;
            background-color: #00adb5;

            border-radius: 100%;
            position: absolute;
            -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
            animation: bouncedelay 1.2s infinite ease-in-out;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }
        .circle1 { top: 0; left: 0; }
        .circle2 { top: 0; right: 0; }
        .circle3 { right: 0; bottom: 0; }
        .circle4 { left: 0; bottom: 0; }
    }
    .container1 {
        .circle2 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .circle3 {
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }
        .circle4 {
            -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
        }
    }
    .container2 {
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
        .circle1 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        .circle2 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
        .circle3 {
            -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
        }
        .circle4 {
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
        }
    }
    .container3 {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
        .circle1 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }
        .circle2 {
            -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
        }
        .circle3 {
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
        }
        .circle4 {
            -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
        }
    }
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
```

</details>

## loading_8

<loading-load8/>

<details>
<summary>展开查看代码</summary>

```html
<div></div>
```

```css
div {
  display: flex;
  width: 3.5em;
  height: 3.5em;
  border: 3px solid transparent;
  border-top-color: #00adb5;
  border-bottom-color: #00adb5;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

div:before {
  content: '';
  display: block;
  margin: auto;
  width: 0.75em;
  height: 0.75em;
  border: 3px solid #00adb5;
  border-radius: 50%;
  animation: pulse 1s alternate ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
```
</details>

## loading_9

<loading-load9/>

<details>
<summary>展开查看代码</summary>

```html
<div class="box">
  <div class="coin"></div>
</div>

```

```scss
.box {
  perspective: 120px;
}

.coin {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 4px solid #00adb5;
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotateY(540deg);
  }
}

```
</details>

## loading_10

<loading-load10/>

<details>
<summary>展开查看代码</summary>

```html
<div class="balls">
  <div></div>
  <div></div>
  <div></div>
</div>
```

```scss
.balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #00adb5;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
```
</details>

## loading_11

<loading-load11/>

<details>
<summary>展开查看代码</summary>

```html
<svg viewBox="0 0 50 50">
  <circle class="ring" cx="25" cy="25" r="20"></circle>
  <circle class="ball" cx="25" cy="5" r="3.5"></circle>
</svg>
```

```scss
svg {
  width: 3.75em;
  animation: 1.5s spin ease infinite;
}

.ring {
  fill: none;
  stroke: hsla(183, 100%, 35%, 0.3);
  stroke-width: 2;
}

.ball {
  fill: #00adb5;
  stroke: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```
</details>

## 相关项目

1. <a href="https://epic-spinners.epicmax.co/#/" target="_blank">Epic Spinners</a>
2. <a href="https://cssfx.dev/" target="_blank">cssfx.dev</a>