<script setup lang="ts">
import { useTitle } from '@vueuse/core'
useTitle('ChillType - home')

import { fetchQuote } from '@/entities/quote'
import { TextField } from '@/features/text-field'

const { data } = await fetchQuote()
</script>

<template>
  <div class="main">
    <TextField :quote="data.quote" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  &-text {
    @include text_big;
  }
}
</style>
