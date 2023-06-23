import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './router'
import 'vue-toast-notification/dist/theme-bootstrap.css'

import '@unocss/reset/tailwind.css'
import './assets/main.css'
import 'virtual:uno.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    // const head = createHead()
    const pinia = createPinia()

    if (isClient)
      pinia.state.value = (initialState.pinia) || {}

    else
      initialState.pinia = pinia.state.value

    app
      .use(pinia)
  },
)
