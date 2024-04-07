import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      // scss: {
      //   additionalData: `
      //     @import "@/assets/styles/css/_reset.css";
      //     @import "@/assets/styles/css/_global.css";
      //     @import "@/assets/styles/scss/_fonts.scss";
      //     @import "@/assets/styles/css/_colors.css";
      //     `
      //     // @import "@/assets/styles/scss/_break-point.scss";
      //     // @import "@/assets/styles/scss/_fonts.scss";
      // }
      scss: {
        additionalData: '@use "@/assets/styles/scss/index.scss" as *;'
      }
    }
  }
})
