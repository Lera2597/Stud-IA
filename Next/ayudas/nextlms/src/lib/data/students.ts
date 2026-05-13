import prisma from "@/lib/prisma"
import { cache } from "react"

// import { revalidatePath } from 'next/cache';

export const getStudents = cache(async (tenantId: string) => {
    // retornar usuarios con rol STUDENT y tenantId
    return prisma.user.findMany({
        where: {
            tenantId,
            role: "STUDENT",
        },

        orderBy: {
            createdAt: "desc",
        },
    })
})
export function deleteUser(userId: string) {
    console.log(userId);
    return "ok";
    // try {
    //     // Con Prisma:
    //     await prisma.user.delete({
    //         where: { id: userId },
    //     });

    //     // O con otra BD (MongoDB, etc.)
    //     // await collection.deleteOne({ _id: new ObjectId(userId) });

    //     // Revalidar la página para actualizar sin refresh
    //     //revalidatePath('/users');

    //     return { success: true };
    // } catch (error) {
    //     throw new Error('No se pudo eliminar el usuario');
    // }
}
