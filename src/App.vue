<template>

    <div>
        <button @click="shuffleList">shuffle</button>
        <TransitionGroup class="wraps" tag="div">
            <div class="item" :key="item.id" v-for="item in list">
                {{ item.number }}
            </div>
        </TransitionGroup>
    </div>
    <div class="bem-test">goooood</div>

</template>

<script setup lang='ts'>

    import { ref } from 'vue';
    import _ from 'lodash';

    let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
        return {
            id: index,
            // 对9取余，得到1-9的循环数字
            number: (index % 9) + 1
        }
    }))

    function shuffleList() {
        list.value = _.shuffle(list.value)
    }
</script>

<style lang='scss'>
    .wraps {
        display: flex;
        flex-wrap: wrap;
        width: calc(25px * 9);

        .item {
            width: 25px;
            height: 25px;
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @include b(test) {
        color: red;
    }
</style>