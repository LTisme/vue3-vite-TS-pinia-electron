<template>

    <div>
        <button class="bem-button" type="button" @click="$router.push('/')">返回主页</button>
        <!-- 路由内容将在这里渲染，被注释了的话就不会路由转发 -->
        <router-view></router-view>
    </div>

</template>

<style lang="scss">
<<<<<<< HEAD

    /** 将返回主页按钮固定在页面左上角 */
=======
>>>>>>> 700352379e0c7d0fcd3e208246fd6ec8ad522965
    @include b(button) {
        position: fixed;
        left: 20px;
        top: 20px;
        color: red;
    }
</style>