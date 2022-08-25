# Input 输入框
数据输入框类型，通过键盘输入字符

## 基本使用
input 的基本使用
::: demo 使用`v-model`实现input数据的双向绑定
```vue
    <template>
      <bn-input v-model='val' placeholder="基本使用" />
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
input 的禁用状态，通过`disabled`属性限制输入及操作
::: demo 使用`disabled`实现禁止编辑
```vue
    <template>
      <bn-input v-model='val' placeholder="禁用状态" disabled />
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

## 可清空数据
input 的 value 可快捷清空，通过`clearable`属性启用
::: demo 使用`clearable`实现点击清空
```vue
    <template>
      <bn-input v-model='val' placeholder="可清空数据" clearable/>
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
## 带图标
可使用 `leftIcon`来定义显示图标并确定显示的位置,icon以`bn-icon`开头，具体图标库查看icon页
::: tip
需要注意的是如果定义了右侧显示图标，那 `clearable`将不再起作用
:::
::: demo 使用`clearable`实现点击清空
```vue
    <template>
      <bn-input v-model='val' placeholder="带图标的输入框" icon="bn-icon-email"/>
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
## 密码类型
密码类型的输入框，可通过`showPassword`来启用是否开启显示密码
::: demo 使用`clearable`启用是否开启显示密码,`type`记得传递为`password`类型
```vue
    <template>
      <bn-input v-model='val' placeholder="请输入密码" type="password" showPassword/>
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
