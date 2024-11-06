import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3060,
    proxy: {
      '/blog': 'http://localhost:3080'
    }
  }
})
