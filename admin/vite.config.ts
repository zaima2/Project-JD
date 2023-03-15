import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/global.less')}";`,
        },
      }
    }
  },
  server:{
    proxy:{
      "/api": {
        target:"http://localhost:3200"
      }
    }
  }
})
