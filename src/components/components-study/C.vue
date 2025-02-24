<template>

    <div class="com">
        为爱冲锋
    </div>

</template>

<script setup lang='ts'>

    import { ref } from 'vue';

    const count = ref(0);

</script>

<style scoped lang='scss'>
    .com {
        height: 300px;
        border: 2px solid #ccc;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>