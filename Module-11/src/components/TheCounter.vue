<template>
  <div class="div__container">
    <!-- <h3>{{ counter }}</h3> -->
    <h3>{{ getCounter }}</h3>
    <h3>{{ normalizedCounter }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.getCounter;
    // },
    // normalizedCounter() {
    //   return this.$store.getters.normalizedCounter;
    // }
    // We can also use mapGetters to get the values we want in a more accessible way.
    ...mapGetters(['getCounter', 'normalizedCounter'])
  }
};
</script>

<style scoped>
.div__container {
  display: flex;
  justify-content: space-evenly;
}
</style>
