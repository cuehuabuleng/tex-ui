import { createApp } from 'vue'
import App from './App.vue'
import TexButton from './components/button.vue'
import TexDialog from './components/dialog.vue'
import './assets/fonts/font.less'
const app = createApp(App)

app.component(TexButton.name, TexButton)
app.component(TexDialog.name, TexDialog)

app.mount('#app')
