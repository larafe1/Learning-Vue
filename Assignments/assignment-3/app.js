const app = Vue.createApp({
  data() {
    return {
      counterValue: 0
    };
  },
  watch: {
    counterValue(value) {
      setTimeout(() => {
        if (this.counterValue === value) this.counterValue = 0;
      }, 5000);
    }
  },
  computed: {
    currentResult() {
      if (this.counterValue < 37) {
        return 'Not there yet';
      } else if (this.counterValue === 37) {
        return this.counterValue;
      } else {
        return 'Too much!';
      }
    }
  },
  methods: {
    addFive() {
      this.counterValue += 5;
    },
    addOne() {
      this.counterValue++;
    }
  }
});

app.mount('#assignment');
