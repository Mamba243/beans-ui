import types from "./types.js";
import bnMessage from './index.vue'
import {createApp, ref, watch} from "vue";


const messageArr = ref([]);

const Message = (options) => {
  const messageApp = createApp(bnMessage, options);
  showMessage(messageApp, options.duration)
}
// 实现 .调用
Object.values(types).forEach(type => {
  Message[type] = (options) => {
    options.type = type;
    return Message(options);
  }
})

// Message 调用 showMessage才能显示动态显示组件 showMessage中的代码用于动态挂载
function showMessage(app, duration) {
  const oFrag = document.createDocumentFragment();
  const vm = app.mount(oFrag);
  messageArr.value.push(vm);
  document.body.appendChild(oFrag);
  setTop(vm);
  vm.setVisible(true);
  watch(messageArr, () => {
    setTop(vm)
  });
  hideMessage(app, vm, duration)
}

function hideMessage(app, vm, duration) {
  vm.timer = setTimeout(async () => {
    await vm.setVisible(false);
    app.unmount();
    messageArr.value = messageArr.value.filter(item => item!== vm);
    clearTimeout(vm.timer);
    vm.timer = null;
  }, duration || 3000);
}

function setTop(vm) {
  const {setTop, height, margin} = vm;
  const curIndex = messageArr.value.findIndex(item => item === vm);
  // console.log(curIndex);
  setTop((margin * curIndex + 1) + height * curIndex);
}


export default Message;
