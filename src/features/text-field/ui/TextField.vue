<script setup lang="ts">
defineProps({
  text: String
})
</script>

<template>
  <input type="text" name="" id="textField" />
  <label for="textField">{{ text }}</label>
</template>

<style lang="scss" scoped></style>
