<template lang="html">
  <option v-on:change="handleClick">{{ location.name }}</option>
</template>

<script>
import { eventBus } from '../src/main.js';

export default {
  name: 'location-list-component',
  props: ['location'],
  methods: {
    handleClick(){
      eventBus.$emit('selected-location', this.location);
    }
  }
}
</script>

<style lang="css" scoped>
h1 {
  align-self: center;
}
</style>
