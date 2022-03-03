import { createApp } from "vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import i18n from "./locales/i18n";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "http://localhost/";
axios.defaults.headers = {
  Accept: "application/json",
};

import App from "@/App.vue";
import NavBar from "@/components/Navbar.vue";
import FooTer from "@/components/Footer.vue";
import CenTre from "@/components/Centre.vue";
import InformaTion from "@/components/Information.vue";

var app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAxios, axios);

app.component("NavBar", NavBar);
app.component("CenTre", CenTre);
app.component("FooTer", FooTer);
app.component("InformaTion", InformaTion);

app.use(i18n);

app.mount("#app");

export default {
  name: "Navbar",
  components: {
    CenTre,
  },
};
