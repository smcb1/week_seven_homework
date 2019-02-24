<template lang="html">
  <div class="container">
    <h1>MOVIES:</h1>
    <div class="item" v-for="film in films"
    v-bind:film="film"
    v-bind:id="film.id">
      <h2>{{ film.title }}</h2>
      <p>Director: {{ film.director }}</p>
      <p>Release: {{film.release_date}}</p>
      <!-- <p>{{ film.description }}</p> -->
      <!-- <p>{{film.url}}</p> -->
      <job>{{film.id}}</job>
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
    },
    filmSelect() {
      this.$swal('{{this.film}}')
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
  margin: 10px;
}
.item:nth-child(even){
  border: 1px dotted;
  background-color: rgba(0, 132, 180, 0.8);
  color: #eee;
  padding-left: 15px;
  margin: 5px;
}

.item:nth-child(odd){
  border: 1px dotted;
  background-color: rgba(0, 132, 180, 0.6);
  color: #fff;
  padding-left: 15px;
  margin: 5px;
}

.btn {
  display: inline-block;
  margin-bottom: 5px;
  font-weight: 400;
  text-align: center;
  vertical-align: top;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  /* background-color: #42b983; */
  cursor: pointer;
  /* color: #fff; */
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
}
</style>
