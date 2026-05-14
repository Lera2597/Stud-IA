
import { getStudents} from "@/lib/data/students"
import { getTenantId } from "@/lib/getTenant"

import DeleteUserButton from "@/components/DeleteUserButton"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function StudentsTable() {
    const tenantId = await getTenantId()
    const students = await getStudents(tenantId)
    return (
        <Card>
            <CardHeader>
                <CardTitle>Lista de estudiantes</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">

                    {students.length === 0 && (
                        <p className="text-muted-foreground">
                            No hay estudiantes
                        </p>
                    )}

                    {students.map((student) => (
                        <div
                            key={student.id}
                            className="flex items-center justify-between border rounded-md p-4"
                        >
                            <div>
                                <h3 className="font-semibold">
                                    {student.name}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {student.email}
                                </p>
                            
                                <DeleteUserButton 
                                    id={student.id} 
                                    nombre={student.name}
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </CardContent>
        </Card>
    )
}