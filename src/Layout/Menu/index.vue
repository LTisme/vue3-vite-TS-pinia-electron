<template>

    <div class="mysass-menu">Menu</div>

</template>

<script setup lang='ts'>

    import { ref } from 'vue';

    const count = ref(0);

</script>

<style scoped>
    @include b(menu) {
        min-width: 300px;
        border-right: 1px solid #eee;
        height: 100%;
    }
</style>