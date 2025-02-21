<template>

    <!-- 加一个事件，点击某个节点的时候触发，用.stop来阻止事件的自动冒泡；用$event来获取事件对象，可以获取很多页面上的信息 -->
    <div @click.stop="clickItem(item, $event)" class="tree" v-for="item in props.data">
        <input type="checkbox" v-model="item.checked"><span>{{ item.name }}</span>
        <!-- 开始对该组件进行递归 -->
        <!-- 递归组件的名称在vue3中，自己可以直接用组件的文件名 -->
        <!-- 如果有递归的条件，则像父组件一样继续传值，直到递归结束 -->
        <Tree v-if="item?.children?.length" :data="item.children" />
        <!-- 如果想自定义组件名而不是用文件名，则可以再起一个script然后里面export default {name: '自定义组件名'}即可，官网称声明模块的具名导出 -->
    </div>

</template>

<script setup lang='ts'>

    import { ref } from 'vue';
    // 造一点数据
    interface Tree {
        name: string;
        checked: boolean;
        children?: Tree[];
    }
    // 子组件是用defineProps来接收父组件传过来的参数
    const props = defineProps<{
        data?: Tree[];
    }>()
    console.log(`子组件:`, props.data!)

    const clickItem = (item: Tree, e: any) => {
        console.log(`点击了:`, item, e)
    }

</script>
<style scoped lang='scss'>
    .tree {
        margin-left: 20px;
    }
</style>