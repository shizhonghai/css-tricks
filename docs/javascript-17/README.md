# 最长公共前缀 

::: tip 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
:::

## 说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

## 示例 1
```JavaScript
输入: [2,2,1]
输出: 1
```

## 示例 2
```JavaScript
输入: [4,1,2,1,2]
输出: 4
```

## 解析
::: tip 利用异或运算可以找出数组中奇个数的项
示例：[4,1,2,1,2] ---> 解析：4 ^ 1 ^ 2 ^ 1 ^2 => 1 ^ 1 ^ 2 ^ 2 ^ 4 => 0 ^ 0 ^ 4 => 4
:::

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    return nums.reduce((a,b)=>a^b)
};
console.log(singleNumber([4,1,2,1,2]))      // 4
```

离散数学的异或运算规则
- 交换律：a ^ b ^ c => a ^ c ^ b
- 任何数于0异或为任何数 0 ^ n => n
- 相同的数异或为0: n ^ n => 0

::: tip 来源：力扣（LeetCode）
参考《[LeetCode链接](https://leetcode-cn.com/problems/single-number)》
:::
