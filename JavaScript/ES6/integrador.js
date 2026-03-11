let productos = [
    { nombre: "Laptop", precio: 2000, categoria: "tecnologia", disponible: true },
    { nombre: "Mouse", precio: 50, categoria: "tecnologia", disponible: true },
    { nombre: "Teclado", precio: 100, categoria: "tecnologia", disponible: true },
    { nombre: "Pantalon", precio: 200000, categoria: "ropa", disponible: true },
    { nombre: "Camisa", precio: 100000, categoria: "ropa", disponible: false },
    { nombre: "Zapatos", precio: 50000, categoria: "ropa", disponible: true },
]

function mostrarProductos() {
    console.log("Productos");
    console.log("****************")
    for (const producto of productos) {
        console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Categoria: ${producto.categoria}, Disponible: ${producto.disponible}`);
    }
        console.log("****************")

}
//Rest parameters
function totalPedido(...productosVendidos)
{
    let total = 0;
    for (const producto of productosVendidos) {
        if (producto.disponible)
        {
            total += producto?.precio;
        }
        else
        {
            console.log(`El producto ${producto?.nombre} no esta disponible`);
        }
        
    }
    return total;
}

function aplicarDescuento(totalCompra,descuento = 10) {
    return totalCompra>50000?totalCompra*(1 - descuento/100):totalCompra;
}

function agregarProducto(producto) {
    productos = [...productos,producto];
    return productos;
}

function resumenPedido(productosVendidos) {
    console.log("Resumen del pedido");
    for (const producto of productosVendidos) {
        console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Categoria: ${producto.categoria}, Disponible: ${producto.disponible}`);
    }
    console.log(`Total a pagar: ${totalPedido(...productosVendidos)}`);
    console.log(`Total a pagar con descuento: ${aplicarDescuento(totalPedido(...productosVendidos))}`);
}



let productosVendidos = [
    { nombre: "Camisa", precio: 100000, categoria: "ropa", disponible: true },
    { nombre: "Zapatos", precio: 50000, categoria: "ropa", disponible: true },
]

mostrarProductos()
agregarProducto({ nombre: "Pantalon", precio: 200000, categoria: "ropa", disponible: true })
mostrarProductos()
// console.log(totalPedido(...productosVendidos))
// aplicarDescuento(totalPedido(...productosVendidos))
// resumenPedido(productosVendidos)