<template>
  <div class="view-container">

    <PokemonImagen v-if="mostrar" :pokemonId="pokemonGanador" />
    <PokemonOpciones @seleccionado="evaluarGanador($event)" :listaPokemons="pokemonArr" />
    <button @click="destruir()">Destruir</button>

    <div class="mensaje">
      <h1 v-if="mensaje">
        {{ mensaje }}

      </h1>
    </div>

  </div>


</template>


<script>
import PokemonImagen from '@/components/PokemonImagen.vue';
import PokemonOpciones from '@/components/PokemonOpciones.vue';
import { obtenerVectorPokemonFacade } from '@/clients/PokemonClient.js';
import { obtenerAleatorioFachada } from '@/clients/PokemonClient.js';
export default {
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mostrar: true,
      mensaje: null,
    }
  },
  beforeCreate() {
    console.log("componente PokemonView antes de crearse:Apenas inicia la instancia del componente");
  },
  created() {
    console.log("componente PokemonView creado:ya se resolvieron data, computed, methods, watch");
  },
  /* Monta el componente cuando se renderiza o visualiza el componente */
  beforeMount() {
    console.log("Justo ante del primer render de un elemento html");
  },
  mounted() {
    console.log("componente PokemonView montado -> el componente ya se visualiza en el html");
    this.iniciarJuego();
  },
  /* Actualiza el componente cuando hay cambios en data o props */
  beforeUpdate() {
    console.log("beforeUpdate: cuando cambio un data o un props del componente y vue esta por renderizar el cambio -> antes de que el DOM se actualice");
  },
  updated() {
    console.log("updated: cuando ya se actualizo tras la re-renderizacion -> el DOM se actualizó");
  },



  components: {
    PokemonImagen,
    PokemonOpciones
  },
  methods: {
    async iniciarJuego() {
      this.pokemonArr = await obtenerVectorPokemonFacade();

      const idAleatorio = obtenerAleatorioFachada(0, 3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;



    },
    destruir() {
      this.mostrar = !this.mostrar;
    },
    evaluarGanador(idGanador) {
      console.log('valor recibido desde padre')
      console.log(idGanador);
      if (idGanador === this.pokemonGanador) {
        console.log('¡Has ganado!');
        this.mensaje = '¡Has ganado!';
      } else {
        console.log('¡Has perdido! Inténtalo de nuevo.');
        this.mensaje = '¡Has perdido! Inténtalo de nuevo.';
      }

    },

  },


};
</script>

<style scoped>
.mensaje {
  background-color: black;
  text-align: center;
}

</style>