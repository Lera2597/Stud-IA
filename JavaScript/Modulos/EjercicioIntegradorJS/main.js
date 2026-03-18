import * as routes from './routes.js'
import * as analytics from './analytics.js'
import * as optimizer from './optimizer.js'

function generarRutas(cantidad = 10) {
    const niveles = ["bajo", "medio", "alto"];

    return Array.from({ length: cantidad }, (_, i) => ({
        id: i + 1,
        distancia: parseFloat((Math.random() * 500 + 10).toFixed(2)),
        trafico: niveles[Math.floor(Math.random() * 3)],
        costoPorKm: parseFloat((Math.random() * 5 + 0.5).toFixed(2)),
        activa: Math.random() < 0.5,
    }));
}

async function main() {

    const rutas = generarRutas(3);

    // Agregar rutas a la lista de rutas
    rutas.forEach((ruta) => routes.agregarRuta(routes.ruta(ruta.id, ruta.distancia, ruta.trafico, ruta.costoPorKm, ruta.activa)));
    console.log("***** Rutas disponibles *****");
    // console.log(routes.rutas);

    await optimizer.procesarRutas(...routes.rutas);
    const totalRutasProcesadas = await analytics.totalRutasProcesadas(routes.rutas);
    console.log(`Total de rutas procesadas: ${totalRutasProcesadas}`);

    const costoPromedio = analytics.costoPromedio(routes.rutas);
    console.log(`Costo promedio: ${costoPromedio}`);

    const rutaMasEconomica = analytics.rutaMasEconomica(routes.rutas);
    console.log(`Ruta más económica: ${JSON.stringify(rutaMasEconomica)}`);

    const rutaMasCostosa = analytics.rutaMasCostosa(routes.rutas);
    console.log(`Ruta más costosa: ${JSON.stringify(rutaMasCostosa)}`);

}

await main();

