import { Suspense } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import CoursesTable from "./components/CoursesTable"
import CourserDashboard from "./components/CoursesDashboard"

export default function CoursesPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Courses</h1>

            <div className="flex justify-between">
                <p className="text-muted-foreground">
                    Administra tus cursos
                </p>
                <Link
                    href="/dashboard/courses/new"
                    className={buttonVariants()}
                    >
                    + Crear curso
                </Link>
            </div>

            <Suspense fallback={<div>Cargando cursos...</div>}>
                {/* <CoursesTable /> */}
                <CourserDashboard />
            </Suspense>

        </div>
    )
}