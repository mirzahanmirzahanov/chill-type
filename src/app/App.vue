<script setup lang="ts">
import './styles/index.scss'

import { DefaultLayout } from '@/shared/ui/layouts'
import { Header } from '@/widgets/header'
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>
      <Header />
    </template>
    <template v-slot:default>
      <RouterView />
    </template>
    <template v-slot:footer>
      <footer></footer>
    </template>
  </DefaultLayout>
</template>

<style lang="scss"></style>
