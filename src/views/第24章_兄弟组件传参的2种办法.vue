<template>
    <h1>演示方法一：通过父组件当桥梁，也就是将逻辑写到父组件中——这种办法虽然能用，但是麻烦，每次改逻辑需要去父组件改，耦合性高</h1>
    <brotherA @click="getMsg"/>
    <brotherB :params="msg"/>
    
    <h1>演示方法二：直接写eventBus，也就是事件总线（采用发布订阅模式），然后直接在A、B组件中引入，就可以直接传参了，无需在父组件中处理</h1>
    <!-- <brotherA/>
    <brotherB/> -->
</template>

<script setup lang='ts'>
// 要使用兄弟组件传参，肯定需要引入兄弟组件A和兄弟组件B
import brotherA from '@/components/兄弟组件传参相关组件/兄弟组件A.vue'
import brotherB from '@/components/兄弟组件传参相关组件/兄弟组件B.vue'
import { ref } from 'vue'
// 演示方法一：通过父组件当桥梁，也就是将逻辑写到父组件中——这种办法虽然能用，但是麻烦，每次改逻辑需要去父组件改，耦合性高
// 在兄弟A中定义一个defineEmits，也就是定义一个泄露，漏给父组件；
// 经由父组件逻辑处理后，再在兄弟B中定义一个defineProps，也就是定义一个接收，接收父组件的参数
const msg = ref('')

const getMsg = (obj: object) => {
    console.log(`父组件点击了兄弟组件A，而msg.value的值是：${msg.value}`)
    msg.value = "向B组件传参"
}

</script>

<style scoped lang='scss'>

</style>