# 回文数

::: tip 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
:::

## 示例 1
```JavaScript
输入: 121
输出: true
```

## 示例 2
```JavaScript
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

## 示例 3
```JavaScript
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

## 进阶:

你能不将整数转为字符串来解决这个问题吗？


## 解析
::: tip 解题思路：二分法对比原则
回文，即以位于正中间的数字为中点进行分割，两边的数据完全对称。
所以，如果设定一个循环，从整数第一位下标开始，第一位与最后一位对比，第二位与倒数第二位对比，回文两边的数字会全部相等，循环次数最大值为 `Math.floor(x.length/2)`, 而如果不一致，则判断非回文，即刻退出循环。
另外，负数肯定不是回文，所以单独拎出来做一个判断。
:::

```JavaScript
var isPalindrome = function(x) {
    
    if(x<0) return false;
    let flag = true;
    x = x.toString()

    for(let i=0, len=x.length; i<len/2; i++){
        if(x[i] !== x[len-1-i]){
            flag = false;
            break
        }
    }
    return flag
};
```

::: tip 解题思路：双指针解法
:::

```JavaScript
var isPalindrome = function(x) {
    
    if(x<0) return false;
    let str = x.toString();
    let len = str.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        if (str[left++] !== str[right--]) {
            return false;
        }
    }
    return true;
};
```

::: tip 来源：力扣（LeetCode）
参考《[LeetCode链接](https://leetcode-cn.com/problems/palindrome-number/)》
:::
