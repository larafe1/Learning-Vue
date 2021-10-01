export default {
  getCounter(currentState) {
    return currentState.counter;
  },
  normalizedCounter(_, getters) {
    // const finalCounter = currentState.counter;
    // We can also take advantage of the logic used in another getter method.
    const finalCounter = getters.getCounter;
    if (finalCounter > 100) {
      return 0;
    }
    return finalCounter;
  }
};
