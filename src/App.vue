<template lang="html">
  <div>
    <h1>GHIBLI</h1>
    <div class="main-container">
      <films-list :films="films"></films-list>
      <locations-list :locations="locations"></locations-list>
      <!-- <film-detail :film="selectedFilm"></film-detail> -->
    </div>
  </div>
</template>

<script>
import FilmsList from "../components/FilmsList.vue";
import FilmDetail from "../components/FilmDetail.vue";
import LocationsList from "../components/LocationsList.vue";
import {eventBus} from './main.js'

export default {
  name: 'app',
  data() {
    return {
      films: [],
      locations: [],
      selectedFilm: 0,
      selectedFilmIndex: 0,
      selectedLocation: 0
    }
  },
  components: {
    'films-list': FilmsList,
    // 'film-detail': FilmDetail,
    'locations-list': LocationsList
  }
}
</script>

<style lang="css" scoped>
body {
  background-color: #555;
}
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: rgba(0, 132, 180, 0.3);
  color: #333;
  padding: 15px;
}
</style>
