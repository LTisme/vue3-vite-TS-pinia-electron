
interface Options {
    scheduler?: Function;
}
declare global {
    interface Function {
        // 扩展Function接口，增加一个options属性，其实也可以用extends来实现的
        options?: Options;
    }
}

let activeEffect: Function;        // 定义一个全局变量，将闭包的变量都搜集起来
// 简单的模仿下副作用函数effect的实现
export const MyEffect = (fn: Function, Options: Options) => {
    // 来个闭包
    let times = 0
    const _effect = function () {
        console.log(`这是第${++times}次执行`)
        activeEffect = _effect;
        let res = fn();
        // 这样的话，如果被执行的函数有返回值，就可以返回返回值了
        return res
    }
    _effect.options = Options;
    _effect()
    return _effect
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
    deps.forEach((effect: Function) => {
        if (effect?.options?.scheduler) {
            effect?.options?.scheduler?.()
        }
        effect()
    })
}