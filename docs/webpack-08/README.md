# 如何实现 webpack 持久化缓存?

- 服务端设置HTTP缓存头(Cache-Control等)
- 打包依赖(`dependencies`)和运行时(runtime)到不同chunk(在webpack中，编译后的单独文件称为chunk)，即作splitChunk，因为它们几乎是不变的
- 延迟加载：使用import()方式，可以动态加载的文件分到独立的chunk，以得到自己的chunkhash
- 保证hash值稳定：编译过程和文件内容的更改尽量不影响其他文件hash的计算。对于低版本webpack生成的增量数字ID不稳定问题，可用 `HashedModuleldsPlugin` 基于文件路径生成解决
