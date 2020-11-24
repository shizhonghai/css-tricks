# type 和 interface 区别

## 相同点
1. 都可以描述一个对象或者函数

**interface**
```JavaScript
interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void;
}
```

**type**
```JavaScript
type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number)=> void;
```

## 不同点
1. 语法不同
```JavaScript
interface Point{
    x: number,
    y: number
}
type Point = {
    x: number,
    y: number,
}

interface setPoint {
    (x: number, y: number): void
}
type setPoint2 = (x: number, y: number) => void;
```

2. interface 可以实现接口的 merge（interface可以定义多次，并将被视为单个接口），但是 type 不行(type 重复定义会报错)
```JavaScript
interface Point {
    x: number
}
interface Point {
    y: number
}
var p:Point = {
    x: 1,
    y: 2
}
```

3. 都允许拓展（extends），但 extends 写法不同, 都可以互相扩展
- interface extends interface
```JavaScript
interface PointX{
    pointX: 0
}
interface PointY extends PointX {
    pointY: 0
}
const p:PointY = {
    pointX: 0,
    pointY: 0,
}
```
- type extends type
```JavaScript
type PointX = {
  pointX: 0
}
type PointY = PointX & {
  pointY: 0
}
const p:PointY = {
  pointX: 0,
  pointY: 0,
}
```
- Interface extends type
```JavaScript
type PointX = {
    pointX: 0
}
interface PointY extends PointX{
    pointY: 0,
}
const p:PointY = {
    pointX: 0,
    pointY: 0,
}
```
- type extends interface
```JavaScript
interface PointX{
    pointX: 0
}
type PointY =  PointX & {
    pointY: 0,
}
const p:PointY = {
    pointX: 0,
    pointY: 0,
}
```

4. Type可以用于更多的类型，例如：可以声明基本类型别名、联合类型、元组等类型
```JavaScript
// 基本类型别名
type Name = string

// object
type ObjA = {a: number};
type ObjB = {b: number};

// 联合类型
type UnionObj = ObjA | ObjB;

// 元组类型
type Arr = [number, string];

// 当你想获取一个变量的类型时，使用 typeof
var div = document.creatElement('div');
type Div = typeof div;
```

5. Type可以计算属性，生成映射类型
```JavaScript
type Keys = 'a' | 'b';

type Obj = {
    [key in Keys]: number
}

var obj:Obj = {
    'a': 1,
    'b': 2
}

// error
interface Obj2{
    [key in Keys]: number
}
```
