let activeEffect; // 定义一个全局变量，将闭包的变量都搜集起来
// 简单的模仿下副作用函数effect的实现
export const MyEffect = (fn, Options) => {
    // 来个闭包
    let times = 0;
    const _effect = function () {
        console.log(`这是第${++times}次执行`);
        activeEffect = _effect;
        let res = fn();
        // 这样的话，如果被执行的函数有返回值，就可以返回返回值了
        return res;
    };
    _effect.options = Options;
    _effect();
    return _effect;
};
// 使用weakMap，让其在没有对象引用时被GC回收，目的是减少内存的使用
const targetMap = new WeakMap();
// 模范依赖收集
export const track = (target, key) => {
    let desMap = targetMap.get(target);
    // 第一次是取不到的，要判断一下
    if (!desMap) {
        desMap = new Map();
        targetMap.set(target, desMap);
    }
    let deps = desMap.get(key);
    if (!deps) {
        deps = new Set();
        desMap.set(key, deps);
    }
    deps.add(activeEffect);
};
// 模仿依赖更新
export const trigger = (target, key) => {
    // 懒得写非空判断了，这里就写个意思
    const depsMap = targetMap.get(target);
    const deps = depsMap.get(key);
    // 取到依赖就可以做更新了
    deps.forEach((effect) => {
        var _a, _b, _c;
        if ((_a = effect === null || effect === void 0 ? void 0 : effect.options) === null || _a === void 0 ? void 0 : _a.scheduler) {
            (_c = (_b = effect === null || effect === void 0 ? void 0 : effect.options) === null || _b === void 0 ? void 0 : _b.scheduler) === null || _c === void 0 ? void 0 : _c.call(_b);
        }
        effect();
    });
};
