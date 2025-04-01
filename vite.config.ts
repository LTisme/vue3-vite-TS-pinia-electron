import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 配置全局的bem架构的scss配置
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/assets/bem.scss";`
        // @import在未来会弃用，官方建议使用@use
        // 使用*就可以在所有vue文件中使用bem样式，而无需手动导入了
        additionalData: `@use "@/assets/bem.scss" as *;`
      }
    }
  }
})
