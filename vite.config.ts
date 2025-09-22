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
}

export default defineConfig(config)