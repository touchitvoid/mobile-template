import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import postCssPxToViewport from 'postcss-px-to-viewport'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'

const timestamp = new Date().getTime()

// https://vitejs.dev/config/
export default defineConfig({
  base: '/packet', // 配合nginx配置
  plugins: [
    vue(),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    })
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].${timestamp}.js`,
        chunkFileNames: `assets/[name].${timestamp}.js`,
        assetFileNames: `assets/[name].${timestamp}.[ext]`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [postCssPxToViewport({
        viewportWidth: 375
      })]
    }
  }
})
