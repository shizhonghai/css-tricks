# 最长公共前缀 

::: tip 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
:::

## 示例 1
```JavaScript
输入: ["flower","flow","flight"]
输出: "fl"
```

## 示例 2
```JavaScript
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

## 说明
所有输入只包含小写字母 a-z 。

## 解析
```JavaScript
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    if (strs === null || strs.length === 0) {
        return '';
    }
    let str = strs[0];
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let flag = strs.every(item => item[i] === str[i]);
        if (flag) {
            result += str[i];
        } else {
            return result;
        }
    }
    return result;
}
```

::: tip 来源：力扣（LeetCode）
参考《[LeetCode链接](https://leetcode-cn.com/problems/longest-common-prefix)》
:::
