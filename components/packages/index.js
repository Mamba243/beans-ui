import bnButton from './button/index.js'
import bnInput from './input/index.js'
import bnTextArea from './textarea/index.js'
import bnTable from './table/index.js'
import bnMessage from './message/index.js'

const components = [bnButton, bnInput, bnTextArea, bnTable]
const install = app => {
  components.forEach((item) => {
    app.use(item)
  })
  app.config.globalProperties.$message = bnMessage
};

const BeansUI = {
  install,
}

export {bnButton, bnInput,bnTextArea,bnTable,bnMessage};
export default BeansUI;
