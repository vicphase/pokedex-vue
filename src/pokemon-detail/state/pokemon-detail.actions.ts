import { PokemonDetailService } from '../services/pokemon-detail.service';

export enum PokemonDetailActionTypes {
  GetPokemon = '[Pokemon Detail] Get pokemon',
  GetPokemonSuccess = '[Pokemon Detail] Get pokemon sucess',
  GetPokemonFailed = '[Pokemon Detail] Get pokemon failed',
  GetPokemonSpecies = '[Pokemon Detail] Get pokemon species',
  GetPokemonSpeciesSuccess = '[Pokemon Detail] Get pokemon species sucess',
  GetPokemonSpeciesFailed = '[Pokemon Detail] Get pokemon species failed'
}

export const PokemonDetailActions = {
  async [PokemonDetailActionTypes.GetPokemon]({ commit }, id: number) {
    const pokemon = await PokemonDetailService.getPokemon(id);
    commit(PokemonDetailActionTypes.GetPokemonSuccess, pokemon);
  },

  async [PokemonDetailActionTypes.GetPokemonSpecies]({ commit }, id: number) {
    const pokemonSpecies = await PokemonDetailService.getPokemonSpecies(id);
    commit(PokemonDetailActionTypes.GetPokemonSpeciesSuccess, pokemonSpecies);
  }
};
