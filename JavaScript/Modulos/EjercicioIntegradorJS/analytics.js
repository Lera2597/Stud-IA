export function totalRutasProcesadas(rutasProcesadas) {
    return totalRutasProcesadas = rutasProcesadas.length;
}

export function costoPromedio(rutasProcesadas) {
    return costoPromedio = rutasProcesadas.reduce((total, ruta) => total + ruta.analisis.costoBase, 0) / rutasProcesadas.length;
}

export function rutaMasEconomica(rutasProcesadas) {
    return rutaMasEconomica = rutasProcesadas.reduce((rutaMasEconomica, ruta) => (ruta.analisis.costoBase < rutaMasEconomica.analisis.costoBase) ? ruta : rutaMasEconomica, rutasProcesadas[0]);
}

export function rutaMasCostosa(rutasProcesadas) {
    return rutaMasCostosa = rutasProcesadas.reduce((rutaMasCostosa, ruta) => (ruta.analisis.costoBase > rutaMasCostosa.analisis.costoBase) ? ruta : rutaMasCostosa, rutasProcesadas[0]);
}