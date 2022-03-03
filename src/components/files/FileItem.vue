<template>
  <div class="col-md-3">
    <div class="card mb-4">
      <img
        v-if="isValidImage"
        class="file-thumb"
        src="https://picsum.photos/id/1015/400/160"
      />
      <div v-else class="card-body text-center py-5">
        <component :is="iconFileType" height="4em" width="4em" />
      </div>
      <div class="card-footer">
        <div class="d-flex align-items-center">
          <component :is="iconFileType" />
          <span class="file-name">{{ file.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const iconFileType = computed(() => {
  const iconTypes = {
    "image/jpeg": "icon-type-image",
    "image/jpg": "icon-type-image",
    "image/png": "icon-type-image",
    "application/zip": "icon-type-zip",
    "application/msword": "icon-type-doc",
    "application/vnd.ms-excel": "icon-type-excel",
    "application/pdf": "icon-type-pdf",
    "video/mp4": "icon-type-video",
  };
  return iconTypes[props.file.mimeType]
    ? iconTypes[props.file.mimeType]
    : "icon-type-common";
});

const isValidImage = computed(() => {
  const imageMimeTypes = ["image/jpeg", "image/jpg", "image/png"];
  return imageMimeTypes.includes(props.file.mimeType) && !!props.file.url;
});

const props = defineProps({
  file: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>