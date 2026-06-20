import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ParticleBackground from "@/components/particle-background"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Apptriangle Limited — Empowering Businesses Through People, Apps & Innovation",
  description:
    "Apptriangle is a global technology service provider delivering Managed IT, Staff Augmentation, Business Process Automation, App Development, Power Platform, and Technology Consulting.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#07172e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} bg-black`}>
      <body className="relative z-0 font-sans antialiased bg-black">
        {/* Background particle effect (visual only) */}
        <ParticleBackground />

        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
