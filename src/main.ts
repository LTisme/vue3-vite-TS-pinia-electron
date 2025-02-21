import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import CardVue from '@/components/components-study/Card.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('CardVue', CardVue)

app.mount('#app')
