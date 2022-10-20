import Vue from "vue";
import App from "./App.vue";
import { GetTodoPlugin } from "./plugins/get-todo";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(GetTodoPlugin, { store });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
