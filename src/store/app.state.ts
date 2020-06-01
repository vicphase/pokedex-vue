import { PokedexState } from '@/pokedex/state/pokedex.state';
import { PokemonDetailState } from '@/pokemon-detail/state/pokemon-detail.state';

export interface AppState {
  pokedex: PokedexState;
  pokemonDetail: PokemonDetailState;
}
