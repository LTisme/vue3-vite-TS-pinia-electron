<template>
    <div>
        <h2>响应式源码实现测试</h2>
        <p>姓名：{{ Man1.name }}</p>
        <p>年龄：{{ Man1.age }}</p>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>

</template>

<script setup lang='ts'>
import { MyReactive, effect } from '@/utils/MyReactive'

const Man1 = MyReactive({ name: '张三', age: 18 })

// 测试响应式
effect(() => {
  console.log(`姓名：${Man1.name} 年龄：${Man1.age}`)
})

// 测试修改姓名
const changeName = () => {
  Man1.name = '李四'
}

// 测试修改年龄
const changeAge = () => {
  Man1.age = 20
}

</script>

<style scoped lang='scss'></style>