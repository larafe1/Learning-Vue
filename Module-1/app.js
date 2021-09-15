const app = Vue.createApp({
  data() {
    return {
      renderTxt: '<h3>Learning Vue.js</h3>',
      vueLink: 'https://vuejs.org/',
      courseGoalA: 'Build apps with Vue!',
      courseGoalB: 'Master Vue!',
      randomNumber: 0,
      counter: 1,
      name: '',
      strInLowerCase: 'abcd',
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false
    };
  },
  watch: {
    counter(value) {
      if (value > 10) {
        this.counter = 0;
      }
    }
  },
  computed: {
    strToUpperCase() {
      return this.strInLowerCase.toUpperCase();
    }
  },
  methods: {
    getRandomTxt() {
      this.randomNumber = Math.random();
      if (this.randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    addCounter() {
      this.counter++;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = '';
    },
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected;
      }
    }
  }
});

app.mount('#div__app-main');

// We should use methods primarily for event binding or for data binding if we want them to re-execute when something in the page changes. Otherwise, we should use computed properties.
// Computed properties are reactive. Their output is cached, and automatically updates if anything used in the function changes. Changes flow out onto the page, without us needing to worry about when or why. watch is "imperative and repetitive". It runs when the thing you're watching changes, like a listener. You then are responsible for how the result is stored and used.
// Therefore, if we wanna run some code which maybe, but not necessarilly, updates some data property then watchers can be helpful. In the other hand, if we just wanna calculate some value dynamically, computed properties are your friend.
