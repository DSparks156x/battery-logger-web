
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  base: '/battery-logger-web/'
}

export default defineConfig(config) 