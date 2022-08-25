
# Textarea 文本域
用于段落文本的填写或输入

## 基本使用
Textarea 文本域基本使用。
::: demo 使用`bn-textArea`引入,`rows`设定行数`cols`设定列数
```vue
    <template>
      <bn-textArea :rows="10" :cols="80" v-model="val"></bn-textArea>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("");      
        return {
          val
        }
      },
    });
    </script>
```
:::

## 禁用状态
通过 _disabled_ 启用。
::: demo 使用`disabled`属性实现禁用
```vue
    <template>
      <bn-textArea :rows="10" :cols="80" v-model="val" disabled></bn-textArea>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("设定了disabled属性，则文本域中的文字不可编辑");      
        return {
          val
        }
      },
    });
    </script>
```
:::

## 限制长度
通过 _maxlength_ 启用。
::: demo 使用`maxlength`属性限制输入长度
```vue
    <template>
      <bn-textArea :rows="10" :cols="80" v-model="val" :maxlength="10"></bn-textArea>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("");      
        return {
          val
        }
      },
    });
    </script>
```
:::
## 自定义 Focus 颜色
通过 _focusColor_ 属性自定义 input 在获取焦点后的颜色。
::: demo 使用`maxlength`属性限制输入长度
```vue
    <template>
      <bn-textArea :rows="10" :cols="80" v-model="val" focusColor='red'></bn-textArea>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("");      
        return {
          val
        }
      },
    });
    </script>
```
:::
## Attributes 参数

## Event 事件
