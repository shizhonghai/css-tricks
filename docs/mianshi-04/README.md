# EventLoop

因为javascript是单线程的脚本语言，代码自上而下执行，代码在执行时会被压入执行栈（stack）中，
当遇到setTimeout时会将setTimeout函数交给Web API来维护，
当异步任务（比如：setTimeout）执行完成后会将对应的回调函数推入事件队列（event queue）中，
当执行栈中任务全部执行完成之后浏览器会读取任务队列，
把对应的回调函数再压入执行栈中，然后循环执行。
这就是所谓的EventLoop。
