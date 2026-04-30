import Link from "next/link";
import ProductForm from "../components/ProductForm";
// const ps = [
//     {id: 1, nombre: "Producto 1", precio: 1000},
//     {id: 2, nombre: "Producto 2", precio: 2000}
// ]

// async function getProductos() {
//     const res =  await fetch('https://fakestoreapi.com/products',{
//         cache: 'no-cache', // se le dice a Next que no cachee la informacion, para que se actualice en cada peticion
//         next: { revalidate: 10} // establece un valor de tiempo de actualizacion, cada cuanto se necesita obtener datos actualizados
//     })
//     return res.json()
// }

async function getProductos() {
    const res =  await fetch('http://localhost:3000/api/productos')
    return res.json()
}
export default async function Productos() {
    const productos = await getProductos()
    return (
        <div>
            <h1> Pagina de Productos</h1>

            <h2> Nuevo producto</h2>
            <ProductForm/>
            <ul>
                {productos.map((p) => (
                    <li key={p.id}>
                        <Link href={`/productos/${p.id}`}>
                            {p.title}
                        </Link>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}