<template>
    <h1>provideA组件(爸爸级别)</h1>
    <button @click="changeColor">切换颜色为粉色</button>
    <div class="box"></div>
    <hr>
    <provideB></provideB>



</template>

<script setup lang='ts'>
import provideB from '@/components/依赖注入相关组件/provideB.vue'
// 要接收依赖注入，需要引入inject函数
import { inject, ref } from 'vue'
// 接收依赖注入的colorVal值，传入的是响应式，就需要使用响应式的方式接收，响应式的ref的类型需要用如下的方式
import type { Ref } from 'vue'

// 要使用依赖注入的值，需要使用.value来获取值
const colorVal = inject<Ref<string>>('colorVal')
    const changeColor = () => {
    // 使用非空断言运算符来确保colorVal不为undefined
    colorVal!.value = 'pink'
}

</script>

<style scoped lang='scss'>
.box {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    // 这里有个vue对css的语法糖
    background: v-bind('colorVal');
}
</style>