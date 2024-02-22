import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'lib',
    chunkSizeWarningLimit: 2000,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'EncyHello',
      fileName: 'ency-vxe-table-pro',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
