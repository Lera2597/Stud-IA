'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DeleteUserButtonProps {
    id: string;
    nombre: string;
}

export default function DeleteUserButton({ id, nombre }: DeleteUserButtonProps) {
    const router = useRouter();
    const [cargando, setCargando] = useState(false);

    const handleEliminar = async () => {
        // Confirmación
        if (!confirm(`¿Estás seguro de que deseas eliminar a ${nombre}?`)) {
            return;
        }

        setCargando(true);

        try {
            const response = await fetch(`/api/students/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al eliminar');
            }

            // Revalidar la página para refrescar los datos del servidor
            router.refresh();
        } catch (error) {
            const mensaje = error instanceof Error ? error.message : 'Error desconocido';
            alert(`Error: ${mensaje}`);
            console.error('Error:', error);
        } finally {
            setCargando(false);
        }
    };

    return (
        <button
            onClick={handleEliminar}
            disabled={cargando}
            className={`px-4 py-2 rounded font-medium text-white transition-all ${cargando
                    ? 'bg-red-400 cursor-not-allowed opacity-70'
                    : 'bg-red-500 hover:bg-red-600 active:bg-red-700'
                }`}
        >
            {cargando ? 'Eliminando...' : 'Eliminar'}
        </button>
    );
}
