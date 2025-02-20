<template>
  <div>父级，如果收到了子组件的传值就会显示在这里: {{ varialble }}</div>
  <hr>
  <!-- 传递的时候可以像这样自定义一个属性，把变量放进去，然后在子组件中接收这个变量 -->
  <waterFallVue ref="waterFall" @valToParent="valFromChild" :fromParentArr="arr" :fromParentVal="name"></waterFallVue>
</template>

<script setup lang='ts'>
  import { ref, onMounted } from 'vue'

  let varialble = ref('')

  import waterFallVue from '@/components/water-fall.vue'
  // 父组件给子组件传值
  let name = '张三'
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const valFromChild = (val: string) => {
    console.log('父组件收到了子组件传来的值：', val)
    varialble.value = val
  }
  const waterFall = ref<InstanceType<typeof waterFallVue>>()
  // const aa = waterFall.value?.exposedName
  // console.log('父组件接收子组件暴露的属性：', waterFall.value)

  onMounted(() => {
    console.log('父组件接收子组件暴露的属性：', waterFall.value)
    console.log('父组件接收子组件暴露的属性：', waterFall.value?.exposedName)
    console.log('父组件挂载完成')
  })

</script>

<!-- scoped表示只作用于当前组件，不会影响全局，而App.vue一般不加scoped，因为里面的东西都影响全局 -->
<style lang="scss">
  // #app {
  //   @include bfc;
  // }
</style>