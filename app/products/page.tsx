"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"

const products = [
  { title: "Expense Tracker", image: "/images/products/Expense-Tracker-240x300.webp" },
  { title: "E-commerce", image: "/images/products/Ecommerce-300x300.webp" },
  { title: "Ride Share", image: "/images/products/RideShare-240x300.png" },
  { title: "Asset Management", image: "/images/products/Asset-Management-300x300.webp" },
  { title: "Task Management", image: "/images/products/Task-Management-300x300.webp" },
  { title: "School Management System", image: "/images/products/School-management-300x300.webp" },
  { title: "Treal", image: "/images/products/Treal-300x300.webp" },
  { title: "Car Movement on Map", image: "/images/products/Car-Movement-On-Map-240x300.webp" },
  { title: "HRM", image: "/images/products/HRM-300x300.webp" },
  { title: "Help Desk", image: "/images/products/HelpDesk-300x300.webp" },
  { title: "Inventory Pro", image: "/images/products/Inventory-Pro-300x300.webp" },
  { title: "QRBar Scanner", image: "/images/products/QRBar-240x300.png" },
  { title: "OMS", image: "/images/products/OMS-300x300.webp" },
  { title: "Back Office AI", image: "/images/products/BackOffice-300x300.webp" },
  { title: "Creative Memo", image: "/images/products/Creative-Memo-240x300.webp" },
  { title: "Secure Vault", image: "/images/products/Vault-240x300.png" },
  { title: "Path Finder", image: "/images/products/Path-Finder-240x300.png" },
  { title: "Car Service", image: "/images/products/Car-Service-240x300.png" },
  { title: "Bone Memorization", image: "/images/products/Bone-Memorization-240x300.webp" },
  { title: "3D Bone Memorization", image: "/images/products/3D-Bone-Memorization-240x300.webp" },
  { title: "Bone Fractures", image: "/images/products/Bone-Fractures-240x300.webp" },
  { title: "Muscle Memorization", image: "/images/products/Muscle-Memorization-240x300.webp" },
]

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero — title only */}
        <section className="relative overflow-hidden px-5 py-10 sm:px-8 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/product-bg.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl md:text-6xl">Our Products</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white sm:text-base">
              Smart, secure, and scalable digital solutions for modern organizations.
            </p>
          </div>
        </section>

        {/* Product grid */}
        <section className="px-5 pb-16 pt-8 sm:px-8">
          <div className="mt-6 mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">Hero Products</h2>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <TiltCard key={product.title} intensity={8} className="rounded-2xl">
              <div
                className="group card-glow rounded-2xl border-2 border-white/60 bg-card/40 p-6 h-full"
              >
                <div className="air-float-wrap relative flex h-48 items-center justify-center rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={320}
                    height={220}
                    className="h-50 w-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-semibold text-primary sm:text-base">
                  {product.title}
                </p>
              </div>
              </TiltCard>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-7xl text-center">
            <TiltCard intensity={4} className="rounded-3xl">
              <div className="conic-border group relative overflow-hidden rounded-3xl border border-white/60 bg-linear-to-br from-primary/15 via-card to-card px-8 py-12 transition-colors duration-300 hover:border-primary/60">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  Explore Our Solutions!
                </h2>
                <div className="mt-6 flex justify-center">
                  <Link
                    href="/contact-us"
                    className="shine-sweep group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(41,179,255,0.8)] transition-transform hover:scale-[1.03]"
                  >
                    <span className="relative z-10">Schedule a Call</span>
                  </Link>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
