import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

// Uses the vue-router middleware
Vue.use(VueRouter);

const router = new VueRouter({
  routes, // The "history" mode requires the server to always return the "index.html" page.
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
