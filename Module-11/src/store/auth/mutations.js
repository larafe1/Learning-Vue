export default {
  setIsAuthenticated(state, { value }) {
    if (typeof value !== 'boolean') return;
    state.isAuthenticated = value;
  }
};
