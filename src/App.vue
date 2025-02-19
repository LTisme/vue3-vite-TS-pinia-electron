<template>
  <Layout></Layout>
</template>

<script setup lang='ts'>
  import Layout from './Layout/index.vue'

</script>

<!-- scoped表示只作用于当前组件，不会影响全局，而App.vue一般不加scoped，因为里面的东西都影响全局 -->
<style lang="scss">
  // #app {
  //   @include bfc;
  // }
</style>