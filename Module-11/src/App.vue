<template>
  <base-container title="Vuex" v-if="isAuthenticated">
    <the-counter />
    <change-counter />
  </base-container>
  <base-container title="Authentication">
    <user-auth />
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth
  },
  computed: {
    // Using mapGetters with namespaced modules:
    ...mapGetters('auth', ['isAuthenticated'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
