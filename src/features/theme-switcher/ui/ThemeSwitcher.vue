<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

import { BaseButton } from '@/shared/ui/buttons'
import { BaseIcon } from '@/entities/Icon'

const isDark = ref(useDark())
const iconName = computed(() => (isDark.value ? 'MoonIcon' : 'SunIcon'))

const theme = useDark({
  selector: 'div#app',
  attribute: 'class',
  valueDark: 'dark'
})
const toggleTheme = useToggle(theme)
</script>

<template>
  <BaseButton class="theme-switcher" @click="toggleTheme()">
    <BaseIcon :name="iconName" />
  </BaseButton>
</template>

<style lang="scss" scoped></style>
