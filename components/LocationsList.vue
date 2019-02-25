<template lang="html">
  <div class="container">
    <h1>LOCATIONS:</h1>
    <div class="item" v-for="location in locations"
    v-bind:location="location"
    v-bind:id="location.id">
    <h2>{{ location.name }}</h2>
    <p>Terrain: {{ location.terrain }}</p>
    <p>Climate: {{ location.climate }}</p>
    <p>Surface Water: {{ location.surface_water }}</p>
  </div>
</div>

</template>

<script>
import locationListComponent from './LocationListComponent.vue';
import {eventBus} from '../src/main.js';

export default {
  name: 'locations-list',
  props: ['locations'],

  data() {
    return {
      selectedLocation: 0
    }
  },
  methods: {
    handleClick() {
      eventBus.$emit('selected-location', this.location[this.selectedLocation])
    }
  },
  mounted() {
    fetch('https://ghibliapi.herokuapp.com/locations')
    .then(res => res.json())
    .then(locations => {
      this.locations = locations
    }),
    eventBus.$on('selected-location', (location) => {
      this.selectedLocation = location;
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
  background: -moz-linear-gradient(top, rgba(0,102,180,1) 0%, rgba(41,137,216,1) 50%, rgba(32,124,202,1) 97%, rgba(125,185,232,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,102,180,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 97%,rgba(125,185,232,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,102,180,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 97%,rgba(125,185,232,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
}

a {
  color: #eee;
}
</style>
