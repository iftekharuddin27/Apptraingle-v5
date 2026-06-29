"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import type { ReactNode } from "react"
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal"
import { TiltCard } from "@/components/tilt-card"

export function PageHero({
  eyebrow,
  title,
  description,
  highlight,
  wide,
  bgImage,
  bgFull,
  whiteHighlight,
}: {
  eyebrow?: string
  title: ReactNode
  description?: string
  highlight?: string
  wide?: boolean
  bgImage?: string
  bgFull?: boolean
  whiteHighlight?: boolean
}) {
  return (
    <section className="relative overflow-hidden">
      {bgImage ? (
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: bgFull ? "100% auto" : "90%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        </>
      ) : (
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      )}
      <div className={`relative mx-auto px-5 py-12 text-center sm:px-8 sm:py-12 ${wide ? "max-w-7xl" : "max-w-5xl"}`}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          {title}{" "}
          {highlight && (
            whiteHighlight ? (
              <span>{highlight}</span>
            ) : (
              <span className="bg-linear-to-r from-primary to-brand-blue-soft bg-clip-text text-transparent">
                {highlight}
              </span>
            )
          )}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={`mx-auto mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg ${wide ? "max-w-5xl" : "max-w-2xl"}`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}

export function BenefitsList({
  title,
  items,
  highlight,
}: {
  title: string
  items: { title: string; desc?: string }[]
  highlight?: string
}) {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}{" "}
            {highlight && (
              <span className="bg-linear-to-r from-primary to-brand-blue-soft bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.08}>
          {items.map((it, i) => (
            <StaggerItem key={it.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`h-full rounded-2xl border p-6 transition-shadow hover:shadow-[0_0_40px_-10px_rgba(41,179,255,0.5)] ${
                  i === 1 ? "card-glow-active border-primary/50" : "card-glow border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    i === 1 ? "bg-white/15 text-white" : "bg-primary/15 text-primary"
                  }`}
                >
                  <Check className="h-4 w-4" />
                </div>
                <h3
                  className={`mt-6 font-display text-base font-semibold leading-tight ${
                    i === 1 ? "text-white" : "text-foreground"
                  }`}
                >
                  {it.title}
                </h3>
                {it.desc && (
                  <p className={`mt-2 text-sm ${i === 1 ? "text-white/85" : "text-muted-foreground"}`}>{it.desc}</p>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export function ApproachSection({ title, steps }: { title: string; steps: string[] }) {
  return (
    <section className="section-blue relative overflow-hidden py-8">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </ScrollReveal>
        <StaggerGroup
          as="ol"
          className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.1}
        >
          {steps.map((step, i) => (
            <StaggerItem as="li" key={step}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="h-full rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowRight className="h-5 w-5 text-white/60" />
                </div>
                <p className="mt-8 font-display text-base font-semibold leading-tight text-white">{step}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export function ServiceCta({ title, href = "https://bookings.cloud.microsoft/book/MeetwithApptriangle@apptriangle.com/?ismsaljsauthenabled", cta = "Schedule a Call" }: { title: string; href?: string; cta?: string }) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <TiltCard intensity={4} className="rounded-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-linear-to-br from-primary/20 via-card to-card p-10 sm:p-16 transition-colors duration-300 hover:border-primary/60">
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
              </h2>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_rgba(41,179,255,0.7)]"
              >
                {cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
