// Funcion para calcular descuento
function crearCalculadorDescuento (porcentajeDescuento) {
    return function (precio) {
        return precio * (1 - porcentajeDescuento / 100);    
    }
}
// descuquento 10%
let descuento10 = crearCalculadorDescuento(10);

//descuento 20%
let descuento20 = crearCalculadorDescuento(20);

//descuento 50%
let descuento50 = crearCalculadorDescuento(50);

// funcion para mostrar resultado
function mostrarResultado (nombreProducto,precio_,callbak){
    console.log("Producto: ",nombreProducto);
    console.log("Precio original: ",precio_);
    console.log("Precio con descuento: ",callbak(precio_));
    console.log("--------------------------------------------------");
}

mostrarResultado("Pantalon", 200000, descuento10);
mostrarResultado("Pantalon", 200000, descuento20);
mostrarResultado("Pantalon", 200000, descuento50);