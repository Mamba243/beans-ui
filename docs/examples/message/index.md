# Message 消息提示

#### 常用于交互反馈提示场景

## 基本使用
message 消息提示基本使用示例
从顶部出现，3 秒后自动消失。

::: tip
你也可以通过导入message指令，直接调用`message`方法
:::

::: demo 获取组件实例的方式,调用`$message`方法,它会被显示为正文内容。
```vue

<template>
  <bn-button round @click="open">基本使用</bn-button>
</template>

<script>
import {defineComponent, getCurrentInstance} from 'vue';

//方式1： import Message from "../../../components/packages/message/index.js";

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const open = () => {
      instance.proxy.$message({ message: "默认消息提示！" });
      // Message({
      //   message:"默认消息提示！"
      // })
    }
    return {
      open
    }
  },
});
</script>
```
:::

## 不同状态
可根据 _Message_ 参数的 _type_ 来定义显示不同的状态。

::: demo 获取组件实例的方式,调用`$message`方法,它会被显示为正文内容。
```vue

<template>
  <bn-button round @click="open1">SUCCESS</bn-button>
  <bn-button round @click="open2">WARNING</bn-button>
  <bn-button round @click="open3">ERROR</bn-button>
  <bn-button round @click="open4">INFO</bn-button>

</template>

<script>
import {defineComponent, getCurrentInstance} from 'vue';


export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const open1 = () => {
      instance.proxy.$message({ 
        type:'success',
        message: "success消息提示！" 
      });
    }
    const open2 = () => {
      instance.proxy.$message({
        type:'warning',
        message: "warning消息提示！" 
      });
    }
    const open3 = () => {
      instance.proxy.$message({
        type:'error',
        message: "error消息提示！" 
      });
    }
    const open4 = () => {
      instance.proxy.$message({
        type:'info',
        message: "info消息提示！" 
      });
    }
    return {
      open1,open2,open3,open4
    }
  },
});
</script>
```
:::
## 自定义消失时间
默认为3秒后自动消失
::: demo 可根据 _Message_ 参数的 _duration_ 来定义显示不同的状态。
```vue

<template>
  <bn-button round @click="open1">1秒后消失</bn-button>
  <bn-button round @click="open2">5秒后消失</bn-button>
</template>

<script>
import {defineComponent, getCurrentInstance} from 'vue';


export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const open1 = () => {
      instance.proxy.$message({
        type:'success',
        message: "我将在1秒后消失！" ,
        duration:1000
      });
    }
    
    const open2 = () => {
      instance.proxy.$message({ 
        type:'success',
        message: "我将在5秒后消失！" ,
        duration:5000
      });
    }
    return {
      open1,open2
    }
  },
});
</script>
```
:::

## 拓展自定义配置
可根据不同场景自定义 _icon_ 图标。
::: demo 获取组件实例的方式,调用`$message`方法,它会被显示为正文内容。
```vue

<template>
  <bn-button round @click="open1">带图标消息提示</bn-button>
  <bn-button round @click="open2">带图标消息提示</bn-button>
</template>

<script>
import {defineComponent, getCurrentInstance} from 'vue';


export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const open1 = () => {
      instance.proxy.$message({
        type:'success',
        message: "success消息提示！",
        icon:'bn-icon-success-filling'
      });
    }
    
    const open2 = () => {
      instance.proxy.$message({ 
        type:'error',
        message: "error消息提示！",
        icon:'bn-icon-prompt-filling'
      });
    }
    return {
      open1,open2
    }
  },
});
</script>
```
:::


## Attributes 参数
