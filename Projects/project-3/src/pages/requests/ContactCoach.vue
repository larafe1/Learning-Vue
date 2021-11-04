<template>
  <form @submit.prevent="handleSubmitForm">
    <div>
      <label for="email">Your E-mail</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message" />
    </div>
    <p v-if="!formIsValid">
      Please enter a valid e-mail and non-empty message.
    </p>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactCoach",
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
      error: null,
    };
  },
  methods: {
    handleSubmitForm() {
      if (
        this.email.length === 0 ||
        !this.email.includes("@") ||
        this.message.length === 0
      )
        return (this.formIsValid = false);

      const newRequest = {
        id: this.$route.params.id,
        email: this.email,
        message: this.message,
      };
      try {
        this.$store.dispatch("requests/contactCoach", newRequest);
        this.$router.push("/coaches");
      } catch (err) {
        this.error = err || "Something went wrong.";
      }
    },
  },
});
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
