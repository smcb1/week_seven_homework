<template lang="html">
  <div class="container">
    <h1>MOVIES:</h1>
    <div class="item" v-for="film in films">
      <h2>{{ film.title }}</a></h2>
      <p>Director: {{ film.director }}</p>
      <p>Release: {{film.release_date}}</p>
      <p>{{ film.description }}</p>
      <!-- <p>{{film.url}}</p> -->
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
      selectedFilmIndex: 0
    }
  },
  methods: {
    handleChange() {
      eventBus.$emit('selected-film', this.films[this.selectedFilmIndex])
    },
    search(query) {
      this.searchQuery = query
    }
  },
  mounted() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(films => {
      this.films = films
      // this.selectedFilm = this.films[0]
    }),
    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film;
    })
  }
}
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 400px);
  font-family: 'Noto Sans KR', sans-serif;
}
.item{
  border: 1px dotted;
  background-color: rgba(0, 132, 180, 0.8);
  color: #eee;
  padding-left: 15px;
  margin: 5px;
}

</style>
