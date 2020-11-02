# 有效括号

::: tip 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
:::

有效字符串需满足：
- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

## 示例 1
```JavaScript
输入: "()"
输出: true
```

## 示例 2
```JavaScript
输入: "()[]{}"
输出: true
```

## 示例 3
```JavaScript
输入: "(]"
输出: false
```

## 示例 4
```JavaScript
输入: "([)]"
输出: false
```

## 示例 5
```JavaScript
输入: "{[]}"
输出: true
```

## 解析

```JavaScript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 基数一定不匹配
    if (s.length % 2 === 1) {
        return false;
    }
    if (s === '') {
        return true;
    }

    let stack = [];
    const map  = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    for (let i = 0; i < s.length; i ++) {
        if (map.has(s[i])) {
            stack.push(s[i])
        } else {
            const stackTop = stack[stack.length - 1];
            if (map.get(stackTop) === s[i]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
```
