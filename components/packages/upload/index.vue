<template>
  <div>
    <input type="file" ref="refBtn" hidden @change="uploadChange" multiple="multiple" >
    <bn-button :type="bnType" @click="uploadFile" round v-if="targetType=='btn'">{{ label }}</bn-button>
    <div class="bn-upload-filelist" v-if="FileList.length>=0&&showFileList">
      <ul>
        <li v-for="(item,index) in FileList" :key="index">
          <div>
            <i class="file-icon iconfont bn-icon-file"></i>
            <span>{{ item.name }}</span>
            <i class="delete iconfont bn-icon-ashbin" @click="deleteFile(index)"></i>
          </div>
        </li>
      </ul>
    </div>
    <div :class="['area-box',{'bn-upload-area-active':activeFile}]" v-if="targetType=='box'" ref="refDiv">
      <div class="bn-upload-area" @click="uploadFile">
        <div class="bn-upload-area-label">
          <i class="iconfont bn-icon-add-bold"></i>
          <p v-if="label!=''">{{ labelText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bnUpload"
}
</script>
<script setup>
import {ref, reactive, onMounted} from "vue";

const emit = defineEmits(['change', 'update:fileList', 'beforeChange'])
const windowURL = typeof window !== 'undefined' ? window.URL || window.webkitURL : '';
const File = reactive([])
const FileList = reactive(props.fileList || [])
const refBtn = ref(null)
const refDiv = ref(null)
const labelText = ref("将文件拖拽到此处或点击选择文件")
const activeFile = ref(false)

const props = defineProps({
  label: String,
  multiple: String,
  drop: Boolean,
  targetType: {
    type: String,
    default: "btn"
  },
  bnType: {
    type: String,
    default: "primary"
  },
  fileList: {
    type: Array,
    default: () => {
      return []
    }
  },
  showFileList: Boolean,
  imgListShow: Boolean
})
const uploadFile = () => {
  emit('beforeChange')
  refBtn.value.click()
}

const uploadChange = (e) => {
  console.log(e.target.files)
  File.unshift(...e.target.files)
  FileList.unshift(...e.target.files)
  File.forEach((item, index) => {
    item.preImgUrl = windowURL.createObjectURL(item);
  })
  emit('change', File)
  emit('update:fileList', File)
}
const deleteFile = (index) => {
  File.splice(index, 1)
  FileList.splice(index, 1)
  emit('update:fileList', File)
}

onMounted(() => {
  if (props.drop && props.targetType == 'box') {
    let dropArea = refDiv.value
    //在元素被拖动时反复触发
    dropArea.addEventListener('drop', (e) => {
      e.stopPropagation()
      e.preventDefault()
      File.unshift(...e.dataTransfer.files)
      FileList.unshift(...e.dataTransfer.files)
      File.forEach((item, index) => {
        item.preImgUrl = windowURL.createObjectURL(item);
      })
      emit('change', File)
      emit('update:fileList', File)
      labelText.value = "将文件拖拽到此处或点击选择文件"
      activeFile.value = false
    }, false)
    //当被拖动元素没有放下就离开目的地元素时触发
    dropArea.addEventListener('dragleave', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = false
      labelText.value = "将文件拖拽到此处或点击选择文件"
    })
    //拖动后首次在进入某个控件内发生
    dropArea.addEventListener('dragenter', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = true
      // labelText.value = "松开鼠标完成"
      emit('beforeChange')
    })
    //进入之后，在移动拖动对象（鼠标）时发生
    dropArea.addEventListener('dragover', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = true
      labelText.value = "松开鼠标完成"
    })
  }
})

</script>

<style lang="scss" scoped>
@import "../../styles/upload.scss";
</style>
