let productos: any = [
    {
        id: 1,
        title: "Producto 1",
        price: 1000
    },
    {
        id: 2,
        title: "Producto 2",
        price: 2000
    }
]
export async function GET(){
    return Response.json(productos)
}

export async function POST(request: Request){
    const body = await request.json()
    const nuevoProducto = {
        id: productos.length + 1,
        title: body.title,
        price: body.price
    }
    productos.push(nuevoProducto)
    return Response.json(nuevoProducto)
}