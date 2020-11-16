# 插入排序和快速排序

## 插入排序
```JavaScript
/*
 *  原理：将一个新的数，和前面的比较，只要当前数小于前一个则和前一个交换位置，否则终止
 *  时间复杂度：O(N^2)
 *  空间复杂度：O(1)
 */
function InsertSort(arr) {
    if (arr === null || arr.length === 0) {
        return [];
    }
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let temp = arr[i];
        let j = i;
        for (; j > 0; j--) {
            if (temp >= arr[j - 1]) {
                break;              // 当前考察的数大于前一个数，证明有序，退出循环
            }
            arr[j] = arr[j - 1];      // 将前一个数复制到后一个数上
        }
        arr[j] = temp;
    }
    return arr;
}
console.log('插入排序：', InsertSort([10, 9, 7, 7, 200, 100, 3, 5, 1]));
// [1, 3, 5, 7, 7, 9, 10, 100, 200]
```

## 快速排序
```JavaScript
/*
 *  原理：找到一个基准点，一般指（数组的中部），然后数组就被该基准点分为两部分，
 *  依次与该基准点进行比较，如果比他小的放左边，比它大的放右边
 *  时间复杂度：O(N^2)
 *  空间复杂度：O(logn)
 */
function QuickSort(arr) {
    if (arr === null || arr.length === 0) {
        return []
    }
    if (arr.length <= 1) {
        return arr;
    }
    // 保存中间的数组
    let minIndex = Math.floor(arr.length / 2);
    // 取出中间的值，剩下的内容进行循环比较
    let midArr = arr.splice(minIndex, 1);
    let minVal = midArr[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= minVal) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return QuickSort(left).concat(minVal, QuickSort(right));
}
console.log('快速排序：', QuickSort([10, 9, 7, 7, 200, 100, 3, 5, 1]));
// [1, 3, 5, 7, 7, 9, 10, 100, 200]
```
