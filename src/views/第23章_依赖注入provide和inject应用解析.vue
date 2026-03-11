<template>
    <h1>依赖注入provide和inject应用解析(爷爷级别)</h1>
    <h2>这个组件是爷爷，provideA是爸爸，provideB是孙子</h2>
    <h3>目的是：通过爷爷级别组件，将colorVal值传递给provideA组件和provideB组件，实现颜色的切换</h3>
    <label>
        <input type="radio" v-model="colorVal" value="red" name="color">
        红色
    </label>
    <label>
        <input type="radio" v-model="colorVal" value="blue" name="color">
        蓝色
    </label>
    <label>
        <input type="radio" v-model="colorVal" value="yellow" name="color">
        黄色
    </label>
    <br>
    <div class="box"></div>
    <hr>
    <provideA></provideA>

</template>

<script setup lang='ts'>
// 要使用依赖注入，需要引入provideA组件
import { ref, provide, readonly } from 'vue'
import provideA from '@/components/依赖注入相关组件/provideA.vue'

const colorVal = ref<string>('red')

// provide('colorVal', readonly(colorVal))
provide('colorVal', colorVal)



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