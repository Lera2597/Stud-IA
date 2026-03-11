const url_base = "https://dummyjson.com/products";

// consultar api
async function consultarApi(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.log(error);
    }
}
//validar pedido
function validarPedido(pedido){
    if (pedido.length === 0){
        return false;
    }
    return true;
}
async function main(pedido){
    try {
        const productos =  await consultarApi(url_base);
        const nombresProductos = productos.map(producto => ({nombre:producto.title, cantidad:producto.stock}));
        // console.log(nombresProductos);}
        if (validarPedido(pedido)){
            // verificar si el producto esta disponible
            pedido.forEach(producto => {
                if( !nombresProductos.some(item => item.nombre === producto.nombre)){
                    console.log(`El producto ${producto.nombre} no esta disponible`);
                }
                //validar la cantidad
                if( !nombresProductos.some(item => item.cantidad >= producto.cantidad)){
                    console.log(`El producto ${producto.nombre} no tiene suficiente stock`);
                }

            });
        }
        
    } catch (error) {
        console.log("error: ",error);
        return;
    }
    
    
}
// Estructura del pedido
const pedido = [
    {nombre:"Essence Mascara Lash Princess", cantidad:200},
    {nombre:"Eyeshadow Palette with Mirror", cantidad:2},
]
main(pedido);