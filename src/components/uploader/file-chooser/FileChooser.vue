<template>
  <button @click="handleClick" class="btn btn-outline-primary">
    <icon-upload />
    上传文件
    <input
      @change="$emit('files-choosen', $event.target.files)"
      type="file"
      multiple
      style="display: none"
      ref="file"
    />
  </button>
</template>

<script setup>
import { ref } from "vue";
const file = ref(null);
const handleClick = () => {
  file.value.click();
};
</script>

<style>
</style>