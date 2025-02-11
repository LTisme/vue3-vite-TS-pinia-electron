<template>

  <div>man2:{{ man2 }}</div>
  <br>
  <div>man1:{{ man1 }}</div>
  <br>
  <button @click="changeName2">Change Name2</button>
  <br>
  <button @click="changeName1">Change Name1</button>
  <br>

</template>

<script setup lang='ts'>

  import { toRef, reactive, toRefs, toRaw } from 'vue';

  const man1 = { name: 'Tom', age: 25, gender: 'Male' }
  const man2 = reactive({ name: 'Tom', age: 25, gender: 'Male' })

  const changeName2 = () => {
    man2.name = 'Jerry';
    console.log(toRaw(man2))
  }
  const changeName1 = () => {
    man1.name = 'Jerry';
    console.log(toRaw(man1))
  }

  // 手写toRefs源码
  const myToRefs = <T extends object>(obj: T) => {
    // 创建一个空对象
    const map: any = {}
    // 遍历传入的对象的属性
    for (const key in obj) {
      // 判断属性是否是对象自身的属性
      if (obj.hasOwnProperty(key)) {
        // 将属性转换为响应式对象，并将key-属性键值对添加到map对象中
        map[key] = toRef(obj, key)
      }
    }
    return map
  }

  let { name, age, gender } = myToRefs(man2) // 转换为响应式对象
  // let { name, age, gender } = myToRefs(man1) // 由于man1是普通对象，所以不能转换为响应式对象，只能使用普通的解构赋值
  // let { name, age, gender } = toRefs(man2)

  console.log("man-series", name, age, gender)
  console.log(man1, toRaw(man1))
  console.log(man2, toRaw(man2))
  // console.log("man1", name1, age1, gender1)
  // console.log("man3", name.value, age.value, gender.value)

</script>

<style scoped></style>