<template>

    <div>
        <form>
            <input type="text" v-model="Man1.name" placeholder="请输入姓名">
            <br>
            <input type="number" v-model="Man1.age" placeholder="请输入年龄">
            <br>
            <button type="submit" @click="submit">提交</button>
        </form>
    </div>


</template>

<script setup lang='ts'>

    import {ref, reactive, readonly} from 'vue'
    // ref支持所有的类型，reactive只支持对象类型，也就是引用类型 Array, Object, Map, Set 等
    type Man = {
        name: string,
        age: number,
    }

    const Man1 = reactive<Man>({
        name: '张三',
        age: 18,
    })
    // reactive的取值和赋值可以直接通过对象的属性来进行
    console.log(Man1.name)
    // 赋值
    Man1.name = '李四'
    console.log(Man1.name)
    
    // 而ref的取值和赋值需要通过.value来进行
    const Man2 = ref<Man>({
        name: '张五',
        age: 18,
    })
    console.log(Man2.value.name)
    // 赋值
    Man2.value.name = '王五'
    console.log(Man2.value.name)

    const submit = () => {
        console.log(Man1.name)
        console.log(Man2.value.name)
    }

    // readonly可以将一个对象变成只读的，不能通过赋值来改变对象的属性
    const Man3 = readonly(Man1)
    console.log(Man3.name)
    // 赋值会报错
    //Man3.name = '赵六'
    // readonly和shallowRef都会被ref影响，所以不能在一个作用域中一起用

</script>

<style scoped lang='scss'></style>