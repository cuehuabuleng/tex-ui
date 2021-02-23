// 整个包的入口文件
import TexButton from './button.vue'
import TexDialog from './dialog.vue'
import TexInput from './input.vue'
import TexSwitch from './switch.vue'
import TexRadio from './radio.vue'
import TexRadiogroup from './radio-group.vue'
import TexCheckbox from './checkbox.vue'
import TexCheckgroup from './checkbox-group.vue'
import TexForm from './form.vue'
import TexFormItem from './form-item.vue'
import './fonts/font.less'
const components = [
    TexButton,
    TexDialog,
    TexInput,
    TexSwitch,
    TexRadio,
    TexRadiogroup,
    TexCheckbox,
    TexCheckgroup,
    TexForm,
    TexFormItem
]
const install = function(vue){
    // 注册所以的组件
    components.forEach((item) => {
        vue.component(item.name, item)
        // console.log(vue.component, item)
    })
}

//判断是否是直接引入vue文件，如果是，就不用调用Vue.use()
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install
}

// 组件的按需引入
// https://juejin.cn/post/6844904158181474311