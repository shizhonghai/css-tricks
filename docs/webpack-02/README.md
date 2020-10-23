# webpack与grunt、gulp的不同？

首先我们先回答这样的问题，这三者没什么可比性的。

grunt 和 gulp 在早期比较流行，属于前端工具类，主要优化前端工作流程。比如自动刷新页面、combo、压缩css、js、css预编译等等。

现在 webpack 相对来说比较主流，属于预编译模块的方案，不需要在浏览器中加载解释器。另外，你在本地直接写JS，不管是 AMD / CMD / ES6 风格的模块化，它都能认识，并且编译成浏览器认识的JS。

## 使用上的区别

- grunt 和 gulp 是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。

```JavaScript
gulp.task('dev',function(){
gulp.src('src/js/*.js')
.pipe(concat('all.js')) // 对其进行合并并且命名为 all.js
.pipe(uglify()) // 压缩
.pipe(rename('all.min.js')) // 重命名
.pipe(gulp.dest('dist/js/'));// 输出压缩后的js
})
在目录下执行`gulp dev`即可执行上述操作
// grunt这里就不在累述了，与gulp类似，只是稍微繁索一些，现在基本上用不上了
```

- webpack 是基于入口的。webpack 会自动地递归解析入口所需要加载的所有资源文件，然后用不同的 Loader 来处理不同的文件，用 Plugin 来扩展 webpack 功能。
```JavaScript
module.exports = {
    entry:'./entry.js', //入口文件
    output:{
    filename:'./bundle.js',//输出文件
},
module:{
    loaders:[
        ...loaders
    ]
  }
}
```

## 总结
- 从构建思路来说
gulp和grunt需要开发者将整个前端构建过程拆分成多个Task，并合理控制所有Task的调用关系。webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工。

- 对于知识背景来说
gulp更像后端开发者的思路，需要对于整个流程了如指掌。webpack更倾向于前端开发者的思路。

## 简单总结
- gulp,grunt是web构建工具
- webpack是模块化解决方案
- gulp,grunt是基于任务和流
- webpack基于入口文件

