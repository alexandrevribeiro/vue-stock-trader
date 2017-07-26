import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource;'
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.filter('currency', (value) => {
  return `R$ ${value}`;
});

// Uses the vue-router and vue-resource middleware
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-a7bc6.firebaseio.com/';

const router = new VueRouter({
  routes, // The "history" mode requires the server to always return the "index.html" page.
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
