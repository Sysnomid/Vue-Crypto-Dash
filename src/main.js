import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta';

import VueDarkMode from "@growthbunker/vuedarkmode";

Vue.use(VueDarkMode);

Vue.use(VueDarkMode, {
  // Specify the theme to use: dark or light (dark by default).
  theme: "dark",

  components: [
    global
  ]
});

Vue.use(VueMeta);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
