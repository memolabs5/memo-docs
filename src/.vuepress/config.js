/*
 * @Author: wudi(max24@vip.qq.com)
 * @Date: 2021-02-22 13:29:03
 * @Description: 文档项目配置文件
 */
const { description } = require('../../package')

// 具体配置参数可以参考 https://v1.vuepress.vuejs.org/config/
module.exports = {
  base: '/docs/',// 资源base目录，对应的是nginx根目录下的目录，若放在跟目录，则改成'/'
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Memo Docs',// 网站标题
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,// 网站描述，在/memo-docs/package.json中的description字段修改

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    /**
    nav: [// 顶部导航菜单
      {
        text: 'Guide',// 菜单文本
        link: '/guide/',// 菜单链接，对应memo-docs/src/guide目录
      },
      {
        text: 'Resource',
        link: '/resource/'
      },
      {
        text: 'View',
        link: '/view/'
      },
      {
        text: 'Information',
        link: '/information/'
      },
      {
        text: 'Interact width us',
        link: '/interactwithus/'
      }
    ],
     */
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
        collapsable: false,
        sidebarDepth: 2,
        children: [// 子菜单
        ]
      },
      {
        title: 'Resource',
        path: '/resource/',
        collapsable: false,
        sidebarDepth: 1,
        children: [// 子菜单
        ]
      },
      {
        title: 'View',
        path: '/view/',
        collapsable: false,
        sidebarDepth: 1,
        children: [// 子菜单
        ]
      },
      {
        title: 'Information',
        path: '/information/',
        collapsable: false,
        sidebarDepth: 1,
        children: [// 子菜单
        ]
      },
      {
        title: 'Interact width us',
        path: '/interactwithus/',
        collapsable: false,
        sidebarDepth: 1,
        children: [// 子菜单
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
