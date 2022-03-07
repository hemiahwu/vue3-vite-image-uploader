import { createApp, nextTick } from "vue";
import App from "./App.vue";
import icons from "./components/icons/all";
import Modal from "./components/Modal.vue";

const app = createApp(App);

for (const [key, value] of Object.entries(icons)) {
  app.component(key, value);
}

app.component("app-modal", Modal);

// 全局指令 v-if v-for v-focus
app.directive("focus", {
  mounted(el) {
    nextTick(() => {
      const selectionEnd = el.value.split(".").slice(0, -1).join(".").length;
      el.setSelectionRange(0, selectionEnd);
    });

    el.focus();
  },
});

app.mount("#app");
