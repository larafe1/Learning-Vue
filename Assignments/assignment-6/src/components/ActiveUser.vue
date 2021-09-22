<template>
  <div class="div__user-container" v-show="name.length > 0">
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
const ActiveUser = {
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  }
};

export default ActiveUser;
</script>

<style>
.div__user-container {
  width: 500px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 30px auto;

  border: 1px solid green;
  border-radius: 5px;

  background: lightgreen;
}
</style>
