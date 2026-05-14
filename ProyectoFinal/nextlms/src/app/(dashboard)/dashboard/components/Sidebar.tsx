import Link from "next/link"
import Image from "next/image"
import getTenant from "@/lib/data/tenants"
import { LayoutDashboard, BookOpen, Users, Settings } from "lucide-react"
import { Separator } from "@/components/ui/separator"

import { auth } from "@/lib/auth"

export async function Sidebar() {
  const session = await auth()
  if (!session?.user?.tenantId) {
    throw new Error("Usuario sin tenant asignado")
  }
  // console.log("***SESSION", session)
  const tenantId = session.user.tenantId
  const tenant = await getTenant(tenantId)
  // console.log("***TENANT", tenant)
  return (
    // <aside className="w-64 border-r bg-background hidden md:flex flex-col">
    <aside className="w-64 border-r bg-gray-200 hidden md:flex flex-col">


      {/* LOGO */}
      <div className="flex justify-center font-bold text-lg ">
        <Image 
          src="/logo.png" 
          alt="Logo de DevLoop" 
          width={200} 
          height={80} 
          priority
          // className="border border-sky-500"
        />
      </div>

      {/* TENANT */}
      <div className=" -mt-6 mb-4 text-shadow-lg flex justify-center text-sm">
        {tenant?.name}
      </div>

      {/* <Separator /> */}
      {/* NAV */}
      <nav className="flex-1 px-4 space-y-1">

        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
        >
          <LayoutDashboard size={18} />
          Overview
        </Link>

        <Link
          href="/dashboard/courses"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
        >
          <BookOpen size={18} />
          Courses
        </Link>

        <Link
          href="/dashboard/students"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
        >
          <Users size={18} />
          Students
        </Link>

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
        >
          <Settings size={18} />
          Settings
        </Link>

      </nav>

    </aside>
  )
}