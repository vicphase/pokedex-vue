import { PokedexActions } from '@/pokedex/state/pokedex.actions';
import { PokedexMutations } from '@/pokedex/state/pokedex.mutations';
import { initialState as PokedexInitialState } from '@/pokedex/state/pokedex.state';
import Vue from 'vue';
import Vuex from 'vuex';

import { AppState } from './app.state';

Vue.use(Vuex);

const state: AppState = {
  pokedex: PokedexInitialState
};

const mutations = {
  ...PokedexMutations
};

const actions = {
  ...PokedexActions
};

const getters = {
  getPokedexList: () => state.pokedex.list
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {},
  strict: true
});
