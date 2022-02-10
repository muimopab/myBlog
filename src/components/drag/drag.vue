<template>
<div id="dragGroup" class="drag" :style="{'flex-direction':direction}" @dragover="dragover">
    <div class="dragItem" v-for="(item) in formData" :key="item.id" :class="{
           'forbidden-childe-pointer-events':forbiddenChildePointerEvents 
       }" @dragstart="dragstart" @dragover="dragover" @dragenter.stop="dragenter" @dragleave.stop="dragleave" draggable="true">
        <slot name="itemBody" :row="item"></slot>
    </div>
</div>
</template>

<script>
export default {
    props: {
        formData: { // 父组件传入的数据
            type: Array,
            default () {
                return []
            }
        },
        direction: { // 子元素排列方式
            type: String,
            default: "row"
        }
    },
    data() {
        return {
            forbiddenChildePointerEvents: false
        }
    },
    methods: {
        dragover(ev) {
            ev.preventDefault(); // 取消事件的默认动作。因为web浏览器默认不允许进行放置操作的，所以需要手动设置
        },
        dragstart(ev) {},
        dragenter(ev) {
            this.forbiddenChildePointerEvents = true
            ev.stopPropagation()
            console.log(ev)
        },
        dragleave(ev) {
            this.forbiddenChildePointerEvents = false

            ev.stopPropagation()
            console.log(ev)

        }
    }

}
</script>

<style lang="scss" scoped>
#dragGroup {
    display: flex;

    &.forbidden-childe-pointer-events * {
        pointer-events: none;
    }
}
</style>
