<template>
  <div class="box">
    {{ label }}
  </div>
</template>

<style scoped>
  .box {
    background-color: red;
    border: 1px solid #e1e4e8;
    width: 300px;
    height: 300px;
  }
</style>

<script setup>
  const props = defineProps({
    label: String,
  })
</script>
