import { AppState } from '@/store/app.state';

import { PokemonInList } from '../models/pokemon-in-list';
import { PokedexActionTypes } from './pokedex.actions';

export const PokedexMutations = {
  [PokedexActionTypes.GetPokemonSuccess](
    state: AppState,
    pokemon: PokemonInList[]
  ) {
    state.pokedex.list = state.pokedex.list
      .concat(pokemon)
      .map((pokemon, index) => ({
        id: index + 1,
        ...pokemon
      }));
  }
};
