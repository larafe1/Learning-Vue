<template>
  <button @click="handleConfirm">Confirm</button>
  <button @click="handleSaveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return {
      hasSavedChanges: false
    };
  },
  methods: {
    handleConfirm() {
      this.$router.push('/teams');
    },
    handleSaveChanges() {
      this.hasSavedChanges = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);

    if (this.hasSavedChanges) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure? You got unsaved changes!'
      );
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
