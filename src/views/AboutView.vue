<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>

  /* 媒体查询条件：仅当浏览器视口宽度 ≥1024px（通常为台式机或大屏笔记本）时，内部的样式规则才会生效。 */
  @media (min-width: 1024px) {
    .about {
      /* 确保元素高度至少占满整个视口（Viewport Height），避免内容过少时页面显得空洞。 */
      min-height: 100vh;
      /* 将元素变为弹性容器（Flexbox），方便子元素的灵活布局。 */
      display: flex;
      /* 在 Flexbox 布局下，垂直居中所有子元素。 */
      align-items: center;
    }
  }
</style>
