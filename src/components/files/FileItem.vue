<template>
  <div class="col-md-3">
    <div class="card mb-4">
      <img
        v-if="file.url"
        class="file-thumb"
        src="https://picsum.photos/id/1015/400/160"
      />
      <div v-else class="card-body text-center py-5">
        <icon-type-common height="4em" width="4em" />
      </div>
      <div class="card-footer">
        <div class="d-flex align-items-center">
          <icon-type-common />
          <span class="file-name">{{ file.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  file: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>