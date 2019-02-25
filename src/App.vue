<template lang="html">
  <div>
    <h1>GHIBLI STUDIO API</h1>
    <div class="main-container">
      <films-list :films="films"></films-list>
      <locations-list :locations="locations"></locations-list>
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
  },
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
  color: #eee;
  padding: 15px;
  background: rgb(30,87,153); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(30,87,153,1) 0%, rgba(41,137,216,1) 50%, rgba(32,124,202,1) 90%, rgba(32,124,202,1) 97%, rgba(125,185,232,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 90%,rgba(32,124,202,1) 97%,rgba(125,185,232,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 90%,rgba(32,124,202,1) 97%,rgba(125,185,232,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
}
</style>
