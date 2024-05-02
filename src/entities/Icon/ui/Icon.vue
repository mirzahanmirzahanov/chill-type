<script setup lang="ts">
import { computed } from 'vue'
import type { Component, ComputedRef } from 'vue'

import { SunIcon, MoonIcon } from '@/shared/ui/icons'

const icons: Record<string, Component> = {
  SunIcon,
  MoonIcon
}

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})

const currentThemeIcon: ComputedRef<Component> = computed(() => icons[props.name])
</script>

<template>
  <keep-alive>
    <Transition name="fade" mode="out-in">
      <component :is="currentThemeIcon" />
    </Transition>
  </keep-alive>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
