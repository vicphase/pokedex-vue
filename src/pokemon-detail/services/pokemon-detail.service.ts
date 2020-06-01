import axios from 'axios';

export class PokemonDetailService {
  static async getPokemon(id: number): Promise<any> {
    const response = await axios.get<any>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return response.data;
  }

  static async getPokemonSpecies(id: number): Promise<any> {
    const response = await axios.get<any>(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    return response.data;
  }
}
