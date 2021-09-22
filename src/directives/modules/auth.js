import { Message } from "element-ui";

export default {
    bind (el, binding,vnode) {
        console.log(vnode)
        let btnNameList = binding.value;
        let btnResource = JSON.parse(sessionStorage.getItem("btnResource"))
        if (btnNameList && Array.isArray(btnNameList)) {
            let reslut = btnNameList.every(item => {
                if (btnResource) {
                    return btnResource.hasOwnProperty(item)
                }
            })
            if (reslut) {
                el.classList.remove('btn-disabled')
            } else {
                el.classList.add('btn-disabled')
                let maskDiv = document.createElement('DIV')
                maskDiv.classList.add("btn-mask")
                window.addEventListener('load',(e)=>{
                    let leftBorderWidth=window.getComputedStyle(el)["border-left-width"]
                    let rightBorderWidth=window.getComputedStyle(el)["border-right-width"]
                    let topBorderWidth=window.getComputedStyle(el)["border-right-width"]
                    let bottomBorderWidth=window.getComputedStyle(el)["border-right-width"]
                    maskDiv.style.left=`-${leftBorderWidth}`;
                    maskDiv.style.right=`-${rightBorderWidth}`;
                    maskDiv.style.top=`-${topBorderWidth}`;
                    maskDiv.style.bottom=`-${bottomBorderWidth}`;
                })
                
                el.appendChild(maskDiv)
                maskDiv.addEventListener('click', (e) => {
                    e.stopPropagation();
                    Message.error("您没有使用权限！")
                })
            }
        } else {

        }
    }
}