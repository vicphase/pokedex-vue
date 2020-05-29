import PokedexListContainer from '@/pokedex/containers/pokedex-list-container.vue';
import PokemonDetailContainer from '@/pokemon-detail/containers/pokemon-detail-container.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Pokedex',
    component: PokedexListContainer
  },
  {
    path: '/:id',
    name: 'PokemonDetail',
    component: PokemonDetailContainer
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
