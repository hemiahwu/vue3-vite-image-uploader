<template>
  <div class="row">
    <FileItem v-for="(file, index) in files" :key="index" :file="file" />
  </div>
</template>

<script setup>
import FileItem from "./FileItem.vue";
defineProps({
  files: {
    type: Array,
    required: true,
  },
});
</script>

<style>
</style>