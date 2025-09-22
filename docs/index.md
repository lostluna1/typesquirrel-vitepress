---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TypeSquirrel"
  text: "带有类型诊断的squirrel语法扩展"
  tagline: 像编译语言一样写squirrel代码
  actions:
    - theme: brand
      text: 了解具体功能
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
  image:
    src: /images/a2.png
    alt: TypeSquirrel

features:
  - icon: 🎉
    title: Syntax(语法高亮)
    details: 完善的语法高亮，关键字、函数、常量、控制语句。
  - icon: 🛠️
    title: Lint(语法检查)
    details: 借鉴了编译型语言的语法检查模式，并对一些明确的已知类型使用强校验。
  - icon: 🎨
    title: Formatter(代码格式化)
    details: 强大的格式化功能，可以为你提供统一的编码风格。
  - icon: 🧩
    title: 代码补全
    details: 你无需完整输入函数/方法的全称，更无需手动补全参数，接受补全后会自动为你插入参数名占位符，按需修改即可。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}

/* Rotate/tilt hero image and add a bottom-right shadow */
.VPHome .image-container img.VPImage {
  width: 560px;
  max-width: 45%;
  height: auto;
}
@media (max-width: 900px) {
  .VPHome .image-container img.VPImage { width: 90%; max-width: 320px; }
}
.VPHome .image-container .image-src {
  transform: rotate(12deg) skew(6deg) scale(2) !important;
  transform-origin: center center !important;
  box-shadow: 18px 18px 48px rgba(0,0,0,0.36) !important; /* right-bottom shadow */
  border-radius: 8px !important;
}


</style>