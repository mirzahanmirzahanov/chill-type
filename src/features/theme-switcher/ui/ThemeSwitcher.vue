<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

import { BaseButton } from '@/shared/ui/buttons'

const isDark = ref(useDark())
const themeTitle = computed((): string => (isDark.value ? 'dark' : 'light'))

const theme = useDark({
  selector: 'div#app',
  attribute: 'class',
  valueDark: 'dark'
})
const toggleTheme = useToggle(theme)
</script>

<template>
  <BaseButton class="theme-switcher" @click="toggleTheme()">
    {{ themeTitle }}
  </BaseButton>
</template>

<style lang="scss" scoped></style>
