<template>
  <div class="vue-toast bottom-left toast-success" v-show="show">
    <div class="toast-icon">
      <IconSuccess />
    </div>
    <div class="toast-content">
      <div class="toast-title">{{ title }}</div>
      <div class="toast-message">{{ message }}</div>
    </div>
    <button class="toast-button" @click="$emit('hide')">&times;</button>
  </div>
</template>

<script setup>
import IconError from "./IconError.vue";
import IconWarning from "./IconWarning.vue";
import IconSuccess from "./IconSuccess.vue";
import { watch } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
  show: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "success",
    validator: function (value) {
      return ["success", "warning", "error"].indexOf(value) !== -1;
    },
  },
  position: {
    type: String,
    default: "bottom-left",
  },
});

const emits = defineEmits(["hide"]);
watch(
  () => props.show,
  () => {
    setTimeout(() => {
      emits("hide");
    }, 3000);
  }
);
</script>

<style scoped>
.vue-toast {
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 1px 5px 10px -5px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 99999;
}

.vue-toast::before {
  content: "";
  width: 4px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.toast-icon {
  box-sizing: content-box;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  padding: 7px;
}

.toast-success .toast-icon svg {
  fill: #ecfdf5;
  vertical-align: baseline;
}

.toast-success {
  background: #ecfdf5;
}

.toast-success::before,
.toast-success .toast-icon {
  background: #34d399;
}

.toast-warning .toast-icon svg {
  fill: #fffbeb;
}

.toast-warning {
  background: #fffbeb;
}

.toast-warning::before,
.toast-warning .toast-icon {
  background: #f59e0b;
}

.toast-error .toast-icon svg {
  fill: #f3f2f2;
}

.toast-error {
  background: #fef2f2;
}

.toast-error::before,
.toast-error .toast-icon {
  background: #ef4444;
}

.toast-content {
  flex-grow: 1;
  margin: 0 1rem;
}

.toast-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.toast-message {
  font-size: 14px;
  color: #6b7280;
}

.toast-button {
  width: 1.5em;
  height: 1.5em;
  border: none;
  padding: 0;
  color: #9ca3af;
  opacity: 0.7;
  background: transparent;
  cursor: pointer;
  font-size: 1.5em;
}

.toast-button:hover {
  opacity: 1;
}

.bottom-left {
  position: fixed;
  left: 20px;
  bottom: 20px;
}
.top-left {
  position: fixed;
  left: 20px;
  top: 20px;
}
.bottom-right {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.top-right {
  position: fixed;
  right: 20px;
  top: 20px;
}
.rtl-enter-active,
.rtl-leave-active,
.ltr-enter-active,
.ltr-leave-active {
  transition: all 0.5s ease-in-out;
}
.rtl-enter-from,
.rtl-leave-to {
  transform: translateX(100%);
}
.ltr-enter-from,
.ltr-leave-to {
  transform: translateX(-100%);
}
.rtl-leave-to,
.ltr-leave-to {
  opacity: 0;
}
</style>