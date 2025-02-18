<template>

  <h1>生命周期</h1>
  <hr>
  <!-- 组件绑定v-if是会触发组件的创建-销毁的2个生命周期钩子，而v-show就不会 -->
  <A v-if="flag"></A>
  <button @click="flag = !flag">创建-销毁</button>
  <div class="mysass-test">
    我滴贵贵
    <div class="mysass-test__inner">
      el
    </div>
    <div class="mysass-test--success">
      hihi
    </div>
  </div>

</template>

<script setup lang='ts'>
  import { ref } from 'vue';
  import A from './components/A.vue'
  const flag = ref(false)

</script>

<!-- scoped表示只作用于当前组件，不会影响全局，而App.vue一般不加scoped，因为里面的东西都影响全局 -->
<style lang="scss" scoped>
  @include b(test) {
    color: red;

    @include e(inner) {
      color: blue;
    }

    @include m(success) {
      color: green;
    }
  }
</style>