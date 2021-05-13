import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

const myApp = createApp(App);
myApp.use(AOS.init());
myApp.use(router);
myApp.mount("#app");
