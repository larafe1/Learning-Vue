const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedUserInput: ''
    };
  },
  methods: {
    handleShowAlert() {
      alert('Alert triggered!');
    },
    setUserInput(event) {
      this.userInput = event.target.value;
    },
    setConfirmUserInput() {
      this.confirmedUserInput = this.userInput;
    }
  }
});

app.mount('#assignment');
