<template>
    <div class="mysass-box">
        <div>
            <Menu></Menu>
        </div>
        <div>
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script setup lang='ts'>

    import { ref } from 'vue';

    import Menu from './Menu/index.vue';
    import Header from './Header/index.vue';
    import Content from './Content/index.vue';

</script>

<style scoped>
    @include b(box) {
        @include bfc;
        display: flex;
    }
</style>