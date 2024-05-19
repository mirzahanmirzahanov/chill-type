<script setup lang="ts">
import { useTitle } from '@vueuse/core'
useTitle('ChillType - home')

import { fetchQuote } from '@/entities/quote'
import { TextField } from '@/features/text-field'

const { requestData } = await fetchQuote()
</script>

<template>
  <div class="main">
    <TextField :text="requestData?.quote" />
    <p class="main-text">sdfsdf</p>
  </div>
</template>

<style lang="scss" scoped>
.main {
  &-text {
    @include text_big;
  }
}
</style>
