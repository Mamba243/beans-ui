<template>
  <button :class="isClass" :disabled="disabled" @click="handleClick" :style="styles">
    <i :class="isIconClass"></i>
    <span :style="styles">
      <slot></slot>
      </span>
  </button>
</template>

<script>
export default {
  name: "bnButton",
}
</script>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: "default"
  },
  customColor: {
    type: String,
    default: "",
  },
  disabled: Boolean,
  round: Boolean,
  loading: Boolean,
  icon: {
    type: String,
    default: ""
  },

})

const bnBtnDeaultStyle = {
  background: props.customColor,
  border: props.customColor,
  color: "#fff",
};

const isClass = computed(() => {
  return [
    'bn-button',
    `bn-button-${props.type}`,
    props.disabled ? 'bn-button-disabled' : '',
    props.round ? 'bn-button-round' : ''
  ]
})

const isIconClass = computed(() => {
  return [
    "iconfont",
    props.icon,
    props.loading ? props.icon == "bn-icon-loading" ? 'bn-button-loading' : "" : ""
  ]
})

const styles = computed(() => {
  return [
    props.customColor == ""
        ? {}
        : props.type == "default"
            ? {}
            : bnBtnDeaultStyle,
  ];
});

const emit = defineEmits(["click"])
const handleClick = (e) => {
  emit('click', e)
}

</script>

<style lang='scss' scoped>
@import '../../styles/button';
</style>
