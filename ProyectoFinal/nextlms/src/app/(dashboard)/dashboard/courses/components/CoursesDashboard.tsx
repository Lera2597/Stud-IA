import { getCourses } from "@/lib/data/courses"
import { getTenantId } from "@/lib/getTenant"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function CoursesTable() {
    const tenantId = await getTenantId()
    const courses = await getCourses(tenantId)

    return (
        <div className="space-y-6">
            
            {courses.length === 0 && (
                <p className="text-muted-foreground">
                    No hay cursos aún
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <Card
                        key={course.id}
                        className="hover:scale-108 shadow-sm rounded-md hover:shadow-xl transition duration-200"
                    >
                        <CardHeader>
                            <CardTitle className="line-clamp-2">
                                {course.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Instructor
                                </p>

                                <p className="font-medium">
                                    {course.owner.name}
                                </p>
                            </div>

                            <div className="flex justify-between text-sm text-muted-foreground">
                                <p>
                                    {course._count.modules} módulos
                                </p>

                                <p>
                                    {course._count.enrollments} estudiantes
                                </p>
                            </div>

                            <Link href={`/dashboard/courses/${course.id}`}>
                                <Button className="w-full">
                                    Ver curso
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}