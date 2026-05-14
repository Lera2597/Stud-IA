
import { auth } from "@/lib/auth"
import { Suspense } from "react"
import Stats from "./components/Stats"
import RecentActivity from "./components/RecentActivity"

export default async function DashboardPage() {
    const session = await auth()
    // console.log(session)

    if (!session?.user?.tenantId) {

      throw new Error("Usuario sin tenant asignado")
    }

    const tenantId = session.user.tenantId

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Resumen general de DevLoop
        </p>
      </div>

      {/* STATS con Suspense */}
      <Suspense fallback={<div>Cargando métricas...</div>}>
        <Stats tenantId={tenantId} />
      </Suspense>

      {/* ACTIVIDAD con Suspense */}
      <Suspense fallback={<div>Cargando actividad...</div>}>
        <RecentActivity tenantId={tenantId} />
      </Suspense>

    </div>
  )
}