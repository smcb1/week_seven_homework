<template lang="html">
  <div class="container">
    <div v-for="film in films">
      <h1>{{ film.title }}</a></h1>
      <p>Director: {{ film.director }}</p>
      <p>Producer: {{ film.producer }}</p>
      <p>Release: {{film.release_date}}</p>
      <p>{{ film.description }}</p>
      <p>{{film.url}}</p>
    </div>
  </div>

</template>

<script>
import ListComponent from './ListComponent.vue';
import {eventBus} from '../src/main.js';

export default {
  name: 'films-list',
  props: ['films'],

  data() {
    return {
      selectedFlmIndex: 0
    }
  },
  methods: {
    handleChange() {
      eventBus.$emit('selected-film', this.films[this.selectedFilmIndex])
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-auto-columns: auto;
}
</style>
