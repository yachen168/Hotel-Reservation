import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/bootstrapVue";
import "./plugins/fontawesome";

import "./assets/scss/main.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
