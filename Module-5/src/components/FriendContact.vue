<template>
  <li>
    <h4>{{ name }} {{ isFavorite ? '- Favorited' : '' }}</h4>
    <button @click="handleShowFriendData">
      {{ buttonCaption }}
    </button>
    <button @click="handleToggleFriendAsFavorite">
      {{ isFavorite ? 'Unfavorite' : 'Favorite' }}
    </button>
    <button @click="handleDeleteFriend">Delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>E-mail:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script lang="ts">
import { IFriendContact } from '@/types';

const FriendContact: IFriendContact = {
  // props: ['name', 'phoneNumber', 'emailAdress']
  // We could pass the props that component receives in an array, but we could also be more specific about the props that we're receiving just like this:
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: false,
      default: 'XXXX XXXXX XX'
    },
    emailAddress: {
      type: String,
      required: true,
      validator: (value: string) => {
        return value.length > 5;
      }
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  // emits: ['toggle-favorite']
  // Just like with the props, we can be more specific about what we're emitting by adding a kinda validation to it.
  emits: {
    'toggle-favorite': (id) => {
      if (!id) {
        console.warn('Id is missing for toggleFavorite!');
      }
    },
    'delete-friend': (id) => {
      if (!id) {
        console.warn('Id is missing for deleteFriend!');
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  // Here we're injecting or, better saying, using the data that we provided before.
  inject: ['friendsArr'],
  computed: {
    buttonCaption() {
      return this.detailsAreVisible ? 'Hide Details' : 'Show Details';
    }
  },
  methods: {
    handleShowFriendData() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    handleToggleFriendAsFavorite() {
      // Emitting custom events (Child => Parent communication)
      this.$emit('toggle-favorite', this.id);
    },
    handleDeleteFriend() {
      this.$emit('delete-friend', this.id);
    }
  }
};

export default FriendContact;
</script>
