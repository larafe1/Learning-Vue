export default {
  setCounterByOneAsync(context) {
    setTimeout(() => {
      context.commit('setCounterByOne');
    }, 2000);
  }
};
