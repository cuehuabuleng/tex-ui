import { createApp } from 'vue'
import App from './App.vue'
import TexButton from './components/button.vue'
import TexDialog from './components/dialog.vue'
import TexInput from './components/input.vue'
import TexSwitch from './components/switch.vue'
import TexRadio from './components/radio.vue'

import './assets/fonts/font.less'
const app = createApp(App)

app.component(TexButton.name, TexButton)
app.component(TexDialog.name, TexDialog)
app.component(TexInput.name, TexInput)
app.component(TexSwitch.name, TexSwitch)
app.component(TexRadio.name, TexRadio)


app.mount('#app')
