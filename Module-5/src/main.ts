import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from '@/components/FriendContact.vue';
import CreateFriend from '@/components/CreateFriend.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('create-friend', CreateFriend);

app.mount('#app');
