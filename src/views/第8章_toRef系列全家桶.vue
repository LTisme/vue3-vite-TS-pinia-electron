<template>

    <div>
        {{ Man1 }}
    </div>
    <div>
        {{ Man2 }}
    </div>
    <div>
        <button @click="change">修改</button>
    </div>


</template>

<script setup lang='ts'>

import { toRef, reactive } from 'vue';

const Man1 = { name: '张三', age: 18 }
const Man2 = reactive({ name: '李四', age: 28 })

// toRef的作用是保持响应式，但也只能作用于响应式对象!!!
// 它存在的意义是保持响应式，防止如解构、赋值时可能导致的响应式丢失
// 比如你从接口中拿到了一个对象，你想将它的某个属性解构出来，
// 但是你想保持响应式，防止解构后丢失响应式
const toRefMan1 = toRef(Man1, 'name')
const toRefMan2 = toRef(Man2, 'name')

const change = () => {
    // Man1.name = '王五'
    // Man2.name = '王五，我被改啦!'
    toRefMan1.value = '我被改啦!'
    toRefMan2.value = '我被改啦!'
    console.log(Man1)
    console.log(Man2)
}
</script>

<style scoped lang='scss'></style>