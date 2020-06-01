<template>
  <PokemonDetail
    v-if="pokemon && species && evolutionChain"
    :pokemon="pokemon"
    :species="species"
    :evolutionChain="evolutionChain"
  />
</template>

<script>
import PokemonDetail from '../components/pokemon-detail';
import { PokemonDetailActionTypes } from '../state/pokemon-detail.actions';
import { mapState } from 'vuex';

export default {
  name: 'PokemonDetailContainer',
  created() {
    const id = Number(this.$route.params.id);
    this.$store.dispatch(PokemonDetailActionTypes.GetPokemon, id);
    this.$store.dispatch(PokemonDetailActionTypes.GetPokemonSpecies, id);
  },
  computed: {
    ...mapState({
      pokemon: state => state.pokemonDetail.item,
      species: state => state.pokemonDetail.species,
      evolutionChain: state => state.pokemonDetail.evolutionChain
    })
  },
  components: { PokemonDetail }
};
</script>
