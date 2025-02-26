<template>

    <div class="sync">
        <div class="sync-content">
            <div><img :src="data.url" alt=""></div>
            <div class="sync-pop">
                <div>{{ data.name }}</div>
                <div>{{ data.age }}</div>
            </div>
        </div>
        <hr>
        <div>{{ data.desc }}</div>
    </div>

</template>

<script setup lang='ts'>

    import { ref } from 'vue';
    // 引入自定义的网络传输函数
    import { MyAxios } from '@/server/MyAxios';
    // 如何把一个组件变成一个异步组件的话，则需要用vue3的顶层await语法，这样让这个模块看起来像个巨大的async函数
    // 并且在script标签中引入一个异步函数，该函数返回一个Promise对象，该Promise对象返回一个组件对象。
    interface DataType {
        data: {
            name: string
            age: number
            url: string
            desc: string
        }
    }
    const { data } = await MyAxios.get<DataType>('./data.json')
    console.log(`data: ${data}`)
    // await后面的所有代码都会相当于带上async修饰符

    const count = ref(0);

</script>

<style scoped lang='scss'></style>