<template>
  <form @submit.prevent="handleFormSubmit">
    <h4>Add new friend</h4>
    <label for="name">Name:</label>
    <input type="name" name="name" v-model="enteredName" />
    <label for="email-address">E-mail:</label>
    <input type="email" name="email-address" v-model="enteredEmailAddress" />
    <label for="phone-number">Phone:</label>
    <input type="tel" name="phone-number" v-model="enteredPhoneNumber" />
    <button type="submit">Add Contact</button>
  </form>
</template>

<script lang="ts">
import { ICreateFriend, FriendDTO } from '@/types';

const CreateFriend: ICreateFriend = {
  emits: ['add-friend'],
  data() {
    return {
      enteredName: '',
      enteredPhoneNumber: '',
      enteredEmailAddress: ''
    };
  },
  methods: {
    handleFormSubmit() {
      const newFriendData: FriendDTO = {
        id: new Date().toISOString(),
        name: this.enteredName,
        phone: this.enteredPhoneNumber,
        email: this.enteredEmailAddress,
        isFavorite: false
      };
      this.$emit('add-friend', newFriendData);
    }
  }
};

export default CreateFriend;
</script>
