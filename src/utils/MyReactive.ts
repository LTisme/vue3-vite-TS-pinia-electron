// 手写reactive的源码实现
export const MyReactive = <T extends object>(target: T) => {
    // 1. 先判断是否是对象
    if (typeof target !== 'object' || target === null) {
        return target
    }
    // 2. 代理对象
    const proxy = new Proxy(target, {
        get(target, key, receiver) {
            // 若使用this，在复杂处理中容易错乱
            // 故使用Reflect也就是反射，能正确的获取到相应的上下文
            // receiver被设计的可以正确的指向代理对象
            const res = Reflect.get(target, key, receiver)
            // 3. 依赖收集
            track(target, key)
            return res
        },
        set(target, key, value, receiver) {
            const res = Reflect.set(target, key, value, receiver)
            // 4. 触发更新
            trigger(target, key)
            return res
        }
        // 还可以删除或者拦截方法的apply等，先不写，就写get、set
    })
    return proxy
}

// 3. 副作用函数
// 为什么叫副作用函数？
// 因为它会产生副作用，比如修改了全局变量、修改了DOM等
let activeEffect: Function | null = null
export const effect = (fn: Function) => {
    /**
     * fn，这个匿名函数的作用是把依赖收集起来，
     * 当依赖的属性发生变化时，就会触发这个匿名函数并执行
     */

    // 做一个闭包，把fn包裹起来
    // 这样就可以在fn中使用到代理对象的属性
    // 而不会影响到全局变量
    const effectFn = () => {
        activeEffect = effectFn
        fn()
    }
    // 立即执行一次，收集依赖
    effectFn()
}

// 需要一个全局变量，比如targetMap
const targetMap = new WeakMap()
// 先定义数据接口，再写闭包
export const track = (target: object, key: string | symbol) => {
    if (!activeEffect) {
        return
    }
    let depsMap = targetMap.get(target)
    // 若没有依赖收集过，就初始化一个空的Map
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }

    let deps = depsMap.get(key)
    if (!deps) {
        deps = new Set()
        depsMap.set(key, deps)
    }
    deps.add(activeEffect)
}

export const trigger = (target: object, key: string | symbol) => {
    const depsMap = targetMap.get(target)
    if (!depsMap) {
        return
    }
    const deps = depsMap.get(key)
    if (!deps) {
        return
    }
    deps.forEach((effectFn: Function) => {
        effectFn()
    })
}