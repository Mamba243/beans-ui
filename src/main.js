import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import BeanUI from "../components/packages/index";

const app = createApp(App)
app.use(BeanUI)
app.mount('#app')
