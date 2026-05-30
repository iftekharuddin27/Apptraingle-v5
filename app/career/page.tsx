"use client"

import Link from "next/link"
import { ArrowUpRight, BookOpen, Sparkles, TrendingUp, Users } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, ServiceCta } from "@/components/page-blocks"
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal"
import { TiltCard } from "@/components/tilt-card"
import { jobs } from "@/lib/jobs"

const lifePerks = [
  { icon: TrendingUp, title: "Growth", desc: "Continuous learning and career advancement opportunities" },
  { icon: Users, title: "Collaboration", desc: "Work with talented teams on innovative projects" },
  { icon: BookOpen, title: "Learning", desc: "Access to training, certifications, and mentorship" },
  { icon: Sparkles, title: "Flexibility", desc: "Work-life balance with flexible working arrangements" },
]

export default function CareerPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Grow With"
          highlight="Apptriangle"
          description="Join a team that values innovation, collaboration, and continuous learning"
        />

        {/* Job Openings */}
        <section className="pt-4 pb-10">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.07}>
              {jobs.map((job, i) => (
                <StaggerItem key={`${job.slug}-${i}`}>
                  <TiltCard intensity={10} className="rounded-2xl">
                    <Link
                      href={`/career/${job.slug}`}
                      className="group flex aspect-square flex-col justify-between rounded-2xl border border-white/30 bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)]"
                    >
                      <h3 className="font-display text-base font-semibold text-primary">
                        {job.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm text-white">
                        More Details
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Life at Apptriangle */}
        <section className="py-6">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal className="mb-6 text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Life at{" "}
                <span className="bg-linear-to-r from-primary to-brand-blue-soft bg-clip-text text-transparent">
                  Apptriangle
                </span>
              </h2>
            </ScrollReveal>

            <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.08}>
              {lifePerks.map((perk) => {
                const Icon = perk.icon
                return (
                  <StaggerItem key={perk.title}>
                    <TiltCard intensity={10} className="h-full rounded-2xl">
                      <div className="flex h-full flex-col rounded-2xl border border-white/30 bg-card/60 p-7 text-center backdrop-blur-xl transition-all duration-300 hover:border-white/60">
                        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-5 font-display text-lg font-semibold text-primary">{perk.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white">{perk.desc}</p>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                )
              })}
            </StaggerGroup>
          </div>
        </section>

        <ServiceCta
          title="Join Us in this exciting journey of innovation and excellence!"
          href="/contact-us"
          cta="Apply Now"
        />
      </main>
      <SiteFooter />
    </>
  )
}
