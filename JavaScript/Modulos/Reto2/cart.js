import { productos } from "./products.js";
const cart = (function () {
    let productosAgregados = [];
    function agregarProducto(id) {
        productosAgregados.push(productos.find((producto) => producto.id === id));
    }
    //eliminar producto
    function eliminarProducto(id){
        productosAgregados = productosAgregados.filter((producto) => producto.id !== id);
    }
    // obtener subtotal
    function obtenerSubtotal() {
        return productosAgregados.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    }
    //listar productos
    function listarProductos() {
        productosAgregados.forEach((producto) => console.log(`--> ${producto.id} - ${producto.nombre} - $${producto.precio}`));
    }
    return {
        agregarProducto,
        eliminarProducto,
        obtenerSubtotal,
        listarProductos
    };
    
}) ();

export default cart