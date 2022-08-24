# Input 输入框
数据输入框类型，通过键盘输入字符

## 基本使用
input 的基本使用
::: demo 使用`type`、`round`，来定义 Button 的样式
```vue
    <template>
      <bn-input v-model='val' placeholder="asd" rightIcon='bn-icon-add' disabled/>
      <bn-input v-model='val' placeholder="asd" showPassword type="password"/>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("ddddd");      
        return {
          val
        }
      },
    });
    </script>
```
:::

## 禁用状态
input 的禁用状态，通过 _disabled_ 属性限制输入及操作

## 可清空数据
input 的 value 可快捷清空，通过 _clearable_ 属性启用
