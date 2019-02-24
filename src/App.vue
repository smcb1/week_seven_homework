<template lang="html">
  <div>
    <h1>GHIBLI API</h1>
    <div class="main-container">
      <films-list :films="films"></films-list>
      <film-detail :film="selectedFilm"></film-detail>
    </div>
  </div>
</template>

<script>
import FilmsList from "../components/FilmsList.vue";
import FilmDetail from "../components/FilmDetail.vue";
import {eventBus} from './main.js'

export default {
  name: 'app',
  data() {
    return {
      films: [],
      selectedFilm: 0,
      selectedFilmIndex: 0
    }
  },
  components: {
    'films-list': FilmsList,
    'film-detail': FilmDetail
  },
  mounted() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(films => {
      this.films = films
      this.selectedFilm = this.films[0]
    }),
    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film;
    })
  }
}
</script>

<style lang="css" scoped>

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
  margin-top: 60px;
  margin-left: 60px;
}

h1 {
  color: #333;
}
</style>
