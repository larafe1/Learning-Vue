<template>
  <section>
    <coach-filter @change-filter="setFilters" />
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="handleFetchCoaches">
          Refresh
        </base-button>
        <base-button link to="/register">Register</base-button>
      </div>
      <ul v-if="hasCoaches && !error">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CoachFilter from "@/components/base/Coach/CoachFilter.vue";
import CoachItem from "@/components/base/Coach/CoachItem.vue";
import { ICoach, IFilters } from "@/types";

export default defineComponent({
  name: "CoachesList",
  components: { CoachFilter, CoachItem },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      error: "",
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"] as ICoach[];
      return coaches.filter((coach: ICoach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend"))
          return true;
        if (this.activeFilters.backend && coach.areas.includes("backend"))
          return true;
        if (this.activeFilters.career && coach.areas.includes("career"))
          return true;
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters: IFilters) {
      this.activeFilters = updatedFilters;
    },
    handleFetchCoaches() {
      try {
        this.$store.dispatch("coaches/fetchCoaches");
      } catch (err) {
        this.err = err || "Something went wrong.";
      }
    },
  },
  created() {
    this.handleFetchCoaches();
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
