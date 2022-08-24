

# Button 按钮
网页常用 button 按钮，常用于响应一个事件或处理某个逻辑
## 基本使用
button 按钮的基本使用
::: demo 使用`type`、`round`，来定义 Button 的样式
```vue
    <template>
      <bn-button>默认按钮</bn-button>
      <bn-button type="primary">主要按钮</bn-button>
      <bn-button type="success">成功按钮</bn-button>
      <bn-button type="warning">警告按钮</bn-button>
      <bn-button type="error">危险按钮</bn-button>
      <bn-button type="info">信息按钮</bn-button>
      <bn-button round>默认按钮</bn-button>
      <bn-button type="primary" round>主要按钮</bn-button>
      <bn-button type="success" round>成功按钮</bn-button>
      <bn-button type="warning" round>警告按钮</bn-button>
      <bn-button type="error" round>危险按钮</bn-button>
      <bn-button type="info" round>信息按钮</bn-button>
    </template>
```
:::
## 禁用状态
按钮不可操作的状态——通过 _disabled_ 属性设置实现
::: demo 按钮不可操作的状态——通过 `disabled` 属性设置实现
```vue
    <template>
      <bn-button disabled>禁用按钮</bn-button>
      <bn-button type="primary" disabled>禁用按钮</bn-button>
      <bn-button type="success" disabled>禁用按钮</bn-button>
      <bn-button type="warning" disabled>禁用按钮</bn-button>
      <bn-button type="error" disabled>禁用按钮</bn-button>
      <bn-button type="info" disabled>禁用按钮</bn-button>
      <bn-button round disabled>禁用按钮</bn-button>
      <bn-button type="primary" round disabled>禁用按钮</bn-button>
      <bn-button type="success" round disabled>禁用按钮</bn-button>
      <bn-button type="warning" round disabled>禁用按钮</bn-button>
      <bn-button type="error" round disabled>禁用按钮</bn-button>
      <bn-button type="info" round disabled>禁用按钮</bn-button>
    </template>
```
:::
## 图标按钮
带图标类型的按钮——通过 icon 属性设置实现并确定 icon 出现的位置，icon以`bn-icon`开头，具体图标库查看icon页
::: demo 通过 icon 属性设置实现并确定 `icon` 出现的位置
```vue
    <template>
      <bn-button type="primary"  icon="bn-icon-add">添加</bn-button>
      <bn-button type="success" icon="bn-icon-upload">上传</bn-button>
      <bn-button type="warning" icon="bn-icon-delete">删除</bn-button>
      <bn-button type="info" icon="bn-icon-check-item">选择</bn-button>
      <bn-button type="error" icon="bn-icon-fabulous" round>点赞</bn-button>
    </template>
```
:::

## 自定义颜色
自定义颜色的按钮类型——通过设置 type 为 `custom` 和 `customColor` 属性设置实现。 

::: tip
需要注意的是 type 为 default、dashed、text 类型的按钮不支持自定义
:::

::: demo 通过设置 type 为 `custom` 和 `customColor` 属性设置实现。
```vue
    <template>
      <bn-button type="custom" customColor="#9935f5">自定义颜色</bn-button>
      <bn-button type="custom" customColor="#1ba7dd">自定义颜色</bn-button>
      <bn-button type="custom" customColor="#d33cc7">自定义颜色</bn-button>
      <bn-button type="custom" customColor="#9935f5" round>自定义颜色</bn-button>
      <bn-button type="custom" customColor="#d67295" round>自定义颜色</bn-button>
    </template>
```
:::

## Attributes 参数
 <bn-table :showHeader="true" :options="options"></bn-table>

<script setup lang="ts">
    import {reactive} from "vue";
    const state = reactive({
      options: {
        fileds: [
          {field: "attr", title: "参数", align: "center"},
          {field: "type", title: "类型", align: "center"},
          {field: "red", title: "说明", align: "center", width: "350px"},
          {field: "sel", title: "可选值", align: "center"},
          {field: "def", title: "默认值", align: "center"},
        ],
        datas: [
          {
            attr: "options",
            type: "Object",
            red: "表格数据,fileds 和 datas,fileds作为整体约束（具体见下方API），datas作为数据定义",
            sel: "——",
            def: "{fileds:[], datas:[]}",
          },
          {
            attr: "size",
            type: "String",
            red: "表格尺寸大小",
            sel: "default / small / mini",
            def: "default",
          },
          {
            attr: "showHeader",
            type: "Boolean",
            red: "是否显示表头",
            sel: "true / false",
            def: "true",
          },
          {
            attr: "headStyle",
            type: "Object",
            red: "自定义表头样式",
            sel: "——",
            def: "——",
          },
          {
            attr: "rowStyle",
            type: "Object",
            red: "自定义表格内容区域的样式",
            sel: "——",
            def: "——",
          },
          {
            attr: "customClass",
            type: "String",
            red: "自定义表格组件整体的Class类名",
            sel: "——",
            def: "——",
          },
        ],
      },
    });
    const {options} = state;
</script>
