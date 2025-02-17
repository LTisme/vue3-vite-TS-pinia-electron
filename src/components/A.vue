<template>

    <h3>我是组件 好家伙</h3>
    <hr>
    <div ref="targetDiv">{{ str }}</div>
    <button @click="changeStr">修改</button>

</template>

<script setup lang='ts'>

    import {
        ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,
        onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated,
    } from 'vue';
    // 注意！在使用Vue3 组合式API时 是没有 beforeCreate 和 created 这两个生命周期的，而是setup代替了这两个生命周期。

    const str = ref<string>('我是组件的属性')
    const targetDiv = ref<HTMLDivElement | null>(null)
    const changeStr = () => {
        str.value = '我被修改了'
    }

    console.log(`我是setup，我一定得是先被打印出来的`)
    // 创建
    onBeforeMount(() => {
        console.log(`创建之前=========>是读不到dom的`, targetDiv.value)
    })
    // 创建完成
    onMounted(() => {
        console.log(`创建完成=========>才能读到dom`, targetDiv.value)
    })
    // 更新之前
    onBeforeUpdate(() => {
        console.log(`更新之前=========>获取的是更新之前的dom`, targetDiv.value?.innerText)
    })
    // 更新完成
    onUpdated(() => {
        console.log(`更新完成=========>获取的是更新之后的dom`, targetDiv.value?.innerText)
    })
    // 销毁之前
    onBeforeUnmount(() => {
        console.log(`销毁之前=========>`)
    })
    // 销毁完成
    onUnmounted(() => {
        console.log(`销毁完成=========>`)
    })
    // 捕获错误
    onErrorCaptured(() => {
        console.log(`捕获错误=========>`)
    })
    // 追踪渲染
    onRenderTracked((e) => {
        console.log(`渲染追踪=========>`, e)
    })
    // 触发渲染
    onRenderTriggered((e) => {
        console.log(`渲染触发=========>`, e)
    })
    // 激活
    onActivated(() => {
        console.log(`激活=========>`)
    })
    // 失活
    onDeactivated(() => {
        console.log(`失活=========>`)
    })

</script>

<style scoped></style>