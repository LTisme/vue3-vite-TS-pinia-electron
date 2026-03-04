<template>
    <div>
        <h2>虚拟dom和Diff算法</h2>
        <ul>
            <!-- key的作用是作为唯一值，方便后端的数据传输，比如ID -->
            <li v-for="item in arr" :key="item">{{ item }}</li>
        </ul>
    </div>

</template>

<script setup lang="ts">
    const arr:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    arr.splice(2, 0, 'Dom'); // 在索引2的位置插入Dom元素
</script>