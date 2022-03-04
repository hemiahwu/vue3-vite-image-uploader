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
    <button class="btn btn-outline-primary">
      <icon-upload />
      上传文件
    </button>

    <div class="action-buttons" v-show="selectedItems.length">
      <button
        v-show="selectedItems.length === 1"
        type="button"
        class="rounded-button"
        title="Rename"
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
const props = defineProps({
  selectedItems: {
    type: Array,
  },
});
</script>
