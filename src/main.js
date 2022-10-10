import Vue from 'vue'
import App from './App.vue'
import './assets/style/global.scss'
import './style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
