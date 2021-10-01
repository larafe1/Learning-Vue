export default {
  setCounterByOne(currentState) {
    currentState.counter++;
  },
  setCounterByTen(currentState, payload) {
    currentState.counter += payload.value;
  }
};
