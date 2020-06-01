import axios from 'axios';

export class PokemonDetailService {
  static async getPokemon(id: number) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  }

  static async getPokemonSpecies(id: number) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    return response.data;
  }

  static async getPokemonEvolution(url: string) {
    const response = await axios.get(url);
    return response.data;
  }
}
