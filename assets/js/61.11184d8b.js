(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{662:function(e,t,n){"use strict";n.r(t);var a=n(69),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"如何实现-webpack-持久化缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何实现-webpack-持久化缓存"}},[e._v("#")]),e._v(" 如何实现 webpack 持久化缓存?")]),e._v(" "),n("ul",[n("li",[e._v("服务端设置HTTP缓存头(Cache-Control等)")]),e._v(" "),n("li",[e._v("打包依赖("),n("code",[e._v("dependencies")]),e._v(")和运行时(runtime)到不同chunk(在webpack中，编译后的单独文件称为chunk)，即作splitChunk，因为它们几乎是不变的")]),e._v(" "),n("li",[e._v("延迟加载：使用import()方式，可以动态加载的文件分到独立的chunk，以得到自己的chunkhash")]),e._v(" "),n("li",[e._v("保证hash值稳定：编译过程和文件内容的更改尽量不影响其他文件hash的计算。对于低版本webpack生成的增量数字ID不稳定问题，可用 "),n("code",[e._v("HashedModuleldsPlugin")]),e._v(" 基于文件路径生成解决")])])])}),[],!1,null,null,null);t.default=s.exports}}]);