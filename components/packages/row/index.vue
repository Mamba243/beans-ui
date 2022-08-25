<template>
  <div class="bn-row-default">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bnRow"
}
</script>
<script setup>

</script>

<style lang="scss" scoped>
.bn-row-default {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
