# 求两个数组的交集 

::: tip 给定两个数组，编写一个函数来计算它们的交集。
:::

## 示例 1
```JavaScript
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

## 示例 2
```JavaScript
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
```

## 说明
- 输出结果中的每个元素一定是唯一的。
- 我们可以不考虑输出结果的顺序。

## 解析
```JavaScript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function(nums1, nums2) {
    let ans = [];
    let set = new Set(nums1);
    nums2.forEach(x=>{
        if(set.has(x)){
            ans.push(x);
            set.delete(x);
        }
    })
    return ans;
};
```

::: tip 来源：力扣（LeetCode）
参考《[LeetCode链接](https://leetcode-cn.com/problems/intersection-of-two-arrays/)》
:::