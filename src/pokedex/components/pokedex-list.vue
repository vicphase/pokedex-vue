<template>
  <div class="mt-3">
    <div v-for="pokemon in list" :key="pokemon.id" class="row border-top py-2">
      <div class="col-4">
        <img
          v-bind:src="pokemon.sprites.front_default"
          class="border rounded"
        />
      </div>
      <div class="col-5">
        <div class="row mb-2 mt-4">
          <div class="col">
            {{ pokemon.name | capitalize }}
          </div>
        </div>
        <div class="row">
          <div class="col flex-start">
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
        </div>
      </div>
      <div class="col-3 flex-start">#{{ pokemon.id | threeDigit }}</div>
    </div>
  </div>
</template>

<script>
import { bulbasaur } from './bulbasaur.mock';
export default {
  name: 'PokedexList',
  data() {
    return {
      list: [bulbasaur]
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    threeDigit: function(value) {
      const str = '' + value;
      const pad = '000';
      return pad.substring(0, pad.length - str.length) + str;
    }
  }
};
</script>
