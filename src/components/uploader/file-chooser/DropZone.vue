<template>
  <div
    class="dropzone"
    @dragover.prevent="dragged = true"
    @dragleave.prevent="dragged = false"
    :class="{ 'dragged-over': dragged }"
    @drop.prevent="handleDrop"
  >
    <DropZoneMessage v-show="showMessage" />
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropZoneMessage from "./DropZoneMessage.vue";
const dragged = ref(false);

const emits = defineEmits(["files-dropped"]);
const handleDrop = (event) => {
  dragged.value = false;
  emits("files-dropped", event.dataTransfer.files);
};

defineProps({
  showMessage: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.dropzone {
  min-height: 80vh;
  border: 2px solid #fff;
  background: #fff;
  padding: 0.3em;
}
.dragged-over {
  background: #e8f0fe;
  border: 2px solid #4285f4;
}
</style>