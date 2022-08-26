<template>
  <transition name="bn-message-fade">
    <div :class="bnClass"
         v-show="visible"
         :style="{
            top:top+'px'
         }"
    >
      <span><i :class="isIconClass"></i>{{ message }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "bnMessage"
}
</script>
<script setup>
import {computed, reactive, ref, toRefs} from "vue";

const state = reactive({
  visible: false,
  top: 0
})
const {visible, top} = toRefs(state);

const props = defineProps({
  type: {
    type: String,
    default: 'info'
  },
  message: {
    type: String,
    default: 'This is a message.'
  },
  icon: {
    type: String,
    default: ''
  }
})

const bnClass = computed(() => {
  return [
    'bn-message',
    props.type,

  ]
})
const isIconClass = computed(() => {
  return [
    'iconfont',
    props.icon,
  ]
})

let timer = null;
const setVisible = (isVisible) => {
  return new Promise(resolve => {
    state.visible = isVisible;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      resolve('');
    }, 300)
  })
}

const setTop = (top) => {
  state.top = top;
  return top;
}
//暴露出setVible方法供外部message函数调用 从而修改这里的过渡动画
defineExpose({
  setVisible,
  setTop,
  height: 40,
  margin: 20
});


</script>

<style lang="scss" scoped>
@import "../../styles/message.scss";
</style>
