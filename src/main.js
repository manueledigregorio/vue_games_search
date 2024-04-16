import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import it from './locale/it.json'


const app = createApp(App)

const i18n = createI18n({
  locale: 'it',
  fallbackLocale: 'it',
  messages:{
    en: en,
    it: it
  }
})
app.use(i18n);
app.use(router)
app.mount('#app')
