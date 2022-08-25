<template>
  <div :class="isClass">
    <textarea :cols="cols" :rows="rows" :value="modelValue" :readonly="readonly" :maxlength="maxlength"
              :placeholder="placeholder" @input="input" @focus="focus" @blur="blur" :style="bnStyle" :disabled="disabled"></textarea>
    <div class="max-length-inline" v-if="maxlength">
      {{ n }}/{{ maxlength }}
    </div>
  </div>
</template>

<script>
export default {
  name: "bnTextArea"
}
</script>
<script setup>
import {computed, ref} from "vue";

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])
const props = defineProps({
  modelValue: String,
  disabled: Boolean,
  readonly: Boolean,
  maxlength: Number,
  placeholder: {
    type: String,
    default: "请输入"
  },
  rows: {
    type: Number,
    default: 4
  },
  cols: {
    type: Number,
    default: 50
  },
  resize: {
    type: Boolean,
    default: true
  },
  focusColor: {
    type: String,
    default: " #0e80eb"
  }
})

const n = ref(0);

const input = (e) => {
  n.value = e.target.value.length
  if (n.value >= props.maxlength) {
    n.value = props.maxlength;
  }
  // 监听输入，更新modelValue的值为e.target.value的值 --->bug修复：注意外层需要用v-model绑定才行
  emit('update:modelValue', e.target.value)
}

const focus = (e) => {
  emit('focus', e)
  bnStyle.value['border-color'] = props.focusColor
}


const blur = (e) => {
  emit('blur', e)
  bnStyle.value['border-color'] =''
}

const isClass = computed(() => {
  return [
    'bn-textarea',
    props.disabled ? 'bn-textarea-disabled' : ''
  ]
})

// const bnStyle = computed(() => {
//   return {
//     'resize': props.resize ? 'auto' : 'none',
//     'border-color': '',
//   }
// })
const bnStyle = ref({'resize':props.resize?'auto':'none','border-color':''})
</script>

<style lang="scss" scoped>
@import "../../styles/textarea.scss";
</style>
