<template>
  <div
    class="
      d-flex
      justify-content-between
      align-items-center
      border-bottom
      pt-2
      pb-3
    "
  >
    <FileChooser @files-choosen="$emit('files-choosen', $event)" />

    <div class="action-buttons" v-show="selectedItems.length">
      <button
        v-show="selectedItems.length === 1"
        type="button"
        class="rounded-button"
        title="Rename"
        @click="$emit('rename')"
      >
        <icon-pencil />
      </button>
      <button
        @click="$emit('remove')"
        type="button"
        class="rounded-button"
        title="Remove selected"
      >
        <icon-trash />
      </button>
    </div>
  </div>
</template>
<script setup>
import FileChooser from "../components/uploader/file-chooser/FileChooser.vue";
const props = defineProps({
  selectedItems: {
    type: Array,
  },
});
</script>
