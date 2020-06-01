<template>
  <PokedexList
    :list="getPokedexList()"
    :loading="loading"
    @getMoreItems="getMoreItems"
  />
</template>

<script>
import PokedexList from '../components/pokedex-list';
import { mapState, mapGetters } from 'vuex';
import { PokedexActionTypes } from '../state/pokedex.actions';

export default {
  name: 'PokedexListContainer',
  created() {
    this.$store.dispatch(PokedexActionTypes.GetPokemon, this.next);
  },
  computed: {
    ...mapState({
      pokemon: state => state.pokedex.list,
      next: state => state.pokedex.next,
      loading: state => state.pokedex.loading
    })
  },
  methods: {
    ...mapGetters(['getPokedexList']),
    getMoreItems() {
      this.$store.dispatch(PokedexActionTypes.GetPokemon, this.next);
    }
  },
  components: { PokedexList }
};
</script>
