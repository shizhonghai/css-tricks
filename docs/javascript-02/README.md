# 如何让 (a===1&&a===2&&a===3) 的值为 true?

```JavaScript
let cnt = 1
Object.defineProperty(this, 'a', {
 get () {
 return cnt++
 }
})
console.log(a === 1 && a === 2 && a === 3)
```
