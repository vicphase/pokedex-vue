import { PokemonDetailService } from '../services/pokemon-detail.service';

export enum PokemonDetailActionTypes {
  GetPokemon = '[Pokemon Detail] Get pokemon',
  GetPokemonSuccess = '[Pokemon Detail] Get pokemon sucess',
  GetPokemonFailed = '[Pokemon Detail] Get pokemon failed',
  GetPokemonSpecies = '[Pokemon Detail] Get pokemon species',
  GetPokemonSpeciesSuccess = '[Pokemon Detail] Get pokemon species sucess',
  GetPokemonSpeciesFailed = '[Pokemon Detail] Get pokemon species failed',
  GetPokemonEvolutionChain = '[Pokemon Detail] Get pokemon evolution chain',
  GetPokemonEvolutionChainSuccess = '[Pokemon Detail] Get pokemon evolution chain success',
  GetPokemonEvolutionChainFailed = '[Pokemon Detail] Get pokemon evolution chain failed'
}

export const PokemonDetailActions = {
  async [PokemonDetailActionTypes.GetPokemon]({ commit }, id: number) {
    const pokemon = await PokemonDetailService.getPokemon(id);
    commit(PokemonDetailActionTypes.GetPokemonSuccess, pokemon);
  },

  async [PokemonDetailActionTypes.GetPokemonSpecies](
    { commit, dispatch },
    id: number
  ) {
    const pokemonSpecies = await PokemonDetailService.getPokemonSpecies(id);
    commit(PokemonDetailActionTypes.GetPokemonSpeciesSuccess, pokemonSpecies);
    dispatch(
      PokemonDetailActionTypes.GetPokemonEvolutionChain,
      pokemonSpecies.evolution_chain.url
    );
  },

  async [PokemonDetailActionTypes.GetPokemonEvolutionChain](
    { commit },
    url: string
  ) {
    const pokemonEvolutionChain = await PokemonDetailService.getPokemonEvolution(
      url
    );
    commit(
      PokemonDetailActionTypes.GetPokemonEvolutionChainSuccess,
      pokemonEvolutionChain
    );
  }
};
