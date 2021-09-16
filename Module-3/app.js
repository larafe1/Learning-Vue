const app = Vue.createApp({
  data() {
    return {
      displayText: ''
    };
  },
  methods: {
    handleSetText() {
      this.displayText = this.$refs.inputText.value;
    }
  }
});

app.mount('#div__app-main');
