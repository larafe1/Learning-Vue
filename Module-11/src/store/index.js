import { createStore } from 'vuex';

import authModule from './auth';
import counterModule from './counter';

// We could also split our store code by creating modules:
const store = createStore({
  modules: {
    auth: authModule,
    counter: counterModule
  }
});

export default store;
