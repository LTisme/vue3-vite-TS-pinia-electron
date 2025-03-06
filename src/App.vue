<template>
    <div class="content">
        <button @click="switchFlag = !switchFlag" type="button">切换</button>
        <Transition enter-active-class="animate__animated animate__rubberBand"
            leave-active-class="animate__animated animate__jello" @before-enter="EnterFrom" @enter="enter"
            @after-enter="EnterTo" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave"
            @after-leave="afterLeave" @leave-cancelled="leaveCancelled">
            <div v-if="switchFlag" class="box"></div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import "animate.css"

    import { ref } from 'vue'
    const switchFlag = ref(true)
    // transition 组件的生命周期
    function EnterFrom(el: Element) {
        console.log('进入之前，el是获取到的元素', el)
    }
    function enter(el: Element, done: Function) {
        console.log('过渡曲线', el)
        setTimeout(() => {
            done()
        }, 3000)
    }
    function EnterTo(el: Element) {
        console.log('进入之后', el)
    }
    function enterCancelled(el: Element) {
        console.log('过渡效果被打断', el)
    }
    function beforeLeave(el: Element) {
        console.log('离开之前', el)
    }
    function leave(el: Element, done: Function) {
        console.log('离开中', el)
        setTimeout(() => {
            done()
        }, 3000)
    }
    function afterLeave(el: Element) {
        console.log('离开之后', el)
    }
    function leaveCancelled(el: Element) {
        console.log('离开效果被打断', el)
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
