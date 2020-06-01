import { PokemonInList } from '../models/pokemon-in-list';

export interface PokedexState {
  list: PokemonInList[];
  next: string;
  loading: boolean;
}

export const initialState: PokedexState = {
  list: [],
  next: '',
  loading: false
};
