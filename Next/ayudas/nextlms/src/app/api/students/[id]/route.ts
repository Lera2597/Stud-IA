import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // o la forma en que importas prisma

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } =  await params;

        // Validar que el ID no esté vacío
        if (!id) {
            return NextResponse.json(
                { error: 'ID de estudiante requerido' },
                { status: 400 }
            );
        }

        // Eliminar el estudiante
        await prisma.user.delete({
            where: { id }
        });

        return NextResponse.json(
            { success: true, message: 'Estudiante eliminado correctamente' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error al eliminar estudiante:', error);

        return NextResponse.json(
            { error: 'Error al eliminar el estudiante' },
            { status: 500 }
        );
    }
}