<template>
  <div
    v-infinite-scroll="getMoreItems"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <PokemonRow v-for="pokemon in list" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll';
import PokemonRow from './pokemon-row';
export default {
  name: 'PokedexList',
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true
    },
    loading: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    getMoreItems() {
      this.$emit('getMoreItems');
    }
  },
  directives: { infiniteScroll },
  components: { PokemonRow }
};
</script>
