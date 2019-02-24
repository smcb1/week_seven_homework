<template lang="html">
  <div class="container">
    <h1>LOCATIONS:</h1>
    <div class="item" v-for="location in locations"
    v-bind:location="location"
    v-bind:id="location.id">
    <h2><a v-bind:href="location.url">{{ location.name }}</a></h2>
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
      // this.selectedLocation = this.locations[0]
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
  background-color: rgba(0, 122, 160, 0.8);
  color: #eee;
  padding-left: 15px;
  margin: 5px;
}

.item:nth-child(odd){
  border: 1px dotted;
  background-color: rgba(0, 122, 160, 0.6);
  color: #fff;
  padding-left: 15px;
  margin: 5px;
}

a {
  color: #eee;
}
</style>
