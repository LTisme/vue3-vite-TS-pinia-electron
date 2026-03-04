<template>

    <div>非引用对象: {{ Man1 }}</div>
    <div>Ref: {{ Man2 }}</div>
    <div>shallowRef: {{ Man3 }}</div>
    <div>customRef: {{ Man4 }}</div>
    <hr>
    <button @click="change">只影响Ref的修改</button><br>
    <button @click="change1">影响Ref，同时影响shallowRef的修改</button><br>
    <button @click="change2">只影响shallowRef的修改</button><br>
    <button @click="change3">只影响customRef的修改</button><br>


</template>

<script setup lang='ts'>

    import {
        ref,            // 包装成响应式对象
        isRef,          // 判断是否为ref包装的对象
        shallowRef,     // 浅包装成响应式对象
        triggerRef,     // Ref的收集器，会影响shallowRef的更新
        customRef,      // 自定义ref，也是浅层的响应式对象，需要直接对他的value进行修改才行
    } from 'vue';

    const count = ref(0);

    type Person = {
        name: string,
        age: number
    };


    function MyRef<T>(value: T) {
        // customRef需要return一个对象，对象里要求实现get和set方法
        // 添加一个防抖功能，防止过快过多的请求一个api
        let timeout: number | undefined  = undefined; // 初始化 timeout
        return customRef<T>((track, trigger) => {
            return {
                get() {
                    track(); // 收集依赖
                    return value;
                },
                set(newValue: T) {
                    // 防抖逻辑
                    clearTimeout(timeout); // 清除之前的定时器
                    timeout = setTimeout(() => {
                        console.log("防抖逻辑执行了");
                        value = newValue;
                        trigger(); // 触发更新
                        timeout = undefined; // 重置 timeout
                    }, 1000); // 1秒防抖
                }
            };
        });
    }

    const Man1 = { name: '张三', age: 18 };
    const Man2 = ref<Person>({ name: '李四', age: 18 });
    const Man3 = shallowRef<Person>({ name: '王五', age: 18 });
    const Man4 = MyRef<Person>({ name: '赵六', age: 21 });

    const change = (obj: Object) => {
        Man1.age++;
        Man2.value.age++;
        console.log(Man1.age);
        console.log(Man2.value.age);
        console.log(isRef(Man1)); // false
        console.log(isRef(Man2)); // true
    };
    const change1 = (obj: Object) => {
        Man2.value.age++;
        // triggerRef(Man3); // 这个和上面这个用法二选一就行了，都可以的
        // shallowRef不能和Ref一起混用，一旦混用就会导致shallowRef变成ref，造成视图的更新
        Man3.value.name = "我被trigger影响了";
        console.log(Man3.value.age);

    };
    const change2 = (obj: Object) => {
        // 这样改没用，它只能改最浅一层
        // Man3.value.age++;
        // 也就是这样改才有用
        Man3.value = { name: '王五', age: 55 }
        console.log(Man3.value.age);
    };
    const change3 = (obj: Object) => {
        // 这样改没用，它只能改最浅一层
        // Man3.value.age++;
        // 也就是这样改才有用
        Man4.value = { name: '赵六', age: 99 };
        console.log(Man4.value.age);
    };

</script>

<style scoped lang='scss'></style>