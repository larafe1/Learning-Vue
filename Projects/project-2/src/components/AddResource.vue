<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close-dialog="handleConfirmError"
  >
    <template #default>
      <p>Unfortunately, at least one input is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <base-button @click="handleConfirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="handleFormSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="enteredTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          rows="3"
          v-model="enteredDescription"
        />
      </div>
      <div class="form-control">
        <label for="title">Link</label>
        <input
          type="text"
          name="link"
          id="link"
          ref="linkInput"
          v-model="enteredLink"
        />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const AddResource = defineComponent({
  inject: ['handleAddResource'],
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredLink: '',
      inputIsInvalid: false,
      addResource: this.handleAddResource
    };
  },
  methods: {
    handleFormSubmit() {
      if (
        this.enteredTitle.trim() === '' ||
        this.enteredDescription.trim() === '' ||
        this.enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(
        this.enteredTitle,
        this.enteredDescription,
        this.enteredLink
      );

      this.enteredTitle = '';
      this.enteredDescription = '';
      this.enteredLink = '';
    },
    handleConfirmError() {
      this.inputIsInvalid = false;
    }
  }
});

export default AddResource;
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
