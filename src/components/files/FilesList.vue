<template>
  <div class="row" @click="clearSelected">
    <FileItem
      v-for="(file, index) in files"
      :key="index"
      :file="file"
      @click.exact.stop="selectOne(file)"
      @click.meta.exact.stop="selectMultiple(file)"
      :class="{ 'selected-file': isSelected(file) }"
    />
  </div>
</template>

<script setup>
import FileItem from "./FileItem.vue";
import { reactive } from "vue";

const selectedItems = reactive(new Set());

const emits = defineEmits(["select-change"]);

const selectOne = (item) => {
  selectedItems.clear();
  selectedItems.add(item);
  emits("select-change", selectedItems);
};

const selectMultiple = (item) => {
  if (selectedItems.has(item)) {
    selectedItems.delete(item);
  } else {
    selectedItems.add(item);
  }
  emits("select-change", selectedItems);
};

const clearSelected = () => {
  selectedItems.clear();
  emits("select-change", selectedItems);
};

const isSelected = (item) => selectedItems.has(item);

defineProps({
  files: {
    type: Array,
    required: true,
  },
});
</script>

<style>
</style>