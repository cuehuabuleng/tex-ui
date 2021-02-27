import { createApp } from 'vue'
import App from './App.vue'

// 这个是2.x的包 但是改成了 3.0的包， 还是报错 可能兼容问题
import TexUI from 'tex-ui'
// import TexUI from '../packages/index.js'
import 'tex-ui/dist/tex-ui.css'

const app = createApp(App)
app.config.productionTip = false



app.use(TexUI)
app.mount('#app')
