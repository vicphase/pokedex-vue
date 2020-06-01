import { AppState } from '@/store/app.state';

import { PokemonDetailActionTypes } from './pokemon-detail.actions';

export const PokemonDetailMutations = {
  [PokemonDetailActionTypes.GetPokemonSuccess](state: AppState, pokemon) {
    state.pokemonDetail.item = pokemon;
  },
  [PokemonDetailActionTypes.GetPokemonSpeciesSuccess](
    state: AppState,
    pokemonSpecies
  ) {
    state.pokemonDetail.species = pokemonSpecies;
  },
  [PokemonDetailActionTypes.GetPokemonEvolutionChainSuccess](
    state: AppState,
    pokemonEvolutionChain
  ) {
    state.pokemonDetail.evolutionChain = pokemonEvolutionChain;
  }
};
