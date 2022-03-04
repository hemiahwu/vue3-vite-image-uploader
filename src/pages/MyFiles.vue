<template>
  <div class="container py-3">
    <ActionsBar :selectedItems="selectedItems" @remove="hadnleRemove" />
    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">文件</h6>
      <SortToggler @sort-change="hanleSortChange($event)" />
    </div>
    <teleport to="#search-form">
      <SearchForm v-model="query.q" />
    </teleport>
    <FilesList :files="files" @select-change="handleSelectChange($event)" />
  </div>
</template>

<script setup>
import ActionsBar from "../components/ActionsBar.vue";
import FilesList from "../components/files/FilesList.vue";
import SortToggler from "../components/SortToggler.vue";
import SearchForm from "../components/SearchForm.vue";
import axios from "axios";

import { ref, onMounted, reactive, watchEffect, watch } from "vue";

const files = ref([]);
const selectedItems = ref([]);

const query = reactive({
  _sort: "name",
  _order: "asc",
  q: "",
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
</script>

<style>
</style>