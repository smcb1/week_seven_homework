<template lang="html">
  <option v-on:change="handleClick">{{ film.title }}</option>
</template>

<script>
import { eventBus } from '../src/main.js';

export default {
  name: 'list-component',
  props: ['film'],
  methods: {
    handleClick(){
      eventBus.$emit('selected-film', this.film);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
