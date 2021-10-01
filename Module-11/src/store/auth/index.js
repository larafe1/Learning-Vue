import authGetters from './getters';
import authMutations from './mutations';

const authModule = {
  // To avoid code clashing when our modules is merged into the store object we can add another property to our modules called namespaced. Let's see that in action in our auth module:
  namespaced: true,
  state() {
    return {
      isAuthenticated: false
    };
  },
  getters: authGetters,
  mutations: authMutations
};

export default authModule;
