<script setup lang="ts">
import { computed } from 'vue'
import type { Component, ComputedRef } from 'vue'
import { isDark, toggleTheme } from '@/entities/theme'

import { BaseButton } from '@/shared/ui/buttons'
import { SunIcon, MoonIcon } from '@/shared/ui/icons'

const icons: Record<string, Component> = {
  SunIcon,
  MoonIcon
}

const iconName: ComputedRef = computed((): string => (isDark.value ? 'MoonIcon' : 'SunIcon'))

const currentThemeIcon: ComputedRef<Component> = computed(() => icons[iconName.value])
</script>

<template>
  <BaseButton class="theme-switcher" @click="toggleTheme()">
    <Transition name="fade" mode="out-in">
      <component :is="currentThemeIcon" />
    </Transition>
  </BaseButton>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--base-tr);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
