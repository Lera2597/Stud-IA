import cart from "./cart.js";
import tax from "./tax.js";
import {producto, productos} from "./products.js";

//productos disponibles
const producto1 = producto(1,"Mouse",tax(1000));
const producto2 = producto(2,"Teclado",tax(2000));
const producto3 = producto(3,"Monitor",tax(3000));
const producto4 = producto(4,"Pantalla",tax(4000));
const producto5 = producto(5,"Impresora",tax(5000));
productos.push(producto1,producto2,producto3,producto4,producto5);

//agregar productos al carrito
cart.agregarProducto(1);
cart.agregarProducto(2);
cart.agregarProducto(3);

//eliminar uno de los productos del carrito
cart.eliminarProducto(1);

//calcular el total de la compra
const total = tax(cart.obtenerSubtotal());

//listar los productos del carrito
cart.listarProductos();

console.log(`El total de la compra es: ${total}`);