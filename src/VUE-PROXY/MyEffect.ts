
let activeEffect: Function;        // 定义一个全局变量，将闭包的变量都搜集起来
// 简单的模仿下副作用函数effect的实现
export const MyEffect = (fn: Function) => {
    // 来个闭包
    const _effect = function () {
        activeEffect = _effect;
        fn();
    }
    _effect()
}

// 使用weakMap，让其在没有对象引用时被GC回收，目的是减少内存的使用
const targetMap = new WeakMap();
// 模范依赖收集
export const track = (target: object, key: string | symbol) => {
    let desMap = targetMap.get(target);
    // 第一次是取不到的，要判断一下
    if (!desMap) {
        desMap = new Map();
        targetMap.set(target, desMap);
    }
    let deps = desMap.get(key)
    if (!deps) {
        deps = new Set();
        desMap.set(key, deps);
    }
    deps.add(activeEffect);
}
// 模仿依赖更新
export const trigger = (target: object, key: string | symbol) => {
    // 懒得写非空判断了，这里就写个意思
    const depsMap = targetMap.get(target);
    const deps = depsMap.get(key);
    // 取到依赖就可以做更新了
    deps.forEach((effect: Function) => effect())
}