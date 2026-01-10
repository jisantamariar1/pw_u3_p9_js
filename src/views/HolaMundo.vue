<template>
  <h2>Hola Mundo</h2>
  <h1>Consultando los datos del estudiante  </h1>
  <h3>{{ idEstudiante }}</h3>
  <button v-on:click="MostrarNumero">Numero Estudiante</button>
</template>

<script>
export default {
    data(){
        return {
            idEstudiante:null,
            
        }
    },
    created(){
        console.log(this.$route);
        console.log(this.$route.params.id);
        //this.idEstudiante=this.$route.params.id;
        console.log(this.$route.query.anio);
        console.log(this.$route.query.mes);
        console.log(this.$route.query.apellido);

    },
    methods:{
        MostrarNumero(){
            this.idEstudiante=this.$route.params.id;
        }
    }
}
</script>

<style>

</style>