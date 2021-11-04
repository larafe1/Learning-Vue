import Getters from "./getters";
import Mutations from "./mutations";
import Actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: Getters,
  mutations: Mutations,
  actions: Actions,
};
