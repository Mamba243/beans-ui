import {demoBlockPlugin} from 'vitepress-theme-demoblock'

export default {
  base:'/docs/',
  title: 'BeansUI',
  description: 'Just playing around.',
  lang: 'en-US',
  themeConfig: {
    siteTitle: 'BeansUI',
    logo: '/beans.png',
    nav: [
      {text: '导航', link: '/guide/installation', activeMatch: '/guide'},
      {text: '组件', link: '/examples/button/', activeMatch: '/examples'},
    ],
    socialLinks: [{icon: "github", link: "https://github.com/Mamba243"}],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/installation",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button按钮",
              link: "/examples/button/",
            },
            {
              text: "Table表格",
              link: "/examples/table/",
            },
            {
              text: "Input输入框",
              link: "/examples/input/",
            }
          ],
        },
      ],
    }
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  },
}



