<template>
    <div class="B">
        {{ props.params }}
    </div>
</template>

<script setup lang='ts'>
// defineProps是vue提供的一个函数，用于定义组件的属性，可以传入一个对象，对象中的属性就是组件的属性
const props = defineProps({
    params: {
        type: String,
        default: ''
    }
})

</script>

<style scoped lang='scss'>
.B {
    width: 200px;
    height: 200px;
    color: #fff;
    // 这里有个vue对css的语法糖
    background: blue;
}
</style>