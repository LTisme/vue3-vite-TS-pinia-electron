<template>
  <!-- 注意！！！！！！！！！！！！！！ -->
  <!-- 必须！使用！Suspense！！！来展示异步组件 -->
  <Suspense>
    <!-- Suspense有两个插槽，第一个插槽是默认插槽，第二个插槽是错误插槽，用来展示异步组件加载失败的情况 -->
    <!-- 第二个是匿名插槽，它当然也有具名，只不过具名限定为了default罢了，可以写也可以不写他 -->
    <!-- <template #default> -->
    <SyncVue></SyncVue>
    <!-- </template> -->
    <!-- 第二个是具名插槽叫fallback，可以在加载期间做些什么，比如把骨架屏放进去 -->
    <template #fallback>
      <SkeletonVue></SkeletonVue>
    </template>
  </Suspense>
  <!-- <SkeletonVue /> -->
</template>

<script setup lang='ts'>
  // 一定要使用这个defineAsyncComponent来引入异步组件
  // 异步组件有什么好处呢？可以AI一下帮助你一下子理解，主要核心是不要一下子把组件都加载进来造成大量等待时间
  import { defineAsyncComponent } from 'vue';
  import SkeletonVue from '@/components/sync-suspense-study/skeleton.vue';

  // defineAsyncComponent有两种风格的书写方式，下面两种写法是等价的，但一般都用第一种
  // const SyncVue = defineAsyncComponent(() => import('@/components/sync-suspense-study/sync.vue'))
  const SyncVue = defineAsyncComponent({
    loader: () => import('@/components/sync-suspense-study/sync.vue'),
    loadingComponent: SkeletonVue,
    errorComponent: { template: '<div>加载失败了</div>' },
    timeout: 3000, // 超时时间，默认3000ms
  })

</script>

<style lang='scss'>

  #app,
  html,
  body {
    padding: 0;
    margin: 0;
    top: 0;
    // height: 100%;
    width: 100%;
  }

  * {
    padding: 0;
    margin: 0;
  }
</style>