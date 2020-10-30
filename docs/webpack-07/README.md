# 常见的loader以及作用的总结

+ `raw-loader`：加载文件原始内容（utf-8）
+ `file-loader`：把文件输出到一个文件夹中，在代码中通过相对URL去引用输出的文件
+ `url-loader`:和file-loader类似，但是能在文件很小的情况下以base64的方式把文件内容注入到代码中
+ `source-map-loader`:加载额外的Source Map文件，以方便断点调试
+ `svg-inline-loader`：将压缩后的 SVG 内容注入代码中
+ `image-loader`：加载并且压缩图片文件
+ `json-loader`： 加载 JSON 文件（默认包含）
+ `handlebars-loader`: 将 Handlebars 模版编译成函数并返回
+ `babel-loader`：把ES6转化成ES5
+ `ts-loader`: 将 TypeScript 转换成 JavaScript
+ `awesome-typescript-loader`：将 TypeScript 转换成 JavaScript，性能优于 ts-loader
+ `css-loader`：加载css，支持模块化、压缩、文件导入等特性
+ `style-loader`：把css代码注入到js中，通过DOM操作去加载css
+ `eslint-loader`：通过ESLint检查JS代码
+ `tslint-loader`：通过 TSLint检查 TypeScript 代码
+ `postcss-loader`：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
+ `vue-loader`：加载 Vue.js 单文件组件
+ `cache-loader`: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里
