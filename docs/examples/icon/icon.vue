<template>
  <p class="titlep">所有图标</p>

  <div class="iconListBox">
    <ul>
      <li v-for="(item,index) in IconListData" :key="index">
        <i :class="['iconfont' ,`${item.className}`]"></i>
        <span>{{item.className}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "icon"
}
</script>

<script setup>
import {ref} from 'vue'
import iconList from './iconfont.js'
const keywords = ref('')
const IconListData = ref(iconList)

</script>


<style lang="scss" scope>
@import "../../../components/styles/iconfont.scss";

.iconListBox{
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top:2vh;
  ul{
    margin:0;
    padding: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    li{
      list-style: none;
      width: 10.5vw;
      height: 140px;
      float: left;
      padding:1vw;
      box-sizing: border-box;
      text-align: center;
      transition: all .15s ease;
      cursor: pointer;
      border-radius: 4px;
      i{
        font-size:40px;
        color:#555;
        display: block;
        margin-top:1vh;
      }
      span{
        margin-top: 1vh;
        display: inline-block;
        font-size:.9vw;
        color:#555;
        margin-bottom:1vh;
      }
      &:hover{
        background-color:#0e80eb ;
        i{
          color:#fff
        }
        span{
          color:#fff
        }
      }
    }
  }
}
</style>
