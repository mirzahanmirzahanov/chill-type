import '@/assets/styles/css/_reset.css'
import '@/assets/styles/css/_global.css'
import '@/assets/styles/scss/_fonts.scss'
import '@/assets/styles/css/_colors.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
