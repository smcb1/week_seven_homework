import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';

export const eventBus = new Vue();

Vue.component('describe', {
  template: '<button class="btn" @click="test">Read more</button>',
  methods: {
    test() {
      this.$swal(`this.film.title`, 'description', 'producer')
    }
  }
});

Vue.use(VueSweetalert2);

new Vue({
  el: '#app',
  render: h => h(App)
})
