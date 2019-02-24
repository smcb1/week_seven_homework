<template lang="html">
  <select v-on:change="handleChange" v-model="selectedFilmIndex">
    <option v-for="(film, index) in films" :value="index">{{ film.title }}</option>
  </select>
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
</style>
