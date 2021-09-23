<template>
  <ul>
    <learning-resource
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LearningResource from './LearningResource.vue';

const StoredResource = defineComponent({
  components: { LearningResource },
  inject: ['resources']
});

export default StoredResource;
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
