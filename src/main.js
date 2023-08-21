import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css';
import { createPinia } from 'pinia'
const pinia = createPinia()
App.use(pinia)
createApp(App).mount('#app')
