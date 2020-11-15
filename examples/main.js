import { createApp } from 'vue'
import App from './App.vue'
import TexUI from '../packages'

const app = createApp(App)
app.use(TexUI)
app.mount('#app')
