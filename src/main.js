import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css';
import { createPinia } from 'pinia'

const app = createApp(App);

//add global filters to convert temperature from celsius to Fahrenheit 
app.config.globalProperties.$filters = {
    formatToFahrenheit(celsuisValue) {
        return Math.round((celsuisValue * 9 / 5) + 32);
    }
}
app.use(createPinia()).mount('#app')
