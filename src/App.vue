<template>
  <div class="parent">
    <h1>嗨嗨嗨，我是父级</h1>
    <Teleport :disabled="flag" to="body">
      <TeleportVue />
    </Teleport>
  </div>
</template>

<script setup lang='ts'>
  import { ref, reactive } from 'vue'
  import TeleportVue from '@/components/Teleport传送组件-study/index.vue'

  const flag = ref(false)
  // flag.value = true // 关闭传送功能
</script>

<style lang='scss'>

  // #app,
  // html,
  // body {
  //   padding: 0;
  //   margin: 0;
  //   top: 0;
  //   // height: 100%;
  //   width: 100%;
  // }

  #app,
  * {
    padding: 0;
    margin: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .parent {
    background: yellow;
    height: 50vh;
    position: relative; // 会影响子组件的定位
  }
</style>