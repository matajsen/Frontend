import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery'
import 'jquery-datetimepicker'

createApp(App).use(router).mount('#app')
