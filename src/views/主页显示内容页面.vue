<template>

    <div>
        <el-timeline style="max-width: 600px">
            <el-timeline-item v-for="(activity, index) in timeLineActivities" :key="index"
                :timestamp="activity.timeStamp">
                <!-- 默认情况下：<router-link> 会自动渲染成一个 <a> 标签。添加 custom 后会禁止自动渲染 <a> 标签，必须配合 v-slot 自定义内容 -->
                <router-link :to="activity.routerTo" custom v-slot="{ navigate }">
                    <button @click="navigate">{{ activity.content }}</button>
                </router-link>
            </el-timeline-item>
        </el-timeline>
    </div>

</template>

<script setup lang='ts'>
    const timeLineActivities = [
        {
            routerTo: "/home",
            content: "vite工程自带的欢迎页面",
            timeStamp: "2025-02-11"
        },
        {
            routerTo: "/about",
            content: "很粗糙的about页面",
            timeStamp: "2025-02-11"
        },
        {
            routerTo: "/waterFall",
            content: "色块瀑布",
            timeStamp: "2025-02-21"
        },
        {
            routerTo: "/shuffle",
            content: "看洗牌",
            timeStamp: "2025-04-01"
        },
        {
            routerTo: "/dom&diff",
            content: "虚拟dom和diff算法",
            timeStamp: "2026-01-14"
        },
        {
            routerTo: "/charpter6",
            content: "第6章_Ref全家桶",
            timeStamp: "2026-01-14"
        },
    ]
</script>

<style scoped lang='scss'></style>