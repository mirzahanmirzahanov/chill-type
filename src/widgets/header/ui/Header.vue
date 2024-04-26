<template>
  <header class="header">
    <p class="header__title">ChillType</p>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  &__title {
    @include h1;
    padding: 5px 10px;
    color: var(--name-color);
    border-radius: var(--base-b-radius);
    background: var(--bg-color);
  }
}
</style>
