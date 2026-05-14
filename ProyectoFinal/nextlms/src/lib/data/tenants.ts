import prisma from "@/lib/prisma"
import { cache } from "react"

const getTenants = cache(async (tenantId: string) => {
    return prisma.tenant.findUnique({
        where: {
            id: tenantId,
        },
    })
})

export default getTenants
