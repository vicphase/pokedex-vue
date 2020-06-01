import { PokedexActions } from '@/pokedex/state/pokedex.actions';
import { PokedexMutations } from '@/pokedex/state/pokedex.mutations';
import { initialState as PokedexInitialState } from '@/pokedex/state/pokedex.state';
import { PokemonDetailActions } from '@/pokemon-detail/state/pokemon-detail.actions';
import { PokemonDetailMutations } from '@/pokemon-detail/state/pokemon-detail.mutations';
import { initialState as PokemonDetailInitialState } from '@/pokemon-detail/state/pokemon-detail.state';
import Vue from 'vue';
import Vuex from 'vuex';

import { AppState } from './app.state';

Vue.use(Vuex);

const state: AppState = {
  pokedex: PokedexInitialState,
  pokemonDetail: PokemonDetailInitialState
};

const mutations = {
  ...PokedexMutations,
  ...PokemonDetailMutations
};

const actions = {
  ...PokedexActions,
  ...PokemonDetailActions
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
