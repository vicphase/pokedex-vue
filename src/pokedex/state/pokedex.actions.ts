import { PokedexService } from '../services/pokedex.service';

export enum PokedexActionTypes {
  GetPokemon = '[Pokedex] Get pokemon',
  GetPokemonSuccess = '[Pokedex] Get pokemon sucess',
  GetPokemonFailed = '[Pokedex] Get pokemon failed'
}

export const PokedexActions = {
  async [PokedexActionTypes.GetPokemon]({ commit }, url?: string) {
    const pokemon = await PokedexService.getPokemon(url);
    commit(PokedexActionTypes.GetPokemonSuccess, pokemon.results);
  }
};
