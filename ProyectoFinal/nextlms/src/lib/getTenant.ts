import { auth } from "@/lib/auth"
import getTenants from "@/lib/data/tenants"

export async function getTenantId() {
    const session = await auth()
    // console.log("SESSION", session)

    if (!session?.user?.tenantId) {
        throw new Error("No tenant")
    }

    return session.user.tenantId
}
// export async function getTenantName() {
//     const tenantId = await getTenantId()
//     const tenants = await getTenants(tenantId)
//     return tenants[0]?.name
// }