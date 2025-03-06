<template>
    <div class="content">
        <button @click="switchFlag = !switchFlag" type="button">切换</button>
        <Transition @before-enter="EnterFrom" @enter="enter" @leave="leave">
            <div v-if="switchFlag" class="box"></div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import "animate.css"
    import gsap from "gsap"

    import { ref } from 'vue'
    const switchFlag = ref(true)
    // transition 组件的生命周期
    function EnterFrom(el: Element) {
        console.log('进入之前，el是获取到的元素', el)
        gsap.set(el, {
            width: 0,
            height: 0,
        })
    }
    function enter(el: Element, done: gsap.Callback) {
        console.log('过渡曲线', el)
        gsap.to(el, {
            width: 200,
            height: 200,
            onComplete: done,
        })
    }
    function leave(el: Element, done: gsap.Callback) {
        console.log('离开中', el)
        gsap.to(el, {
            width: 0,
            height: 0,
            onComplete: done,
        })
    }
</script>

<style scoped>
    .box {
        width: 200px;
        height: 200px;
        background-color: red;
    }

    /* 定义过渡动画效果:from-进入动画效果,active-活动状态, to-离开动画效果 */
    /* .fade-enter-from {
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
    } */
    /* 除了上面的写法还有直接在标签里写属性，然后可以自定义名的方式，这种方式可以用来结合第三方库一起使用 */
    /* 这里结合animate.css来实现好看的动画效果 */

</style>
