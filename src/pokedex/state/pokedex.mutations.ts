import { AppState } from '@/store/app.state';

import { PokemonListResponse } from '../models/pokemon-list-response';
import { PokedexActionTypes } from './pokedex.actions';

export const PokedexMutations = {
  [PokedexActionTypes.GetPokemon](state: AppState) {
    state.pokedex.loading = true;
  },
  [PokedexActionTypes.GetPokemonSuccess](
    state: AppState,
    response: PokemonListResponse
  ) {
    state.pokedex.loading = false;
    state.pokedex.list = state.pokedex.list
      .concat(response.results)
      .map((pokemon, index) => ({
        id: index + 1,
        ...pokemon
      }));
    state.pokedex.next = response.next;
  },
  [PokedexActionTypes.GetPokemonFailed](state: AppState) {
    state.pokedex.loading = false;
  }
};
