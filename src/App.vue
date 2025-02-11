<template>

  <div>
    <div>
      姓：<input v-model="firstName" type="text" />
    </div>
    <div>
      名：<input v-model="lastName" type="text" />
    </div>
    <div>
      全名：{{ name }}
    </div>
    <!-- <div>
      <button @click="changeName">修改名字</button>
    </div> -->
  </div>

</template>

<script setup lang='ts'>

  import { ref, computed } from 'vue';

  let firstName = ref('张');
  let lastName = ref('三');

  // 1、选项式写法，支持一个对象传入get函数及set函数，来自定义操作
  // let name = computed<string>({
  //   get() {
  //     return `${firstName.value} ${lastName.value}`;
  //   },
  //   // .value属性一旦被改变，set函数就会被调用
  //   // 这里的newVal是修改后的新值
  //   set(newVal: string) {
  //     console.log(`newVal: ${newVal}`);
  //     [firstName.value, lastName.value] = newVal.split('-');
  //   }
  // })
  // 2、函数式写法，方便，但是不支持值修改
  let name = computed(() => `${firstName.value} ${lastName.value}`);
  // const changeName = () => {
  //   name.value = `小小小小-鸟`
  // }

</script>

<style scoped></style>