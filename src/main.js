import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vueCookies from "vue-cookies";

Vue.use(vueCookies);
Vue.config.productionTip = false

Vue.$cookies.config("7d");

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
