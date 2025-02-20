<template>

    <div>子集</div>
    <div>字符串值:{{ fromParentVal }}</div>
    <div>数组值:{{ fromParentArr }}</div>
    <div>
        <button @click="sendToParent">给父组件传值</button>
    </div>

</template>

<script setup lang='ts'>

    /************************************/
    /*     子组件接收父组件的传值     */
    /************************************/
    // 1、不使用TS语言就可以做到的接收父组件传过来的值
    // 子组件在接收的时候用defineProps来接收
    // 接收一个名为传过来的变量的对象
    // const prop = defineProps({
    //     messenger: {
    //         type: String,
    //         default: '987654321'     // 默认值缺省值
    //     }
    // })
    // // 不能直接用messenger，需要用一个参数接收defineProps，才可以使用
    // console.log(prop.messenger); // 打印接收到的变量的值

    // 2、ts的写法，直接写泛型就好
    // defineProps<{
    //     fromParentVal: string,
    //     fromParentArr: number[]
    // }>()
    // 2.1、ts特有的定义默认值，但只能接收defineProps
    withDefaults(defineProps<{
        fromParentVal: string,
        fromParentArr: number[]
    }>(), {
        fromParentArr: () => [0, 0, 0, 0, 0, 0],
        fromParentVal: () => '123456789'
    })

    /************************************/
    /*     子组件给父组件传值     */
    /************************************/
    // 1、给父组件传值使用defineEmits的第1种方法
    // const emit = defineEmits(['valToParent'])
    // 2、给父组件传值使用defineEmits的第2种方法，就是直接写在泛型里
    const emit = defineEmits<{
        (e: 'valToParent', val: string): void
        // (e: 'valToParent', val: string): void
        // (e: 'valToParent', val: string): void
    }>()

    const sendToParent = () => {
        // 给父组件传值
        emit('valToParent', '我是子组件传给父组件的值')
    }

    /************************************/
    /*     子组件给父组件暴露方法或属性等     */
    /************************************/
    // 1、暴露方法给父组件，但父组件需要用ref来调用实例才能收到
    defineExpose({
        exposedName: "宇树机器人",
        exposedMethod: () => {
            console.log("我是子组件主动暴露给父组件的方法")
        }
    })

</script>

<style scoped></style>