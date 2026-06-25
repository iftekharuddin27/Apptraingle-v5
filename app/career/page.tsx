"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  BookOpen,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
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
          whiteHighlight
          description="Join a team that values innovation, collaboration, and continuous learning"
          bgImage="/images/career-bg.png"
          bgFull
        />

        {/* Job Openings */}
        <section className="pt-10 pb-7 sm:pt-12">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.07}>
              {jobs.map((job, i) => (
                <StaggerItem key={`${job.slug}-${i}`}>
                  <TiltCard intensity={7} animatedBorder={false} className="h-full rounded-2xl">
                    <Link
                      href={`/career/${job.slug}`}
                      className="group flex min-h-32 items-center justify-between gap-5 rounded-2xl border-2 border-white/60 bg-card/60 px-6 py-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_30px_-10px_rgba(41,179,255,0.35)] sm:min-h-36 sm:px-7"
                    >
                      <div>
                        <h3 className="font-display text-lg font-semibold leading-snug text-primary">
                          {job.title}
                        </h3>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300">
                          More Details
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Life at Apptriangle */}
        <section className="pt-16 pb-6 sm:pt-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal className="mb-6 text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Life at{" "}
                <span className="bg-linear-to-r from-primary to-brand-blue-soft bg-clip-text text-transparent">
                  Apptriangle
                </span>
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                What makes us a great place to work
              </p>
            </ScrollReveal>

            <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.08}>
              {lifePerks.map((perk) => {
                const Icon = perk.icon
                return (
                  <StaggerItem key={perk.title}>
                    <TiltCard intensity={10} className="h-full rounded-2xl">
                      <div className="flex h-full flex-col rounded-2xl border-2 border-white/60 bg-card/60 p-7 text-center backdrop-blur-xl transition-all duration-300 hover:border-primary/50">
                        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-5 font-display text-lg font-semibold text-primary">{perk.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.desc}</p>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                )
              })}
            </StaggerGroup>
          </div>
        </section>

        <div className="mt-10">
          <ServiceCta
            title="Join Us in this exciting journey of innovation and excellence!"
            href="/contact-us"
            cta="Apply Now"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
