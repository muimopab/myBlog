export default {
    /**
     * 绑定事件
     * @param binding.value string class名称,class由外部定义
     * @param binding.value Object style属性集合
     * 如何需要设置元素width的值，需要使用！important，如不设置元素设置为则为实际的元素的宽度
     */
    bind (el, binding) {
        let offsetTop;
        window.onload = () => {
            let elWidth = el.offsetWidth; //获取页面第一次页面加载完成后的元素实际宽
            el.style["width"] = elWidth + "px"; //为元素设置属性width为初始的宽度。避免使用fixed定位后宽度发生变化
            offsetTop = el.offsetTop; // 获取页面加载完成后元素距离可是窗口顶部的距离
        }
        window.onscroll = () => {
            let scorllTop = document.documentElement.scrollTop; // 滚动条移动的距离
            let top = offsetTop - scorllTop;
            let handleAttr = (valueObj, handle) => {
                switch (handle) {
                    case "add":
                        for (let attr in valueObj) {
                            el.style[attr] = valueObj[attr];
                        }
                        el.style["z-index"] = 100;
                        break
                    case "delete":
                        for (let attr in valueObj) {
                            el.style[attr] = null;
                        }
                        el.style["z-index"] = null;
                        break
                }
            }
            switch (Object.prototype.toString.call(binding.value)) {//判断入参的结构
                case "[object Object]":
                    //入参type为Object 为元素设置自定义属性，自定义属性必须保存在对象格式
                    if (Object.isObject(binding.value))
                        top <= 0 && scorllTop != 0 ? handleAttr(binding.value, "add") : handleAttr(binding.value, "delete");
                    break
                case "[object String]":
                    // 入参type为Striing 为元素设置CLASS
                    top <= 0 && scorllTop != 0 ? el.classList.add(binding.value) : el.classList.remove(binding.value);
                    break
                case "[object Boolean]":
                    // 入参type 为 Boolean 为元素设置默认属性
                    if (binding.value) {
                        let obj = {
                            "position": "fixed",
                            "top": 0,
                            "z-index": "100"
                        }
                        top <= 0 && scorllTop != 0 ? handleAttr(obj, "add") : handleAttr(obj, "delete");
                    }
                    break
            }
        }
    }
}