import { PokemonInList } from './pokemon-in-list';

export interface PokemonListResponse {
  results: PokemonInList[];
  next: string;
}
