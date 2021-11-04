<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests && !error">
        <requests-item
          v-for="requests in receivedRequests"
          :key="requests.id"
          :email="requests.email"
          :message="requests.message"
        />
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import RequestsItem from "@/components/base/Requests/RequestItem.vue";
import { IRequests } from "@/types";

export default defineComponent({
  name: "RequestsReceived",
  components: {
    RequestsItem,
  },
  data() {
    return {
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"] as IRequests[];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"] as boolean;
    },
  },
  methods: {
    handleFetchRequests() {
      try {
        this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        this.err = error || "Something went wrong.";
      }
    },
  },
  created() {
    this.handleFetchRequests();
  },
});
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
