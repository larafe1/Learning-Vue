<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h2>{{ rate }}/hour</h2>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view />
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      />
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ICoach } from "@/types";

export default defineComponent({
  name: "CoachDetails",
  props: ["id"],
  data() {
    return {
      selectedCoach: "",
    };
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return `${this.$route.path}/contact`;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach: ICoach) => coach.id === this.id
    );
  },
});
</script>
