import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TypeSquirrel",
  description: "带有类型诊断的squirrel语法扩展",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '使用文档',
        items: [
          { text: '使用文档', link: '/markdown-examples' },
          { text: '台服DOF内置class api', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
