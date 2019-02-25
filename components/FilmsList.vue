<template lang="html">
  <div class="container">
    <h1>MOVIES:</h1>
    <div class="item" v-for="film in films"
    v-bind:film="film"
    v-bind:id="film.id">
    <h2>{{ film.title }}</h2>
    <p>Director: {{ film.director }} ({{ film.release_date }})</p>
    <!-- <p>{{ film.description }}</p> -->
    <describe></describe>
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
    }
  },
  mounted() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(films => {
      this.films = films
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
  color: #eee;
  padding-left: 15px;
  padding-bottom: 10px;
  margin: 5px;
  background: rgb(30,87,153); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(30,87,153,1) 0%, rgba(41,137,216,1) 50%, rgba(32,124,202,1) 90%, rgba(32,124,202,1) 97%, rgba(125,185,232,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 90%,rgba(32,124,202,1) 97%,rgba(125,185,232,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 90%,rgba(32,124,202,1) 97%,rgba(125,185,232,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
}

.item:nth-child(odd){
  border: 1px dotted;
  color: #fff;
  padding-left: 15px;
  margin: 5px;
  background: rgb(0,102,180); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(0,102,180,1) 0%, rgba(41,137,216,1) 90%, rgba(32,124,202,1) 97%, rgba(125,185,232,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,102,180,1) 0%,rgba(41,137,216,1) 90%,rgba(32,124,202,1) 97%,rgba(125,185,232,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,102,180,1) 0%,rgba(41,137,216,1) 90%,rgba(32,124,202,1) 97%,rgba(125,185,232,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
}

.btn {
  display: inline-block;
  margin-bottom: 5px;
  font-weight: 400;
  text-align: center;
  vertical-align: top;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
}
</style>
