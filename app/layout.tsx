import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { InteractiveGrid } from "../components/interactive-grid"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="relative font-sans antialiased">
        {/* Background interactive grid (visual only) */}
        <InteractiveGrid />

        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
