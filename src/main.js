import Vue from 'vue'
import App from './App.vue'
import ImgPreview from '../lib/index.umd.min'
import '../lib/index.css'

Vue.prototype.$imgPreview = ImgPreview
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
