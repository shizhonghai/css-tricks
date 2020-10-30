# webpack中source map是什么？生产环境怎么用?

source map是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。
map文件只要不打开开发者工具，浏览器是不会加载的

线上环境一般有三种处理方案：
- hidden-source-map：借助第三方错误监控平台Sentry使用
- nosources-source-map：只会显示具体行数以及查看源代码的错误栈。安全性比source map高
- source：通过nginx设置将.map文件只对白名单开放(公司内网)

::: tip
注意的是：避免在生产中使用 inline- 和 eval- ，因为它们会增加bundle体积大小，并降低整体性能。
:::
