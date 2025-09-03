import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

// IMPORTS CORRETOS (COM O AJUSTE):
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes' // <-- 1. IMPORTE AS ROTAS GERADAS AQUI

import vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import './styles/main.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // <-- 2. PASSE AS ROTAS IMPORTADAS PARA A CONFIGURAÇÃO
})

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')
