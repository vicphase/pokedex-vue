<template>
  <PokedexList :list="list" :loading="loading" @getMoreItems="getMoreItems" />
</template>

<script>
import PokedexList from '../components/pokedex-list';

import { PokedexService } from '../services/pokedex.service';

export default {
  name: 'PokedexListContainer',
  async created() {
    this.loading = true;
    const { results, next } = await PokedexService.getPokemon();
    this.list = results.map((pokemon, index) => ({
      id: index + 1,
      ...pokemon
    }));
    this.next = next;
    this.loading = false;
  },
  data() {
    return {
      list: [],
      next: '',
      loading: false
    };
  },
  methods: {
    async getMoreItems() {
      this.loading = true;
      const { results, next } = await PokedexService.getPokemon(this.next);
      this.list = this.list.concat(results).map((pokemon, index) => ({
        id: index + 1,
        ...pokemon
      }));
      console.log(this.list);
      this.next = next;
      this.loading = false;
    }
  },
  components: { PokedexList }
};
</script>
