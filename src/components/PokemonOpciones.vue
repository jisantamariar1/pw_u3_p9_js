<template>
    <div class="pokemon-opciones">
        <ul>
            <li v-on:click="pasarPadre(pokemon.id)" v-for="pokemon in listaPokemons" :key="pokemon.id">
                {{ pokemon.nombre }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        listaPokemons:{
            type: Array,
            required: true
        }
    },
    methods:{
        pasarPadre(id){
            console.log(id);
            this.$emit("seleccionado", id);
        }
    }

}
</script>

<style>
ul {
    list-style-type: none;
}

li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    width: 150px;
    margin-top: 10px;
    text-align: center;
}

.pokemon-opciones {
    display: flex;
    justify-content: center;
}
</style>