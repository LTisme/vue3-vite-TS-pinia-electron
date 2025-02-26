// 简单模仿axios封装

export const MyAxios = {
    get<T>(url: string): Promise<T> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open('GET', url)
            xhr.onreadystatechange = () => {
                // mdn官网文档有各个数字代表含义，此处代表请求操作已经完成。这意味着数据传输已经彻底完成或失败。
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        // 让它延迟一段时间，模拟网络延迟
                        setTimeout(() => {
                            resolve(JSON.parse(xhr.responseText))
                        }, 2000)
                    } else {
                        reject(xhr.statusText)
                    }
                }
            }
            // 如果有请求体就用xhr.send(data)，没有的话填null或者不填都行
            xhr.send(null)
        })
    }
}