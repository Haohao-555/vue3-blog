import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

// 初始化样式
import '@/styles/index.scss'
// 暗黑模式样式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义暗黑模式样式
import '@/styles/theme/element-dark.scss'
// 滚动条样式
import '@/styles/scroball.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
