<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="handleFetchExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading ...</p>
      <p v-else-if="!isLoading && errorMsg">{{ errorMsg }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        />
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      isLoading: false,
      errorMsg: null,
      results: [],
    };
  },
  methods: {
    handleFetchExperiences() {
      this.isLoading = true;
      this.errorMsg = null;
      fetch(
        'https://vue-course-http-requests-default-rtdb.firebaseio.com/surveys.json'
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(data => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }

          this.results = results;
          this.isLoading = false;
        })
        .catch(err => {
          console.error(err);
          this.isLoading = false;
          this.errorMsg = 'Failed to fetch data - please try again later.';
        });
    },
  },
  mounted() {
    this.handleFetchExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
