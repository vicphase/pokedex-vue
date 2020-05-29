<template>
  <router-link :to="{ name: 'PokemonDetail', params: { id: pokemon.id } }">
    <div class="row border-top py-2">
      <div class="col-4">
        <img
          v-bind:src="
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
          "
          class="border rounded"
        />
      </div>
      <div class="col-5 flex-start">
        <div class="row">
          <div class="col">
            {{ pokemon.name | capitalize }}
          </div>
        </div>
        <!-- <div class="row">
        <div v-if="pokemon.types" class="col flex-start">
          <div
            v-for="type in pokemon.types"
            :key="type.id"
            v-bind:class="`px-2 mr-2 text-white rounded ${type.type.name}`"
          >
            <span class="small">
              {{ type.type.name | capitalize }}
            </span>
          </div>
        </div>
      </div> -->
      </div>
      <div class="col-3 flex-start">#{{ pokemon.id | threeDigit }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PokemonRow',
  props: {
    pokemon: {
      type: Object,
      default: () => null,
      required: true
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    threeDigit: function(value) {
      const str = String(value);
      const pad = '000';
      return pad.substring(0, pad.length - str.length) + str;
    }
  }
};
</script>
