<template>
  <form class="form-inline mt-2 mt-md-0">
    <input
      class="form-control"
      type="text"
      placeholder="Search in Drive"
      aria-label="Search"
      v-model="q"
      @keydown.enter.prevent="handleEnterKey"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";

const q = ref("hello world");

const emits = defineEmits(["handleValueQ"]);

const handleEnterKey = () => {
  emits("handleValueQ", q.value);
};
</script>

<style>
</style>