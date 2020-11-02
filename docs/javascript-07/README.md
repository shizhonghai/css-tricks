# 整数反转 

::: tip 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
:::

## 示例 1
```JavaScript
输入: 123
输出: 321
```

## 示例 2
```JavaScript
输入: -123
输出: -321
```

## 示例 3
```JavaScript
输入: 120
输出: 21
```

## 注意
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。


## 解析
```JavaScript
/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
    const maxVal = Math.pow(2, 31) - 1;
    const minVal = Math.pow(-2, 31);
    const flag = x > 0;
    // 全部转化成正数进行比较
    x = flag ? x : -x;
    x = +(x.toString().split('').reverse().join(''));
    x = flag ? x : -x;
    // 比较反转之后的数字书否溢出
    if (x > maxVal || x < minVal) {
        return 0;
    }
    return x;
};
```

::: tip 来源：力扣（LeetCode）
参考《[LeetCode链接](https://leetcode-cn.com/problems/reverse-integer/)》
:::
