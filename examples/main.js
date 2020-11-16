import { createApp } from 'vue'
import App from './App.vue'
import TexUI from 'tex-ui'
import 'tex-ui/dist/tex-ui.css'
const app = createApp(App)
app.config.productionTip = false


app.use(TexUI)
app.mount('#app')
