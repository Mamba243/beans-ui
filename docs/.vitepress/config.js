import {demoBlockPlugin} from 'vitepress-theme-demoblock'

export default {
  base: '/docs/',
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
    socialLinks: [{icon: "github", link: " https://github.com/Mamba243/BeansUI"}],
    sidebar: {
      "/guide/": [
        {
          text: "导航",
          items: [
            {
              text: "更新日志",
              link: "/guide/updatelogs",
            },
            {
              text: "安装使用",
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
          text: "常规",
          items: [
            {
              text: "Icon图标",
              link: "/examples/icon/",
            },
            {
              text: "Color色彩",
              link: "/examples/color/",
            },
          ]
        },
        {
          text: "通用",
          items: [
            {
              text: "Button按钮",
              link: "/examples/button/",
            },
            {
              text: "Input输入框",
              link: "/examples/input/",
            },
            {
              text: "Textarea文本域",
              link: "/examples/textarea/",
            },
          ],
        },
        {
          text: "数据",
          items: [
            {
              text: "Table表格",
              link: "/examples/table/",
            },
          ]
        },
        {
          text: "交互",
          items: [
            {
              text: "Message消息提示",
              link: "/examples/message/",
            },
          ]
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



