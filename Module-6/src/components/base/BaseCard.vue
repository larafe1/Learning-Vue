<template>
  <div>
    <!-- We can also check if we're receiving some content and only renders the header element if that content was provided  -->
    <header v-if="$slots.header">
      <!-- <slot name="header" />
      If we had a slot which receives no content, then this slot can render some default content, for example: -->
      <slot name="header">
        Some content that is gonna be visible if we don't provide some content
        to it.
      </slot>
    </header>
    <slot />
  </div>
</template>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
