<template>

  <div>
    case1: <input v-model="mess1" type="text">
    <br>
    case2: <input v-model="mess2" type="text">
    <br>
    case3: <input v-model="message1.foo.bar.name" type="text">
    <br>
    case4: <input v-model="message1.foo.bar.age" type="text">
    <br>
    <button @click="stop">停止监听</button>
    <button @click="pause">暂停监听</button>
    <button @click="resume">恢复监听</button>
  </div>

</template>

<script setup lang='ts'>
  import { reactive, toRef, ref, watch, watchEffect } from 'vue';

  let mess1 = ref('飞机')
  let mess2 = ref('杯子')

  let message1 = reactive({
    foo: {
      bar: {
        name: "张三",
        age: 20,
      }
    }
  });


  watch(() => message1.foo.bar.name, (newVal, oldVal) => {
    console.log('message1 changed', newVal, oldVal);
  })
  // watchEffect是非惰性的，会在页面加载时就立即执行一次，而不是像watch一样监听到数据变化时才执行·
  // 它可以返回停止、暂停、恢复监听器的方法，当然watch也可以返回停止、暂停、恢复监听器的方法
  const { stop, pause, resume } = watchEffect((cleanUp) => {
    console.log('mess1=========>', mess1.value);
    console.log('mess2=========>', mess2.value);
    cleanUp(() => {
      console.log('before');
    })
  },
    // 这里是配置选项，可以设置flush，默认是pre，即在组件更新之前，先清除上一次的副作用，
    // 还可以设置挺多东西的，可以去官网看看，比如ontrigger函数
    {
      flush: 'post'
    })

</script>

<style scoped></style>