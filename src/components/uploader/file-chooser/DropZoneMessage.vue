<template>
  <div class="dropzone-message-wrapper">
    <div class="dropzone-message">
      <icon-cloud-arrow-up class="dropzone-icon" />
      <p class="main-message">将文件拖拽至此</p>
      <p class="alt-message">或者点击"上传文件"按钮</p>
    </div>
  </div>
</template>

<style scoped>
.dropzone-message-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 4rem;
}

.dropzone-message {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.04);
  user-select: none;
}

.dropzone-icon {
  font-size: 5em;
  color: #999;
  margin-bottom: 0.3rem;
}

.main-message {
  font-size: 16px;
  margin-bottom: 6px;
}

.alt-message {
  font-size: 12px;
}

.main-message,
.alt-message {
  color: #909090;
}
</style>