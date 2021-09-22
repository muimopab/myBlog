
export default {
    /**--------------防抖--------------**/
    debounce (fn, wait) {
        let inDebounce
        return function () {
            const vm = this;
            const param = arguments;
            if (inDebounce) {
                clearTimeout(inDebounce)
            }
            inDebounce = setTimeout(() => {
                fn.apply(vm, param)
            }, wait)
        }
    },
    /**--------------深拷贝--------------**/
    deepClone (oldObj) {
        // 判断入参为数组还是对象
        if (!oldObj || typeof oldObj !== "object") return // 判断入参是否为引用类型并且非null
        let newObj = Array.isArray(oldObj) ? [] : {};
        for (let key in oldObj) {
            if (oldObj[key] && typeof oldObj[key] === 'object') {
                newObj[key] = this.deepClone(oldObj[key])
            } else {
                newObj[key] = oldObj[key]
            }
        }
        return newObj
    },
    /**--------------获取sessionStorage键值--------------**/
    getSession (item) {
        return JSON.parse(sessionStorage.getItem(item))
    }




}