import { URL, fileURLToPath } from 'node:url'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    Components({
      dirs: ['src/layouts', 'src/components'],
      dts: true,
      directoryAsNamespace: true,
    }),
    AutoImport({
      dirs: ['src/composables', 'src/utils'],
      dts: true,
      imports: [
        'vue', '@vueuse/core', '@vueuse/head', 'vue-router',
        { axios: [['default', 'axios']] },
      ],
    }),
    Pages(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
  },
})
