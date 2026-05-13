import CourseForm from "../components/StudentForm"

export default function NewStudentPage() {
    return (
        <div className="space-y-6 max-w-2xl">

            <div>
                <h1 className="text-3xl font-bold">Agregar estudiante</h1>
                <p className="text-muted-foreground">
                    Configura la información básica del estudiante
                </p>
            </div>

            <CourseForm />

        </div>
    )
}