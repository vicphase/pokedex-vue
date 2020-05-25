<template>
  <div class="row">
    {{ list }}
  </div>
</template>

<script>
export default {
  name: 'PokedexListContainer',
  data() {
    return {
      list: [{ name: 'Bulbasaur' }]
    };
  }
};
</script>
