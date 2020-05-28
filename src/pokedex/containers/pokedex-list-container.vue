<template>
  <PokedexList
    :list="getPokedexList()"
    :loading="false"
    @getMoreItems="getMoreItems"
  />
</template>

<script>
import PokedexList from '../components/pokedex-list';
import { mapState, mapActions, mapGetters } from 'vuex';
import { PokedexActionTypes } from '../state/pokedex.actions';

export default {
  name: 'PokedexListContainer',
  created() {
    this[PokedexActionTypes.GetPokemon]();
  },
  computed: {
    ...mapState({ pokemon: state => state.pokedex.list })
  },
  methods: {
    ...mapGetters(['getPokedexList']),
    ...mapActions([PokedexActionTypes.GetPokemon]),
    getMoreItems() {
      this[PokedexActionTypes.GetPokemon](this.next);
    }
  },
  components: { PokedexList }
};
</script>
