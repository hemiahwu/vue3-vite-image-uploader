<template>
  <div class="container py-3">
    <ActionsBar
      :selectedItems="selectedItems"
      @remove="hadnleRemove"
      @rename="showModal = true"
      @files-choosen="choosenFiles = $event"
    />
    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">文件</h6>
      <SortToggler @sort-change="hanleSortChange($event)" />
    </div>
    <teleport to="#search-form">
      <SearchForm v-model="query.q" />
    </teleport>
    <FilesList :files="files" @select-change="handleSelectChange($event)" />
    <app-modal
      title="文件重命名"
      :show="showModal && selectedItems.length === 1"
      @hide="showModal = false"
    >
      <FileRenameForm
        :file="selectedItems[0]"
        @file-updated="handleFileUpdate($event)"
        @close="showModal = false"
      />
    </app-modal>
    <app-toast
      :show="toast.show"
      :message="toast.message"
      type="success"
      position="bottom-left"
      @hide="toast.show = false"
    />

    <div v-if="choosenFiles.length">上传中...</div>
  </div>
</template>

<script setup>
import ActionsBar from "../components/ActionsBar.vue";
import FilesList from "../components/files/FilesList.vue";
import SortToggler from "../components/SortToggler.vue";
import SearchForm from "../components/SearchForm.vue";
import FileRenameForm from "../components/files/FileRenameForm.vue";
import axios from "axios";

import { ref, onMounted, reactive, watchEffect, watch } from "vue";

const files = ref([]);
const selectedItems = ref([]);
const showModal = ref(false);
const choosenFiles = ref([]);

watch(
  () => choosenFiles.value,
  () => {
    console.log(choosenFiles.value);
  }
);

const query = reactive({
  _sort: "name",
  _order: "asc",
  q: "",
});

const toast = reactive({
  show: false,
  message: "",
});

watchEffect(async () => {
  const { data } = await axios.get(
    `http://localhost:3031/files?${new URLSearchParams(query)}`
  );
  files.value = data;
});

const hanleSortChange = (payload) => {
  query._sort = payload.column;
  query._order = payload.order;
};

const handleSelectChange = (items) => {
  selectedItems.value = Array.from(items);
};

const hadnleRemove = () => {
  if (confirm("Are you sure?")) {
    selectedItems.value.forEach((item) => removeItem(item, files));
    toast.show = true;
    toast.message = "您选择的文件已删除";
  }
};

const removeItem = async (item, files) => {
  console.log(item);
  try {
    const response = await axios.delete(
      `http://localhost:3031/files/${item.id}`
    );
    // console.log(response);
    if (response.status === 200) {
      const index = files.value.findIndex((file) => file.id === item.id);
      files.value.splice(index, 1);
    }
  } catch (error) {
    console.log(error);
  }
};

const handleFileUpdate = (file) => {
  const oldFile = selectedItems.value[0];
  const index = files.value.findIndex((file) => file.id === oldFile.id);
  files.value.splice(index, 1, file);

  toast.show = true;
  toast.message = "文件名修改成功";
};
</script>

<style>
</style>