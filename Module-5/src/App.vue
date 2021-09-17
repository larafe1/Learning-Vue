<template>
  <div id="div__app-main">
    <h2>My friends</h2>
    <div class="div__separator" />
    <create-friend @add-friend="handleAddNewFriend" />
    <ul>
      <div class="div__separator" />
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="handleFavoriteStatus"
        @delete-friend="handleDeleteFriend"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import FriendContact from '@/components/FriendContact.vue';
import CreateFriend from '@/components/CreateFriend.vue';
import { IApp, FriendDTO } from '@/types';

const App: IApp = {
  components: { FriendContact, CreateFriend },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@mail.com',
          isFavorite: true
        },
        {
          id: 2,
          name: 'Julie Jones',
          phone: '0987 65432 10',
          email: 'julie@mail.com',
          isFavorite: false
        }
      ]
    };
  },
  // Another feature Vue offers us is the provide and inject props, a pattern we can use to provide data in one place and inject it, which means, use it in another place.
  // We could use it by passing the data (or functions) directly inside of it. Or by calling a function, just like we do with data(), referencing the data we wanna provide.
  // provide: {
  //   friends: [{}, ...]
  // },
  provide() {
    return {
      friendsArr: this.friends
    };
  },
  methods: {
    handleFavoriteStatus(friendId) {
      const targetFriend = this.friends.find(
        (friend: FriendDTO) => friend.id === friendId
      );
      targetFriend.isFavorite = !targetFriend.isFavorite;
    },
    handleAddNewFriend(friendDTO) {
      this.friends.push(friendDTO);
    },
    handleDeleteFriend(friendId) {
      this.friends = this.friends.filter(
        (friend: FriendDTO) => friend.id !== friendId
      );
    }
  }
};

export default App;
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --green-lighter: #e0f2f1;
  --green-darker: #00897b;
  --gray-border: #ccc;
}

body {
  font-family: monospace;
}

ul {
  list-style: none;
}

#div__app-main {
  width: 800px;
  height: 650px;

  margin: 30px auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  border: 1px solid var(--green-darker);
  border-radius: 5px;

  background: var(--green-lighter);
  font-size: 22px;
  line-height: 3rem;
}

.div__separator {
  width: 100%;

  margin: 15px 0;

  border-top: 1px solid var(--green-darker);
}
</style>
