<template>
  <div id="div__app-main">
    <h2>My friends</h2>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import FriendContact from '@/components/FriendContact.vue';
import { IApp } from '@/types';

const App = {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@email.com'
        },
        {
          id: 2,
          name: 'Julie Jones',
          phone: '9876 54321 09',
          email: 'julie@email.com'
        }
      ]
    };
  }
} as IApp;

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
