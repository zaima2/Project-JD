import { createApp } from 'vue'
import './global.less'
import App from './App.vue'
import "./mock"
import router from "./router/index";


const app = createApp(App);
app.use(router);
app.mount('#app');
