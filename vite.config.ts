// vite.config.ts
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import VitePluginVuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: 'src/pages',
      dts: 'src/typed-router.d.ts',
    }),
    vue(),
    VitePluginVuetify({
      autoImport: true,
      styles: { configFile: 'src/styles/settings.scss' }, // caminho relativo (ok no Windows)
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { port: 5173, strictPort: true },
})
