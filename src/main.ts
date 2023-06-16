import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import './assets/main.css'
import 'virtual:uno.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)

app.mount('#app')

app.use(pinia)
