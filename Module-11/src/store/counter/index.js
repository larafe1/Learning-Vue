import counterGetters from './getters';
import counterMutations from './mutations';
import counterActions from './actions';

const counterModule = {
  state() {
    return {
      counter: 0
    };
  },
  getters: counterGetters,
  mutations: counterMutations,
  // If we want to run some asynchronous code we have to use actions, because mutations doesn't allow asynchronous operations.
  actions: counterActions
};

export default counterModule;
