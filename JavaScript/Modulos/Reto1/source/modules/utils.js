// convertir texto a mayusculas
function mayusculas(text) {
    return text.toUpperCase();
}
// capitalizar texto
function capitalizarNombre(text) {
    let partes = text.split(" ");
    partes.forEach((element, index) => {
        partes[index] = mayusculas(element[0]) + element.slice(1);
    });
    return partes.join(" ");
}

export {
    mayusculas,
    capitalizarNombre
}