<template>
  <PokedexList :list="list" />
</template>

<script>
import PokedexList from '../components/pokedex-list';

import { PokedexService } from '../services/pokedex.service';

export default {
  name: 'PokedexListContainer',
  async created() {
    this.list = await PokedexService.getPokemon();
  },
  data() {
    return {
      list: []
    };
  },
  components: { PokedexList }
};
</script>
