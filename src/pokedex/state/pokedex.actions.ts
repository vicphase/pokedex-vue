import { PokedexService } from '../services/pokedex.service';

export enum PokedexActionTypes {
  GetPokemon = '[Pokedex] Get pokemon',
  GetPokemonSuccess = '[Pokedex] Get pokemon sucess',
  GetPokemonFailed = '[Pokedex] Get pokemon failed'
}

export const PokedexActions = {
  async [PokedexActionTypes.GetPokemon]({ commit }, url?: string) {
    commit(PokedexActionTypes.GetPokemon, true);
    const pokemon = await PokedexService.getPokemon(url);
    commit(PokedexActionTypes.GetPokemonSuccess, {
      results: pokemon.results,
      next: pokemon.next
    });
  }
};
