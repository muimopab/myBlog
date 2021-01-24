
export default {
    /**--------------防抖--------------**/
    debounce(fn, wait) {
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
    }

}