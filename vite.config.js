import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetWarp } from '@warp-ds/uno'
import { classes } from '@warp-ds/css/component-classes/classes'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetWarp({ externalClasses: classes, skipResets: true })],
    }),
    vue(),
  ],
})
