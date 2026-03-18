import { ruta } from "./routes.js";

function retardo(timeout){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, timeout)
    })
} 
export async function calcularRuta(distancia, costoPorKm, nivelTrafico, penalizacion=0) {
    console.log("Calculando ruta...");
    const result = await retardo(2000);
    const costoBase = distancia * costoPorKm;
    let recargo = 0;
    switch (nivelTrafico) {
        case "bajo":
            recargo = 0.5;
            break;
        case "medio":
            recargo = 1;
            break;
        case "alto":
            recargo = 2;
            break;
        default:
            throw new Error("Tráfico no válido");
    }
    console.log("Ruta calculada");
    return {costoBase:costoBase,recargo:costoBase*recargo + penalizacion};
}

export async function procesarRutas(...rutas) {
    let rutasProcesadas = [];
    try
    {
        console.log("Procesando rutas...");
        //iterar sobre las rutas
        for(let i = 0; i < rutas.length; i++)
        {
            if(!rutas[i].activa) // si la ruta no esta activa, no se procesa
                rutas.analisis = {};
            const result = await calcularRuta(rutas[i].distancia, rutas[i].costoPorKm, rutas[i].trafico);
            rutas[i].analisis = result;
            rutasProcesadas = [...rutasProcesadas, result];
        }
    }
    catch(error)
    {
        console.error(`Error procesando rutas: ${error.message}`);
    }
    return rutasProcesadas;

}