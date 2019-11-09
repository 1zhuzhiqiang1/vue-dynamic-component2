import Vue from 'vue';
import Router from 'vue-router';
import LayoutView from '../views/layout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LayoutView',
      component: LayoutView
    }
  ]
});
