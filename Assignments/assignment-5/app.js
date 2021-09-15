const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: '',
      isShowingTaskList: true
    };
  },
  computed: {
    handleButtonCaption() {
      if (this.isShowingTaskList) {
        return 'Hide List';
      } else {
        return 'Show List';
      }
    }
  },
  methods: {
    handleAddTask() {
      this.tasks.push(this.taskInput);
    },
    toggleShowTaskList() {
      this.isShowingTaskList = !this.isShowingTaskList;
    }
  }
});

app.mount('#assignment');
