<template>
    <div>
        <img v-if="imagen" :src="imagen" alt="No se puede ver">
        <div class="oscuro">

        </div>
        <div class="pregunta-container">
            <input v-model="pregunta" type="text" placeholder="Hazme una pegunta">
            <p>Recuerda terminar con el signo de interogación (?)</p>
            <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>


        </div>
    </div>
</template>

<script>
import { consumirAPIFacade, consumirAPIFacade2 } from '../clients/YesNoClient.js'
export default {
    data() {
        return {
            pregunta: null,
            respuesta:null,
            imagen:null,

        }
    },
    watch: {
        pregunta(value, oldValue) {

            if (value.includes('?')) {
                this.respuesta='Pensando...';
                this.consumir();
            }

        },
    },
    methods: {
        async consumir() {
            const resp = await consumirAPIFacade();
            this.imagen = resp.image;
            console.log('Respuesta final');
            console.log(resp);
            console.log(resp.answer);
            this.respuesta=resp.answer;
        }
    }

}
</script>

<style>
img, .oscuro {
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
}

.oscuro{
    background-color: rgba(0, 0, 0, 0.4);
 
}
.pregunta-container {
    position: relative;
    
    font-family: 'Times New Roman', Times, serif;
    color: azure;
    min-height: 100vh;
    /* altura de toda la pantalla */
    display: flex;
    flex-direction: column;
    /* elementos uno debajo del otro */
    justify-content: center;
    /* centrado vertical */
    align-items: center;
    /* centrado horizontal */

}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;
}

/*Combinación de distintos elementos */
h1,
h2,
p {
    color: white;
}

/*Puedo declararlo de forma individual */
p {
    font-size: 20px;
}

h2 {
    margin-top: 150px;
}
</style>