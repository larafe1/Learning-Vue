const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      isParagraphHidden: false,
      paragraphVisibility: 'visible',
      inputParagraphBackColor: ''
    };
  },
  watch: {
    userInput(value) {
      if (value === 'user1' || value === 'user2') {
        return value;
      }
    }
  },
  methods: {
    toggleParagraph() {
      if (!this.isParagraphHidden) {
        this.paragraphVisibility = 'hidden';
        this.isParagraphHidden = true;
      } else {
        this.paragraphVisibility = 'visible';
        this.isParagraphHidden = false;
      }
    }
  }
});

app.mount('#assignment');
