# 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组(腾讯)

```JavaScript
let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
// 扁平化
let flattenArr = arr => [].concat(...arr.map(x => Array.isArray(x) ? flattenArr(x) : x));
// 去重
let disArr = Array.from(new Set(flattenArr(arr)));
// 排序
let result = disArr.sort((a, b) => a - b);
console.log(result);    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```
