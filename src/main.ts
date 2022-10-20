import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { useTodoStore } from "./store/todoStore";

createApp(App).use(createPinia()).mount("#app");
useTodoStore();
