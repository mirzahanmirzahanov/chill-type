<script setup lang="ts">
import { useTitle } from '@vueuse/core'
useTitle('ChillType - home')

import { fetchQuote } from '@/entities/quote'

const { requestData, status } = await fetchQuote('')

console.log(requestData, status)
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
