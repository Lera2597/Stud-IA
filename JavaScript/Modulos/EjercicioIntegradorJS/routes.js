export let rutas = [];

export function ruta(id, distancia=0,trafico="bajo",costoPorKm=0,activa=true)
{
    // Validar el id de la ruta
    if (rutas.find((ruta) => ruta.id === id)) throw new Error("Ya existe una ruta con el mismo id");
    if (!["bajo","medio","alto"].includes(trafico)) throw new Error("Tráfico no válido");
    return {id:id,distancia:distancia,trafico:trafico,costoPorKm:costoPorKm,activa:activa};
}

// agregar ruta
export function agregarRuta(ruta) {
    // Validar si es una ruta
    if (typeof ruta !== "object") throw new Error("Ruta no válida");
    rutas.push(ruta);
}

export function obtenerRutas() {
    return rutas;
}