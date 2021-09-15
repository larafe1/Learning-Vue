const app = Vue.createApp({
  data() {
    return {
      name: "John Doe",
      age: "22",
      imgUrl: "https://miro.medium.com/max/2000/1*ACR0gj0wbx91V_xgURifWg.png",
    };
  },
  methods: {
    getAgeInFiveYears() {
      return +this.age + 5;
    },
    generateRandomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
