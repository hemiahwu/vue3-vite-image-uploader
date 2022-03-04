import { createApp } from "vue";
import App from "./App.vue";
import icons from "./components/icons/all";
import Modal from "./components/Modal.vue";

const app = createApp(App);

for (const [key, value] of Object.entries(icons)) {
  app.component(key, value);
}

app.component("app-modal", Modal);

app.mount("#app");
