<template>
  <div class="div__container">
    <!-- <button @click="handleSetCounterByOne">Increment</button>
    <button @click="handleSetCounterByTen">Increase 10</button>
    <button @click="handleSetCounterByOneAsync">
      Asynchronous Increment
    </button> -->
    <button @click="setCounterByOne">Increment</button>
    <button @click="setCounterByTen({ value: 10 })">Increase 10</button>
    <button @click="handleSetCounterByOneAsync">
      Asynchronous Increment
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    // handleSetCounterByOne() {
    //   this.$store.commit('setCounterByOne');
    // },
    // handleSetCounterByTen() {
    //   this.$store.commit('setCounterByTen', { value: 10 });
    // },
    // handleSetCounterByOneAsync() {
    //   this.$store.dispatch('setCounterByOneAsync');
    // }
    // Alternatively to mapGetters, we also have the mapMutations and the mapActions which triggers mutations and actions, in also, more accessible way.
    ...mapMutations(['setCounterByOne', 'setCounterByTen']),
    // ...mapActions(['setCounterByOneAsync']),
    // In case we're not happy with the names, we can set the name, just like we did before with the methods.
    ...mapActions({
      handleSetCounterByOneAsync: 'setCounterByOneAsync'
    })
  }
};
</script>

<style scoped>
.div__container {
  display: flex;
  justify-content: space-evenly;
}
</style>
