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
                text: '关于',
                link: '/about/'
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
                ]
            },
            {
                title: "属性",
                collapsable: false,
                children: [
                    ["/filter/", "滤镜 filter"],
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
        themeConfig: {
            lastUpdated: "Last Updated"
        },
    }
};