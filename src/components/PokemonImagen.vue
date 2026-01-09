<template>
    <div class="pokemon-container">
        <img :src="srcImagen"
            alt="No se pudo renderizar la imagen del pokemon" />
    </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },
    computed:{
        srcImagen(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    },  /* Desmontaje de  un componente */
  beforeUnmount() {
    console.log("beforeUnmount: justo antes de que vue desmonte el componente -> antes que se destruya ");
  },
  unmounted() {
    console.log("unmounted: el componente ya fue removido  del DOM y destruido");
  }
  
}
</script>

<style scoped>
img {
    margin-top: 10px;
    height: 200px;
    right: 32%;
}

.pokemon-container {
    height: 200px;
}
</style>