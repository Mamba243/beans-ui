import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import BeansUI from "../components/packages/index";

const app = createApp(App)
app.use(BeansUI)
app.mount('#app')
