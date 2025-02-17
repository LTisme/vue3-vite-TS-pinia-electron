<template>

  <h1>生命周期</h1>
  <hr>
  <!-- 组件绑定v-if是会触发组件的创建-销毁的2个生命周期钩子，而v-show就不会 -->
  <A v-if="flag"></A>
  <button @click="flag = !flag">创建-销毁</button>

</template>

<script setup lang='ts'>
  import { ref } from 'vue';
  import A from './components/A.vue'
  const flag = ref(false)

</script>

<style scoped></style>