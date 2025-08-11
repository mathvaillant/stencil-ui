import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ComponentLibrary } from "stencil-ui-vue-library";

const app = createApp(App);

app.use(ComponentLibrary);
app.use(router);
app.mount("#app");
