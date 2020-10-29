# 创建“内置”方法 

::: tip 给String对象定义一个repeatify方法。该方法接收一个整数参数，作为字符串重复的次数，最后返回重复指定次数的字符串。
:::


## 解析
- 最简单的遍历执行
```JavaScript
String.prototype.repeatify = String.prototype.repeatify || function(numbers){
  var str = "";
  for (var i = 0;i<numbers;i++) {
    str +=this;
  }
  return str ;
}
```

- 数组转换
```JavaScript
String.prototype.repeatify = String.prototype.repeatify || function(numbers){
  var arr = new Array(numbers);
  arr.fill(this);
  return arr.join("");
}
```

## 执行
::: tip console.log("nihao".repeatify(3)); 结果：nihaonihaonihao
:::

## 注意
```JavaScript
// 避免重写已经定义了的方法
String.prototype.repeatify = String.prototype.repeatify || function(numbers){}
```
