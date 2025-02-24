<template>
  <div style="display: flex;">
    <!-- class属性可以有2个，但必须是一个静态一个动态，不能两个静态或者两个动态，否则会报错 -->
    <div @click="switchComponent(item, index)" :class="[activeIndex == index ? 'active' : '']" class="tab"
      v-for="(item, index) in data">
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component :is="dynamicComponent"></component>
</template>

<script setup lang='ts'>
  import { ref, reactive, shallowRef, markRaw } from 'vue'
  import AVue from './components/components-study/A.vue'
  import BVue from './components/components-study/B.vue'
  import CVue from './components/components-study/C.vue'

  const activeIndex = ref(0)

  const switchComponent = (item: any, index: any) => {
    dynamicComponent.value = item.com
    activeIndex.value = index
  }

  // 因为ref的话会对组件很多不必要的信息做一个劫持，所以要跳过它
  // 所以这里使用shallowRef和markRaw就是为了减少性能开销
  const dynamicComponent = shallowRef(AVue)
  const data = reactive([
    {
      name: 'A组件',
      com: markRaw(AVue)
    },
    {
      name: 'B组件',
      com: markRaw(BVue)
    },
    {
      name: 'C组件',
      com: markRaw(CVue)
    }
  ])
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

  .active {
    background: skyblue;
  }

  .tab {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
  }
</style>