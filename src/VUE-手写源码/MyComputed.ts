import { MyEffect } from './MyEffect'

export const MyComputed = (getter: Function) => {
    // 原理很简单，就是把getter传给了effect函数，effect是个闭包函数，会执行传入的函数，并返回结果
    let _value = MyEffect(getter, {
        scheduler: () => { _dirty = true }
    })
    let cacheValue: any
    let _dirty = true       // 默认脏位为true，来实现缓存变量的功能

    class MyComputedRefImpl {
        get value() {
            if (_dirty) {
                cacheValue = _value()
                _dirty = false          // 如果只在这里修改，那么_dirty永远为false，后续如果有其他修改就不会触发重新计算了
                // 所以还需要改MyEffect中，添加scheduler调度
            }
            return cacheValue
        }
    }

    return new MyComputedRefImpl()
}