// 定义事件总线类型
type BusType = {
    /**
     * 发布事件
     * @param event 事件名
     * @param args 事件参数
     */
    emit: (event: string, ...args: any[]) => void
    /**
     * 订阅事件
     * @param event 事件名
     * @param callback 事件回调
     */
    on: (event: string, callback: (...args: any[]) => void) => void
    /**
     * 取消订阅事件
     * @param event 事件名
     * @param callback 事件回调
     */
    off: (event: string, callback: (...args: any[]) => void) => void
}

// 订阅中心的key类型
type ParamsKey = string | number | symbol

// 定义订阅中心类型
type DispatchType = {
    [key: ParamsKey]: Array<Function>
}

// 创建一个事件总线类，其实就是发布订阅模式
class EventBus implements BusType {
    // 发布订阅其实还有一个订阅中心
    list: DispatchType
    constructor() {
        this.list = {}
    }

    emit(event: string, ...args: any[]) {
        // 发布事件
    }
    on(event: string, callback: (...args: any[]) => void) {
        // 订阅事件
    }
    off(event: string, callback: (...args: any[]) => void) {
        // 取消订阅事件
    }
}

// 导出事件总线实例
export const bus = new EventBus()