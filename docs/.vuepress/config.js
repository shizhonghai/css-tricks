module.exports = {
    title: 'CSS Tricks',
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
                title: "JavaScript 相关",
                collapsable: false,
                children: [
                    ["/javascript-01/", "数组扁平化"],
                    ["/javascript-02/", "如何让(a===1&&a===2&&a===3)的值为true?"],
                    ["/javascript-03/", "如何合并数组中相邻且重复的元素?"],
                    ["/javascript-04/", "创建“内置”方法 "],
                    ["/javascript-05/", "最长公共前缀"],
                ]
            },
            {
                title: "React 相关",
                collapsable: false,
                children: [
                    ["/react-01/", "说一下 React-Fiber"],
                    ["/react-02/", "什么是 React Fiber?"],
                ]
            },
            {
                title: "Webpack 相关",
                collapsable: false,
                children: [
                    ["/webpack-01/", "Babel 的原理是什么?"],
                    ["/webpack-02/", "webpack 与 grunt、gulp 的不同?"],
                    ["/webpack-03/", "webpack 中 loader 和 plugin 的区别是什么?"],
                    ["/webpack-04/", "webpack 中的模块热替换是指什么？原理是怎么样的?"],
                    ["/webpack-05/", "webpack 的构建流程是怎么样的?"],
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
