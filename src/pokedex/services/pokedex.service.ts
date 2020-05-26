import axios from 'axios';

export class PokedexService {
  static async getPokemon(): Promise<any> {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    return response.data.results.map((pokemon: any, index: number) => ({
      id: index + 1,
      ...pokemon
    }));
  }
}
