<template>

  <div>
    <div>
      <input v-model="keyword" placeholder="搜索" type="text">
    </div>
    <div style="margin-top: 20px;">
      <table border width="600px" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>物品名称</th>
            <th>数量</th>
            <th>价格</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in searchItem" :key="index">
            <td align="center">{{ item.name }}</td>
            <td align="center"><button @click="item.count > 1 ? item.count-- : ''">-</button>{{ item.count }}<button
                @click="item.count++">+</button></td>
            <td align="center">{{ item.price }}</td>
            <td align="center">{{ item.count * item.price }}</td>
            <td align="center"><button @click="del(index)">删除</button></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" align="right">总计：{{ MyFoolTotalPrice }}元</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>

</template>

<script setup lang='ts'>
  // computed计算属性的实际应用场景
  import { reactive, ref, computed } from 'vue';

  let $total = ref<number>(0)

  let keyword = ref<string>('')
  const searchItem = computed(() => {
    return items.filter((item: DataItem) => {
      return item.name.includes(keyword.value)
    })
  })
  interface DataItem {
    name: string;
    count: number;
    price: number;
  }
  const items = reactive<DataItem[]>([
    { name: '苹果', count: 10, price: 1.5 },
    { name: '香蕉', count: 20, price: 2.5 },
    { name: '橘子', count: 30, price: 3.5 },
    { name: '葡萄', count: 40, price: 4.5 },
    { name: '西瓜', count: 50, price: 5.5 },
  ]);
  // 总价一般用函数来实现
  // const totalPrice = () => {
  //   $total.value = items.reduce((prev: number, next: DataItem) => {
  //     return prev + (next.count * next.price);
  //   }, 0) // prev是上一个值的意思，故在此初始值为0
  // }
  // totalPrice()
  const totalPrice = computed(() => {
    // reduce用来求合计是比较好的方式
    return items.reduce((prev: number, next: DataItem) => {
      return prev + (next.count * next.price);
    }, 0) // prev是上一个值的意思，故在此初始值为0
  })

  const MyFoolTotalPrice = computed(() => {
    // 遍历对象，将对象中的count属性与price属性相乘，并返回总和
    let sum = 0
    for (let i = 0; i < items.length; i++) {
      sum += items[i].count * items[i].price
    }
    return sum
  })

  const del = (index: number) => {
    items.splice(index, 1)
  }

</script>

<style scoped></style>