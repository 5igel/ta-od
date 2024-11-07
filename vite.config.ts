import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    proxy: {
      "/api": {
        target: 'https://swapi.dev/',
        changeOrigin: true,
        secure: false,
      },
    },
    cors: false,
  },
  preview: {
    proxy: {
      "/api": {
        target: 'https://swapi.dev/',
        changeOrigin: true,
        secure: false,
      },
    },
    cors: false,
  },
})
