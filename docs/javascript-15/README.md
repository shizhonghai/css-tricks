# 冒泡排序和选择排序

## 冒泡排序
```JavaScript
/*
 *  1、比较相邻的两个元素，如果前一个比后一个大，则交换位置。
 *  2、比较完第一轮的时候，最后一个元素是最大的元素。
 *  3、这时候最后一个元素是最大的，所以最后一个元素就不需要参与比较大小。
 *  时间复杂度：O(N^2)
 *  空间复杂度：O(1)
 */
function BubbleSort(arr) {
    if (arr === null || arr.length === 0) {
        return [];
    }
    let len = arr.length;
    // 比较轮数
    for (let i = 0; i < len - 1; i++) {
        // 每轮比较次数，次数=长度-1-此时的轮数
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log('冒泡排序：', BubbleSort([10, 9, 7, 7, 200, 100, 3, 5, 1]));
// [1, 3, 5, 7, 7, 9, 10, 100, 200]
```

## 选择排序
```JavaScript
/*
 *  原理：遍历数组，把最小数放在头部
 *  1、首先从原始数组中找到最小的元素，并把该元素放在数组的最前面
 *  2、然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，直到排序完毕
 *  时间复杂度：O(N^2)
 *  空间复杂度：O(1)
 */
function SelectionSort(arr) {
    if (arr === null || arr.length === 0) {
        return [];
    }
    let len = arr.length, minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
console.log('选择排序：', SelectionSort([10, 9, 7, 7, 200, 100, 3, 5, 1]));
// [1, 3, 5, 7, 7, 9, 10, 100, 200]
```
