import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/dashboard/index';
import MovieView from '../components/movie/MovieView';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [

    { path: '/', component: Dashboard},
    { path: '/movies/:movie_id', name: 'movie',component: MovieView},
  ],
});