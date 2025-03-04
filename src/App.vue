<template>
    <el-button type="primary" @click="switchFlag = !switchFlag">切换组件</el-button>
    <!-- include是想缓存组件的名称，是vue文件的文件名哈，不是import进来的组件名称 -->
    <!-- exclude是不想缓存组件的名称 -->
    <!-- 其实还有max属性，表示缓存的最大数量，采用了lru算法 -->
    <!-- 然后使用了keep-alive的话，会添加2个生命周期onActivated和onDeactivated -->
    <!-- keep-alive组件的子组件必须是单文件组件，下面两个如果不用if-else的话会报错 -->
    <!-- <Avue /> -->
    <!-- <Bvue /> -->
    <keep-alive :include="['B', 'A']">
        <Avue v-if="switchFlag" />
        <Bvue v-else />
    </keep-alive>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import Avue from '@/components/study_keep-alive组件/A.vue'
    import Bvue from '@/components/study_keep-alive组件/B.vue'
    const switchFlag = ref(true)
</script>

<style scoped></style>
