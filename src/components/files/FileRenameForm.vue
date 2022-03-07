<template>
  <form @submit.prevent="handleSubmit">
    <input v-focus type="text" class="form-control" v-model="file.name" />
    <div class="d-flex flex-row-reverse mt-3">
      <button class="btn btn-primary" type="submit">确定</button>
      <button class="btn btn-outline-secondary me-2">取消</button>
    </div>
  </form>
</template>

<script setup>
import axios from "axios";
const props = defineProps({
  file: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["file-updated", "close"]);

const handleSubmit = async () => {
  try {
    const { data } = await axios.put(
      `http://localhost:3031/files/${props.file.id}`,
      props.file
    );

    emits("file-updated", data);
    emits("close");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
</style>