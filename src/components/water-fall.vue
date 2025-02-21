<template>
    <div class="wraps">
        <div class="items"
            :style="{ height: item.height + 'px', top: item.top + 'px', left: item.left + 'px', background: item.background }"
            v-for="item in processedList"></div>
    </div>
</template>

<script setup lang='ts'>
    import { ref, reactive, onMounted } from 'vue'
    // 1、首先接收一下父组件传过来的色块数组
    const listFromParent = defineProps<{
        list: any[]
    }>()
    const processedList = reactive<any[]>([])
    const heightList: number[] = []                              // 色块的高度数组，用来计算布局
    // 2、涉及到dom操作，引入生命周期
    function init() {
        const width = 130                                        // 色块的宽度比样式的宽度稍微大一点，以便留出间隙
        const visibleWidth = document.body.clientWidth           // 获取可视区里的宽度，就是随着拖大拖小会变化的
        const columns = Math.floor(visibleWidth / width)         // 计算可视区能容纳多少列
        console.log(`visibleWidth:${visibleWidth}, columns:${columns}`)
        // 有了列数，就可以开始布局了
        // 遍历父组件传过来的数组，创建多个div元素，并设置样式
        let rowIndicator = 0
        for (let i = 0; i < listFromParent.list.length; i++) {
            // 先写第一行的色块
            if (i < columns) {
                listFromParent.list[i].left = i * width
                listFromParent.list[i].top = 20
                processedList.push(listFromParent.list[i])
                heightList.push(listFromParent.list[i].height + 20)
                console.log(`这是第${Math.ceil(i / columns) + 1}行`)
            } else {
                // 后面的色块，要根据前面已有的色块的高度来排列
                let minHeight = Math.min(...heightList)
                let minIndex = heightList.indexOf(minHeight)
                console.log(`这是第${Math.ceil(i / columns) + 1}行,minHeight:${minHeight}, minIndex:${minIndex}`)
                listFromParent.list[i].left = minIndex * width
                listFromParent.list[i].top = minHeight + 20
                processedList.push(listFromParent.list[i])
                heightList[minIndex] += listFromParent.list[i].height + 20
            }
        }

    }
    onMounted(() => {
        init()
    })
</script>

<style scoped>
    .wraps {
        /* 父级则采用relative定位 */
        position: relative;
        /* height: 100%; */

        .items {
            /* 每个item元素都是通过具体的值定位来实现的排列的，所以position设置为absolute */
            position: absolute;
            /* 宽度都固定 */
            width: 120px;
        }
    }
</style>