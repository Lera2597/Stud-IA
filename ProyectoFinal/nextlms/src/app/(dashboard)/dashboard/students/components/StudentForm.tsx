"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function StudentForm() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch("/api/students", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
        
        if (res.ok) {
            router.push("/dashboard/students")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <Input
                placeholder="Nombre del estudiante"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <Input
                placeholder="Correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <Input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <Button type="submit"> 
                Agregar estudiante
            </Button>

        </form>
    )
}