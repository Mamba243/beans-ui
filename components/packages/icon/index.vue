<template>
  <p class="titlep">所有图标</p>
  <div class="">
<!--    <m-input v-model="keywords" leftIcon="m-icon-search" placeholder="输入图标关键词进行搜索" @input="search"></m-input>-->
  </div>
  <div class="iconListBox">
    <ul>
      <li v-for="(item,index) in IconListData" :key="index" >
        <i class="iconfont" :class="item.className"></i>
        <span>{{ item.className }}</span>
      </li>
    </ul>
  </div>
<!--  <input type="text" id="inputCopy" style="opacity: 0;">-->
</template>

<script>
export default {
  name: "index"
}
</script>

<script setup>
import {ref,reactive} from 'vue'
import iconList from '@/const/iconList.js'
const IconListData = ref(iconList)
</script>

<style scoped>
@import "../../styles/icon.scss";
</style>
