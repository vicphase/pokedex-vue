import axios from 'axios';

import { PokemonListResponse } from '../models/pokemon-list-response';

export class PokedexService {
  static async getPokemon(url?: string): Promise<PokemonListResponse> {
    const response = await axios.get<PokemonListResponse>(
      url || 'https://pokeapi.co/api/v2/pokemon'
    );
    return {
      results: response.data.results,
      next: response.data.next
    };
  }
}
