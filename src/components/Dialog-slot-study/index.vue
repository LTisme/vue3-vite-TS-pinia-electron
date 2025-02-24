<template>

    <div>
        <header class="header">
            <!-- 演示具名插槽 -->
            <slot name="header"></slot>
        </header>
        <main class="main">
            <!-- 演示如何通过slot给父组件传值 -->
            <div v-for="item in dialogSlot">
                <!-- 演示匿名插槽，也就是默认的插槽 -->
                <slot :customedVarFromChildSlot="item"></slot>
            </div>
        </main>
        <footer class="footer">
            <!-- 演示具名插槽 -->
            <slot name="footer"></slot>
        </footer>
    </div>

</template>

<script setup lang='ts'>

    import { ref, reactive } from 'vue';

    const count = ref(0);

    // 演示插槽的作用域

    type DialogSlotType = {
        name: string;
        age: number;
    }
    const dialogSlot = reactive<DialogSlotType[]>([
        { name: '小满被插入了', age: 20 },
        { name: '小明被插入了', age: 25 },
        { name: '小红被插入了', age: 30 },
        { name: '小刚被插入了', age: 35 },
    ])

</script>

<style scoped lang='scss'>
    .header {
        height: 200px;
        background: red;
        color: white;
    }

    .main {
        height: 500px;
        background: green;
        color: white;
    }

    .footer {
        height: 100px;
        background: blue;
        color: white;
    }
</style>