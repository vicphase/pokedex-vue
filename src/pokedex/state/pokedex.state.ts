import { PokemonInList } from '../models/pokemon-in-list';

export interface PokedexState {
  list: PokemonInList[];
  next: string;
}

export const initialState: PokedexState = {
  list: [],
  next: ''
};
