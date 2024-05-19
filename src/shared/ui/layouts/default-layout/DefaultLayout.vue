<template>
  <div class="default-layout">
    <slot name="header"></slot>
    <main class="default-layout__main">
      <Suspense>
        <slot></slot>
      </Suspense>
    </main>
    <slot name="footer"></slot>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  &__main {
    flex: 1 0 auto;
  }
}
</style>
