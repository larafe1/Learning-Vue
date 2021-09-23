<template>
  <the-header title="RememberMe" />
  <the-resources />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from '@/components/layouts/TheHeader.vue';
import TheResources from '@/components/TheResources.vue';

const App = defineComponent({
  name: 'App',
  components: { TheHeader, TheResources }
});

export default App;
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
