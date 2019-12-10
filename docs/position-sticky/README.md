## 案例一：粘性定位之定位字母列表
<sticky01/>

<p style="height: 15px"></p>

<details>
<summary>展开查看 HTML 布局代码</summary>

```html
<div>
  <dl>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </dl>
  <dl>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </dl>
  <dl>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </dl>
  <dl>
    <dt>T</dt>
    <dd>Ted Leo & The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </dl>
</div>
```
</details>

<p style="height: 15px"></p>

<details>
<summary>展开查看 CSS 代码</summary>

```css {15}
/*
 *  核心样式 
 *  position: sticky;
 *  top: -1px;
 */
dt {
  background: #B8C1C8;
  border-bottom: 1px solid #989EA4;
  border-top: 1px solid #717D85;
  color: #FFF;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}
```
</details>

<p style="height: 15px"></p>

::: tip Chrome(56版本以上支持)、Edge(16版本以上支持)、Safari(6.1版本以上支持)、Firefox(32版本以上支持)
[CanIUse 兼容性查询](https://caniuse.com/#search=sticky)
:::

