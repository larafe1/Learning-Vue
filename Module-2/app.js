const app = Vue.createApp({
  data() {
    return {
      goals: [],
      courseGoals: '',
      renderTxt: 'Hello world'
    };
  },
  methods: {
    handleAddCourseGoals() {
      this.goals.push(this.courseGoals);
    },
    handleRemoveCourseGoals(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#div__app-main');
