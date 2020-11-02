# 实现一个 LRU 算法

::: tip LRU 是 Least Recently Used 的缩写，即最近最少使用，是一种常用的页面置换算法，选择内存中最近最久未使用的页面予以淘汰。
:::

运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。


**进阶:**
你是否可以在 O(1) 时间复杂度内完成这两种操作？

## 示例
```JavaScript
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
```

## 解法一，一般的解法
一般的解法，通过维护一个数组，数组项存放了 key-value 键值对对象，每次需要遍历去寻找 key 值所在的数组下标操作。

```JavaScript
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let index = this.cache.findIndex((item) => item.key === key);
  if (index === -1) {
    return -1;
  }
  // 删除此元素后插入到数组第一项
  let value = this.cache[index].value;
  this.cache.splice(index, 1);
  this.cache.unshift({
    key,
    value,
  });
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let index = this.cache.findIndex((item) => item.key === key);
  // 想要插入的数据已经存在了，那么直接提升它就可以
  if (index > -1) {
    this.cache.splice(index, 1);
  } else if (this.cache.length >= this.capacity) {
    // 若已经到达最大限制，先淘汰一个最久没有使用的
    this.cache.pop();
  }
  this.cache.unshift({ key, value });
};

```

## 解法二，进阶解法

**来看进阶要求**
时间复杂度 O(1)，那就不能数组遍历去查找 key 值。可以用 ES6 的 Map 来解了，因为 Map 既能保持键值对，还能记住插入顺序。


```JavaScript
let LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        // 存在即更新
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    return -1
};

LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        // 存在即更新（删除后加入）
        this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
        // 不存在即加入
        // 缓存超过最大值，则移除最近没有使用的
        this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
}
```

::: tip 来源：力扣（LeetCode）
参考《[LeetCode链接](https://leetcode-cn.com/problems/lru-cache/)》
:::
