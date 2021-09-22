<template>
  <user-data @set-user="handleAddUser" />
  <active-user :name="name" :age="age" />
</template>

<script>
import UserData from './components/UserData.vue';
import ActiveUser from './components/ActiveUser.vue';

const App = {
  components: { UserData, ActiveUser },
  data() {
    return {
      name: '',
      age: 0
    };
  },
  methods: {
    handleAddUser(userDTO) {
      const { name, age } = userDTO;
      this.name = name;
      this.age = +age;
    }
  }
};

export default App;
</script>

<style>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
