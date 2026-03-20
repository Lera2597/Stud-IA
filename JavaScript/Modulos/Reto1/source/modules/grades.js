// caluclar promedio de un array de notas
function promedio(array) {
    let sum = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return sum / array.length;
}
// verificar si el estudiante aprueba con un prodemio mayor o igual a 3.0
function aprobado(promedio) {
    return promedio >= 3.0
}

export {
    promedio,
    aprobado
}