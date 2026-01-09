import axios from "axios";

const consumirAPI = async () => {
    const respuesta = await axios.get('https://yesno.wtf/api').then(r=>r.data);//aqui se puede omitir el await
    console.log(respuesta);
    return respuesta;
}

//como es asincrono necestio que lo esperen(await->async)
export async function consumirAPIFacade(){//si tiene await entonces debe ser async
    return await consumirAPI(); //aqui no se puede omitir
}
export async function consumirAPIFacad2(){
    return await consumirAPI();
}
