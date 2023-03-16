import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./route/router"
import loading from './directive/loading'


const app = createApp(App)
app.use(ElementPlus);
app.use(router);
app.directive("loading",loading);

app.mount('#app');
