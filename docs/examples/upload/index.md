# Upload 文件上传

常用于选择文件进行上传前的操作

## 基本使用

组件基本使用示例。
:::demo

```vue
<bn-upload label="上传文件" bn-type="primary"></bn-upload>
```

:::

## 显示已选文件

通过 _showFileList_ 启用。
:::demo
```vue
<bn-upload label="上传文件" bn-type="primary" showFileList></bn-upload>
```
:::

## 开启拖拽

通过设置 _drop_ 启用,并且设置 _targetType_ 为 _box_ 切换。
:::demo
```vue
<bn-upload label="上传文件" bn-type="primary" showFileList targetType="box" drop></bn-upload>
```
:::
## Attributes 参数

## Event 事件

