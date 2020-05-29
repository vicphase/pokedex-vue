import PokemonRow from '@/pokedex/components/pokemon-row.vue';
import { shallowMount } from '@vue/test-utils';

import { PokemonInList } from '../../src/pokedex/models/pokemon-in-list';

describe('Pokemon-row.vue', () => {
  it('renders props.pokemon', () => {
    const pokemon: PokemonInList = { id: 1, name: 'Bulbasaur' };
    const wrapper = shallowMount(PokemonRow, {
      propsData: { pokemon }
    });
    expect(wrapper.text()).toMatch(pokemon.name);
  });
});
