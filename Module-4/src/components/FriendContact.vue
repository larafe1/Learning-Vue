<template>
  <li>
    <h4>{{ name }}</h4>
    <button @click="handleShowFriendData">{{ handleButtonCaption }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>E-mail:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script lang="ts">
import { IFriendContact } from '@/types';

const FriendContact = {
  // props: ['name', 'phoneNumber', 'emailAdress'],
  // We could pass the props that component receives in an array, but we could also be more specific about the props that we're receiving just like this:
  props: {
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
    }
  },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  computed: {
    handleButtonCaption() {
      if (this.detailsAreVisible) {
        return 'Hide Details';
      } else {
        return 'Show Details';
      }
    }
  },
  methods: {
    handleShowFriendData() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
} as IFriendContact;

export default FriendContact;
</script>
