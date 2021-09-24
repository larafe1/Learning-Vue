<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="handleActivate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="handleActivate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="handleActivate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
const RatingControl = {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    handleActivate(option) {
      this.$emit('update:modelValue', option);
    }
  }
};

export default RatingControl;
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
