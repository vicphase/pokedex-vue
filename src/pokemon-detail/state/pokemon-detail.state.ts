export interface PokemonDetailState {
  item;
  species;
  evolutionChain;
}

export const initialState: PokemonDetailState = {
  item: null,
  species: null,
  evolutionChain: null
};
