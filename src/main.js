import { createApp } from 'vue'
import App from './App.vue'
import TexButton from './components/button.vue'
import './assets/fonts/font.less'
const app = createApp(App)

app.component(TexButton.name, TexButton)

app.mount('#app')
