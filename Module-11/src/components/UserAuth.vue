<template>
  <div class="div__container">
    <button v-if="!isAuthenticated" @click="handleLogin({ value: true })">
      Login
    </button>
    <button v-else @click="handleLogout({ value: false })">
      Logout
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    // Using mapGetters with namespaced modules:
    // ...mapGetters('auth', ['isAuthenticated'])
    // Using the default getter method:
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  },
  methods: {
    // Using mapMutations with namespaced modules:
    ...mapMutations('auth', {
      handleLogin: 'setIsAuthenticated',
      handleLogout: 'setIsAuthenticated'
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
