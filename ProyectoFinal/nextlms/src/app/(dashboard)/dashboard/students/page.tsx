
import { Suspense } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import StudentsTable from "./components/StudentsTable"

export default function StudentsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Estudiantes</h1>

            <div className="flex justify-between">
                <p className="text-muted-foreground">
                    Gestiona tus estudiantes
                </p>
                <Link
                    href="/dashboard/students/new"
                    // className={buttonVariants()}
                    className={buttonVariants({ variant: "default", size: "lg" })}
                    >
                    + Agregar estudiante
                </Link>
            </div>

            <Suspense fallback={<div>Cargando estudiantes...</div>}>
                <StudentsTable />
            </Suspense>

        </div>
    )
}