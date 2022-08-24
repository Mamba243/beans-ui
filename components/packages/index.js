import bnButton from './button/index.js'
import bnInput from './input/index.js'
import bnTextArea from './textarea/index.js'
import bnTable from './table/index.js'

const components = [bnButton, bnInput, bnTextArea, bnTable]
const install = app => {
  components.forEach((item) => {
    app.use(item)
  })
};

const BeanUI = {
  install,
}

export {bnButton, bnInput};
export default BeanUI;
