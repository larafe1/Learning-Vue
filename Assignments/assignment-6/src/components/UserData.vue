<template>
  <form @submit.prevent="handleFormSubmit">
    <div class="div__form">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Age" v-model="age" />
      <button type="submit">Add</button>
    </div>
  </form>
</template>

<script>
const UserData = {
  emits: ['set-user'],
  data() {
    return {
      name: '',
      age: ''
    };
  },
  methods: {
    handleFormSubmit() {
      const userDTO = {
        name: this.name,
        age: this.age
      };
      this.$emit('set-user', userDTO);
    }
  }
};

export default UserData;
</script>

<style>
.div__form {
  width: 500px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 60px auto;

  border: 1px solid green;
  border-radius: 5px;

  background: lightgreen;
}

.div__form input {
  width: 200px;
  height: 25px;

  margin: 5px 0;

  border: 1px solid green;
  border-radius: 3px;
}
</style>
