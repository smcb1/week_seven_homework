<template lang="html">
  <div class="container">
    <div class="item" v-if="film">
      <h1>{{ film.title }}</a></h1>
      <p>Director: {{ film.director }}</p>
      <p>Producer: {{ film.producer }}</p>
      <p>Release: {{film.release_date}}</p>
      <p>{{ film.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 200px 500px;
  grid-template-rows: 200px 100px 400px;
  grid-gap: 20px;
}

.film-detail {
  flex-direction: column;
  background-color: #eee;
  color: #333;
}
</style>
