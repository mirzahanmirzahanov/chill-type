<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  background: var(--bg-color);
  padding: 10px;
  border-radius: var(--base-b-radius);
  color: var(--name-color);
}
</style>
