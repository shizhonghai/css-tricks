module.exports = {
    title: 'Tricks',
    description: 'Just playing around',
    dest: './dist',
    base: '/css-tricks/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        /**
         * 右侧导航条
         * text - 显示字段
         * link - 链接：注意前后带 / 符号
         */
        nav: [
            {
                text: 'CSS',
                link: '/triangle/'
            },
            {
                text: '特殊页面',
                link: '/special-layout/'
            },
            // 链接到网站
            {
                text: 'Github',
                link: 'https://github.com/shizhonghai/css-tricks/'
            },
        ],
        sidebar: [
            {
                title: "LeetCode 算法题解",
                collapsable: true,
                children: [
                    ["/javascript-01/", "1. 数组扁平化"],
                    ["/javascript-02/", "2. 如何让(a===1&&a===2&&a===3)的值为true?"],
                    ["/javascript-03/", "3. 如何合并数组中相邻且重复的元素?"],
                    ["/javascript-04/", "4. 创建“内置”方法 "],
                    ["/javascript-05/", "5. 最长公共前缀"],
                    ["/javascript-06/", "6. 求两个数组的交集"],
                    ["/javascript-07/", "7. 整数反转"],
                    ["/javascript-08/", "8. 实现一个 LRU 算法"],
                    ["/javascript-09/", "9. 回文数"],
                    ["/javascript-10/", "10. 有效括号"],
                    ["/javascript-11/", "11. 合并两个有序链表"],
                    ["/javascript-12/", "12. 删除排序数组中的重复项"],
                    ["/javascript-13/", "13. 两数之和"],
                    ["/javascript-14/", "14. 二叉树的最小深度"],
                    ["/javascript-15/", "15. 冒泡排序和选择排序"],
                    ["/javascript-16/", "16. 插入排序和快速排序"],
                    ["/javascript-17/", "17. 只出现一次的数字"],
                    ["/javascript-18/", "18. 数组中重复的数字"],
                    ["/javascript-19/", "19. 买卖股票的最佳时机"],
                ]
            },
            {
                title: "TypeScript",
                collapsable: false,
                children: [
                    ["/typescript-01/", "type 和 interface 区别"],
                ]
            },
            {
                title: "面试需要记住的概念",
                collapsable: false,
                children: [
                    ["/mianshi-01/", "React-Fiber"],
                    ["/mianshi-02/", "在线制图"],
                    ["/mianshi-03/", "浏览器缓存"],
                    ["/mianshi-04/", "EventLoop"],
                    ["/mianshi-05/", "Vue和React的区别"],
                    ["/mianshi-06/", "React Hook"],
                    ["/mianshi-07/", "说一下 http 和 https"],
                ]
            },
            {
                title: "Css",
                collapsable: false,
                children: [
                    ["/css-01/", "说一下 CSS 盒模型"],
                    ["/css-02/", "BFC(块级格式化上下文)"],
                    ["/css-03/", "移动端click事件延迟300ms和点击穿透问题"],
                    ["/css-04/", "em和rem的区别"],
                ]
            },
            {
                title: "React",
                collapsable: false,
                children: [
                    ["/react-01/", "说一下 React-Fiber"],
                    ["/react-02/", "什么是 React Fiber?"],
                ]
            },
            {
                title: "Webpack",
                collapsable: true,
                children: [
                    ["/webpack-01/", "Babel 的原理是什么?"],
                    ["/webpack-02/", "webpack 与 grunt、gulp 的不同?"],
                    ["/webpack-03/", "webpack 中 loader 和 plugin 的区别是什么?"],
                    ["/webpack-04/", "webpack 中的模块热替换是指什么？原理是怎么样的?"],
                    ["/webpack-05/", "webpack 的构建流程是怎么样的?"],
                    ["/webpack-06/", "webpack中source map是什么？生产环境怎么用?"],
                    ["/webpack-07/", "常见的loader以及作用的总结"],
                    ["/webpack-08/", "如何实现 webpack 持久化缓存?"],
                ]
            },
            {
                title: "技巧",
                collapsable: true,
                children: [
                    ["/triangle/", "三角形边框"],
                    ["/ellipsis/", "文字超出显示省略号"],
                    ["/font-justify/", "文字两端对齐"],
                    ["/every-word-capitalize/", "每个单词的首字母大写"],
                    ["/variable-progress/", "CSS变量与上传进度条"],
                ]
            },
            {
                title: "属性",
                collapsable: true,
                children: [
                    ["/filter/", "滤镜 filter"],
                    ["/backdrop-filter/", "backdrop-filter 与毛玻璃效果"],
                    ["/position-sticky/", "position: sticky 与粘性定位效果"],
                ]
            },
            {
                title: "渐变 Gradient",
                collapsable: true,
                children: [
                    ["/conic-gradient/", "角向渐变，可以实现饼图"],
                ]
            },
            {
                title: "浏览器",
                collapsable: true,
                children: [
                    ["/safari-input-autofill/", "如何隐藏 Safari 中 input 标签的密码自动填充图标"],
                ]
            },
            {
                title: "动画",
                collapsable: true,
                children: [
                    ["/loading/", "加载动画"],
                ]
            }
        ],
        sidebarDepth: 1,
        lastUpdated: "最后更新时间",
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'shizhonghai/css-tricks',
        repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
};
