<template>
    <div class="A">
        <button @click="emitB">点击我，给B传参</button>
    </div>
</template>

<script setup lang='ts'>

// defineEmits是vue提供的一个函数，用于定义组件的事件，可以传入一个数组，数组中的元素就是事件的名称
const emit = defineEmits(['on-click'])

const emitB = () => {
    emit('on-click', '我是A组件传过来的参数')
}
</script>

<style scoped lang='scss'>
.A {
    width: 200px;
    height: 200px;
    color: #fff;
    // 这里有个vue对css的语法糖
    background: red;
}
</style>