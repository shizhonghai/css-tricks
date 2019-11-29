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
                title: "技巧",
                collapsable: false,
                children: [
                    ["/triangle/", "三角形边框"],
                    ["/ellipsis/", "文字超出显示省略号"],
                    ["/font-justify/", "文字两端对齐"],
                    ["/every-word-capitalize/", "每个单词的首字母大写"],
                ]
            },
            {
                title: "属性",
                collapsable: false,
                children: [
                    ["/filter/", "滤镜 filter"],
                    ["/backdrop-filter/", "backdrop-filter与毛玻璃效果"],
                ]
            },
            {
                title: "渐变 Gradient",
                collapsable: false,
                children: [
                    ["/conic-gradient/", "角向渐变，可以实现饼图"],
                ]
            },
            {
                title: "动画",
                collapsable: false,
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