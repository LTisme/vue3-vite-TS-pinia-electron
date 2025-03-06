<template>
    <div class="content">
        <button @click="addEvent">Add</button>
        <button @click="popEvent">pop</button>
        <div class="wraps">
            <!-- tag的作用是帮你多包一层 -->
            <!-- 然后其他的属性是和Transition组件一样的enter-xxx、leave-xxx、appear等属性 -->
            <TransitionGroup enter-active-class="animate__animated animate__bounceInLeft"
                leave-active-class="animate__animated animate__bounceOutRight" tag="section">
                <!-- 使用TransitionGroup组件包裹多个元素，【【一定要给每一个元素添加key属性】】 -->
                <div class="item" :key="item.num" v-for="item in boxList">{{ item }}</div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
    import "animate.css"
    import { ref, reactive } from 'vue'
    const switchFlag = ref(true)
    // 【【【【主题仍然是Transition组件，但如果需要平滑过渡多个元素则需要用TransitionGroup组件】】】
    const boxList = reactive([
        { num: 1, name: 'box1', show: true },
        { num: 2, name: 'box2', show: false },
        { num: 3, name: 'box3', show: false },
        { num: 4, name: 'box4', show: false },
    ])
    function addEvent() {
        boxList.push({ num: boxList.length + 1, name: 'box' + (boxList.length + 1), show: false })
    }
    function popEvent() {
        boxList.pop()
    }

</script>

<style scoped>
    .wraps {
        /* 平铺 */
        display: flex;
        /* 换行 */
        flex-wrap: wrap;
        /* 内容换行 */
        word-break: break-all;
        /* 边框 */
        border: 1px solid #ccc;

        .item {
            /* 边距 */
            margin: 10px;
        }
    }
</style>
