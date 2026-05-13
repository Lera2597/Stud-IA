import { JetBrains_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react"
import { AuthProvider } from "@/components/providers/session-provider"
import { cn } from "@/lib/utils";

const robotoSlab = Roboto_Slab({subsets:['latin'],variable:'--font-serif'});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(jetbrainsMono.variable, "font-serif", robotoSlab.variable)}
    >
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
