import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

// 初始化样式表
import '@/styles/index.scss'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
