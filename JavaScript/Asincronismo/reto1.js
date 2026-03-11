// Validar pedido
async function validarPedido(pedido){
    console.log("Validando pedido...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pedido.productos.length === 0){
                reject("Pedido vacío");
            }
            resolve("Pedido válido");
        }, 1000);
    })
}
// Procesar pago
async function procesarPago(pedido){
    console.log("Procesando pago...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // valida si el metodo de pago es tarjeta nequi o efectivo
            const metodoPago = ["tarjeta","nequi","efectivo"];
            if (!metodoPago.includes(pedido.metodoPago)){
                reject("Metodo de pago no válido");
            }
            resolve("Pago aprobado");
        },2000);
    })
}
// Preparar envío
async function prepararEnvio(){
    console.log("Preparando envío...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Envío preparado");
        }, 1500);
    })
}

async function main(pedido){
    try {
        const validarPedido_result = await validarPedido(pedido);
        console.log(validarPedido_result);
        const procesarPago_result = await procesarPago(pedido);
        console.log(procesarPago_result);
        if (procesarPago_result === "Pago aprobado"){
            const prepararEnvio_result = await prepararEnvio();
            console.log(prepararEnvio_result);

        }
        else{
            console.log("Envío no enviado");
        }

    } catch (error) {
        console.log("error: ",error);
        return;
    }
    
    
}
// Estructura del pedido
const pedido = {
    productos: ["Hamburguesa", "Papas"],
    metodoPago: "tarjeta"
};

const pedido2 = {
    productos: [],
    metodoPago: "tarjeta"
};

main(pedido2);