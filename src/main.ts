import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification'
import App from './App.vue'
import router from './router'
import 'vue-toast-notification/dist/theme-bootstrap.css'

import '@unocss/reset/tailwind.css'
import './assets/main.css'
import 'virtual:uno.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(ToastPlugin)
app.mount('#app')
app.use(pinia)
