<template>
  <div class="content">
    <DialogVue>
      <!-- 还有动态插槽的写法，当然也可以用简写的形式 -->
      <template v-slot:[dynamicalSlot]>
        <div>我被父组件插入了下间</div>
      </template>
      <!-- 简写的话是#default="{ customedVarFromChildSlot }" -->
      <template v-slot="{ customedVarFromChildSlot }"><!-- 解构出来 -->
        <div>我被父组件插入了中间</div>
        <div>{{ customedVarFromChildSlot }}</div>
      </template>
      <!-- v-slot是可以简写的，这里相当于v-slot:header -->
      <template #header>
        <div>我被父组件插入了上面</div>
      </template>
    </DialogVue>
  </div>
</template>

<script setup lang='ts'>
  import { ref } from 'vue'
  import DialogVue from './components/Dialog-slot-study/index.vue'

  const dynamicalSlot = ref('footer')

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