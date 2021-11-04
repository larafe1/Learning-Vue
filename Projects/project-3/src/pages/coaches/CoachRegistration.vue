<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @submit-data="handleStoreData" />
      <p v-if="error">{{ error }}</p>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CoachForm from "@/components/base/Coach/CoachForm.vue";
import { ICoach } from "@/types";

export default defineComponent({
  name: "CoachRegistration",
  components: { CoachForm },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    handleStoreData(data: ICoach) {
      try {
        this.$store.dispatch("coaches/registerCoach", data);
        this.$router.push("/coaches");
      } catch (err) {
        this.error = err || "Something went wrong.";
      }
    },
  },
});
</script>
