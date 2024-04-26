<script setup lang="ts">
import { useTitle } from '@vueuse/core'
useTitle('ChillType - home')
</script>

<template>
  <div class="main"></div>
</template>

<style lang="scss" scoped>
.main {
  &-text {
    @include text_big;
  }
}
</style>
