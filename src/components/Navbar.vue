<template>
  <nav class="navbar navbar-light bg-white navbar-expand-lg border-bottom">
    <div class="container">
      <a class="navbar-brand" href="/"><strong>Vue</strong>图片上传</a>

      <SearchForm @handleValueQ="sendQToApp($event)" />
    </div>
  </nav>
</template>

<script setup>
import SearchForm from "./SearchForm.vue";

const emits = defineEmits(["handleValueQ"]);

const sendQToApp = (value) => {
  emits("handleValueQ", value);
};
</script>

<style>
</style>