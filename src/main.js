import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入公样式
import './assets/css/base.css'
import './assets/js/font'

//引入路由的配置
import router from './plugins/router'

//引入异步交互插件axios的配置
import './plugins/axios';
// mui
// import './components/lib/mui/css/mui.css'
// import mui from './components/lib/mui/js/mui.min.js'
// import './components/lib/mui/fonts/mui.ttf'

//全局过滤器的配置
// import './filters'
// import axios from 'axios'
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
// axios.defaults.headers.post['Content-type'] = 'application/json'
// Vue.prototype.$axios = axios
// Vue.prototype.mui = mui
// Vue.component('fen-lei', fenlei)
// Vue.component('mei-wen', meiwen)
// Vue.use(ElementUI)
// Vue.use(Mint)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
