<template>
    <div class="content">
        <button @click="switchFlag = !switchFlag" type="button">切换</button>
        <Transition name="fade">
            <div v-if="switchFlag" class="box"></div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const switchFlag = ref(true)
</script>

<style scoped>
    .box {
        width: 200px;
        height: 200px;
        background-color: red;
    }

    /* 定义过渡动画效果:from-进入动画效果,active-活动状态, to-离开动画效果 */
    .fade-enter-from {
        width: 0px;
        height: 0px;
        transform: rotate3d(1, 1, 0, 180deg);
    }

    .fade-enter-active {
        transition: all 1.5s ease;
    }

    .fade-enter-to {
        width: 200px;
        height: 200px;
    }

    .fade-leave-from {
        width: 200px;
        height: 200px;
        transform: rotate(360deg);
    }

    .fade-leave-active {
        transition: all 5s ease;
    }

    .fade-leave-to {
        width: 0px;
        height: 0px;
    }
</style>
