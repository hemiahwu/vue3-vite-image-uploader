<template>
  <div class="container py-3">
    <ActionsBar />
    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">文件</h6>
      <button class="rounded-button">
        <icon-arrow-up />
      </button>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="(item, index) in 6" :key="index">
        <div class="card mb-4">
          <img
            v-if="true"
            class="file-thumb"
            src="https://picsum.photos/id/1015/400/160"
          />
          <div v-else class="card-body text-center py-5">
            <icon-type-common height="4em" width="4em" />
          </div>
          <div class="card-footer">
            <div class="d-flex align-items-center">
              <icon-type-common />
              <span class="file-name">File 8.png</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ActionsBar from "../components/ActionsBar.vue";
</script>

<style>
</style>