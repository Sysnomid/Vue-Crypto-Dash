import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import titleMixin from './mixins/titleMixin'

Vue.mixin(titleMixin)
Vue.use(VueMeta);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
