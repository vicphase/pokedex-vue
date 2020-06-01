<template>
  <PokemonDetail
    v-if="pokemon && species"
    :pokemon="pokemon"
    :species="species"
  />
</template>

<script>
import PokemonDetail from '../components/pokemon-detail';
import { PokemonDetailActionTypes } from '../state/pokemon-detail.actions';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PokemonDetailContainer',
  created() {
    this[PokemonDetailActionTypes.GetPokemon](Number(this.$route.params.id));
    this[PokemonDetailActionTypes.GetPokemonSpecies](
      Number(this.$route.params.id)
    );
  },
  computed: {
    ...mapState({
      pokemon: state => state.pokemonDetail.item,
      species: state => state.pokemonDetail.species
    })
  },
  methods: {
    ...mapActions([
      PokemonDetailActionTypes.GetPokemon,
      PokemonDetailActionTypes.GetPokemonSpecies
    ])
  },
  components: { PokemonDetail }
};
</script>
