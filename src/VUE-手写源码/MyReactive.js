import { track, trigger } from './MyEffect.js';
const isObject = (target) => typeof target === 'object' && target !== null;
export const MyReactive = (target) => {
    // vue2的响应式是用Object.defineProperty来实现的，想要新增或修改属性很麻烦，性能也有问题
    // 而vue3的响应式是通过Proxy来实现的，通过Proxy可以拦截对象的操作，比如get、set、deleteProperty等，从而实现依赖收集和更新
    // 这里我们使用Proxy来实现一个reactive函数，用来将一个普通对象转化为响应式对象
    return new Proxy(target, {
        get(target, property, receiver) {
            // 使用Reflect来保证上下文的完整性，也就是如果发生了继承，也能够保证正确的this指向
            const res = Reflect.get(target, property, receiver);
            // 在这进行依赖收集
            track(target, property);
            // 加上递归判断
            if (isObject(res)) {
                return MyReactive(res);
            }
            return res;
        },
        set(target, property, newValue, receiver) {
            // 同样使用Reflect来保证上下文的完整性，Reflect的返回正好就是布尔值
            const res = Reflect.set(target, property, newValue, receiver);
            // 在这进行依赖更新
            trigger(target, property);
            return res;
        },
    });
};
