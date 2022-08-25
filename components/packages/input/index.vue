<template>
  <div :class="isClass">
    <input :type="inptype" :value="modelValue" @input="input" :placeholder="placeholder" :disabled="disabled"
           :readonly="readonly" @focus="focus" @blur="blur">
    <transition name="slide-fade">
      <i class="clearable-icon iconfont bn-icon-close" v-if="clearable&&modelValue!=''" @click="clear"></i>
    </transition>
    <i :class="['password-icon', 'iconfont',inptype=='text'?'bn-icon-browse':'bn-icon-eye-close']" v-if="showPassword"
       @click="showPwd(type)"></i>
    <i :class="['right-icon', 'iconfont',icon ]" v-if="icon!=''"></i>
  </div>
</template>

<script>
export default {
  name: "bnInput"
}
</script>
<script setup>
import {computed, ref} from 'vue'

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])
const props = defineProps({
  modelValue: String | Number,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  readonly: Boolean,
  type: {
    type: String,
    default: 'text'
  },
  icon: {
    type: String,
    default: ''
  }
})

const inptype = ref(props.type);

const isClass = computed(() => {
  return [
    'bn-input',
    props.disabled ? 'bn-input-disabled' : '',
    props.clearable ? 'bn-input-clearable' : '',
    props.icon ? 'bn-input-right-icon' : '',
    props.showPassword ? 'bn-input-password' : '',
  ]
})

const input = (e) => {
  emit('update:modelValue', e.target.value)
}
const focus = (e) => {
  emit('focus', e)
}
const blur = (e) => {
  emit('blur', e)
}

const clear = (e) => {
  emit('update:modelValue', "")
}

const showPwd = (e) => {
  if (inptype.value == 'text') {
    inptype.value = 'password'
  } else {
    inptype.value = 'text'
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/input.scss";
</style>
