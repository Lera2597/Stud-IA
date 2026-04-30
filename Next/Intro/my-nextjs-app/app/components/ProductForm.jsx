"use client"
import { useState } from "react";
export default function ProductForm() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('api/productos', {
            method: 'POST',
            body: JSON.stringify({title})
        })
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                placeholder="Nombre del producto"
            />
            <button>Guardar</button>
        </form>
    )
}