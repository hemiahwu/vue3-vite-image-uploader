<template>
  <form class="form-inline mt-2 mt-md-0">
    <input
      class="form-control"
      type="text"
      placeholder="Search in Drive"
      aria-label="Search"
      :value="modelValue"
      @keydown.enter.prevent="handleEnterKey"
      @keydown.esc.prevent="handleEscKey"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";

/**
 * 1. 要素 从MyFiles传值给SearchForm
 * 2. 桥梁 Navbar可以直接传值给SearchForm
 * 3. 内容显示在Navbar,数据的绑定放到MyFiles
 */

const emits = defineEmits(["update:modelValue"]);

const handleEnterKey = (event) => {
  emits("update:modelValue", event.target.value);
};

const handleEscKey = () => {
  emits("update:modelValue", "");
};

defineProps({
  modelValue: {
    type: String,
  },
});
</script>

<style>
</style>