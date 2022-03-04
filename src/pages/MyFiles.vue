<template>
  <div class="container py-3">
    <ActionsBar />
    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">文件</h6>
      <SortToggler @sort-change="hanleSortChange($event)" />
    </div>
    <teleport to="#search-form">
      <SearchForm v-model="query.q" />
    </teleport>
    <FilesList :files="files" />
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

// watch(
//   () => query._order,
//   async () => {
//     const { data } = await axios.get(
//       `http://localhost:3031/files?${new URLSearchParams(query)}`
//     );
//     files.value = data;
//   },
//   {
//     immediate: true,
//   }
// );

const hanleSortChange = (payload) => {
  // console.log(payload);
  query._sort = payload.column;
  query._order = payload.order;
};
</script>

<style>
</style>