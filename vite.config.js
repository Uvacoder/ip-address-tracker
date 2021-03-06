import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');

// https://vitejs.dev/config/
export default ({  }) => {
  return defineConfig({
    plugins: [vue()],
  
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@sass': path.resolve(__dirname, 'src', 'assets', 'sass'),
        '@images': path.resolve(__dirname, 'src', 'assets', 'images')
      }
    },
  
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@sass/variables";
            @import "@sass/mixins";
          `
        },
      },
    }
  })
}
