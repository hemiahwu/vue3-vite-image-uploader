<template>
  <div class="container py-3">
    <ActionsBar />
    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">文件</h6>
      <button class="rounded-button">
        <icon-arrow-up />
      </button>
    </div>
    <FilesList :files="files" />
  </div>
</template>

<script setup>
import ActionsBar from "../components/ActionsBar.vue";
import FilesList from "../components/files/FilesList.vue";
import axios from "axios";

import { ref, onMounted } from "vue";

const files = ref([]);

onMounted(async () => {
  const { data } = await axios.get("http://localhost:3031/files");
  files.value = data;
});
</script>

<style>
</style>