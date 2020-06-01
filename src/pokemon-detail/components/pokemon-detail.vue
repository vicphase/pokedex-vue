<template>
  <div class="container px-0">
    <div class="row bg-primary mb-3">
      <div class="col text-white flex-center py-3">
        <router-link class="go-back" to="/">
          <i class="las la-angle-left "></i
        ></router-link>
        <h6 class="mb-0">Description</h6>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <span class=" text-primary">
          #{{ pokemon.id }} {{ pokemon.name }}
        </span>
      </div>

      <div class="col text-right">
        <span class="mr-2">{{ pokemon.height / 10 }} m.</span>
        <span>{{ pokemon.weight / 10 }} kg.</span>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-4">
        <img
          v-bind:src="pokemon.sprites.front_default"
          class="border rounded"
        />
      </div>
      <div class="col-8">
        <p class="small">
          {{ species.flavor_text_entries[1].flavor_text }}
        </p>
      </div>
    </div>

    <div class="row bg-dark text-white p-2">
      <div class="col">
        <span>General Information</span>
      </div>
    </div>

    <div class="row border-bottom p-2">
      <div class="col">
        <span>Hidden Abilities</span>
      </div>
      <div class="col text-right">
        <span class="text-secondary ">{{
          pokemon.abilities[0].ability.name
        }}</span>
      </div>
    </div>

    <div class="row border-bottom p-2">
      <div class="col">
        <span>Location</span>
      </div>
      <div class="col text-right">
        <span class="text-secondary">
          {{ species.habitat.name }}
        </span>
      </div>
    </div>

    <div class="row bg-dark text-white p-2">
      <div class="col">
        <span>Evolution</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonDetail',
  props: {
    pokemon: {
      type: Object,
      default: () => null,
      required: true
    },
    species: {
      type: Object,
      default: () => null,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.go-back {
  position: absolute;
  left: 12px;
  font-size: 20px;
}
</style>
