// { nombre: "Laptop", precio: 2000 };
function crearPedido(nombreCliente="Cliente Invitado",...productos){
    // Spread Operator
    let nuevosProductos = [...productos];
    let nombresProductos = [...productos.map(producto => producto.nombre)];
    let total = nuevosProductos.reduce((acc,producto) => acc + (producto.precio??0),0);
    let resumen = `Pedido para ${nombreCliente}
    Cantidad de productos: ${nombresProductos.length}
    Total: ${total}`;
    return {ciente:nombreCliente,productos:nombresProductos,total:total,resumen:resumen};
}

const p1 = { nombre: "Laptop", precio: 2000 };
const p2 = { nombre: "Mouse", precio: 50 };
const p3 = { nombre: "Teclado" };

const productos = [p1, p2, p3];

// console.log(crearPedido("Miguel", p1, p2, p3));
// console.log(crearPedido("Miguel", ...productos));
// console.log(crearPedido(...productos));
console.log(crearPedido(undefined,...productos));