"use client"

import Image from "next/image"
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
import { PageHero } from "@/components/page-blocks"
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal"
import { TiltCard } from "@/components/tilt-card"
import { jobs } from "@/lib/jobs"

const lifePerks = [
  { icon: TrendingUp, title: "Growth", desc: "Continuous learning and career advancement opportunities" },
  { icon: Users, title: "Collaboration", desc: "Work with talented teams on innovative projects" },
  { icon: BookOpen, title: "Learning", desc: "Access to training, certifications, and mentorship" },
  { icon: Sparkles, title: "Flexibility", desc: "Work-life balance with flexible working arrangements" },
]

const lifeMoments = [
  { id: 1, rotation: "-rotate-6", pinColor: "border-[#b55405] bg-[#ff8f1f]", image: "/images/Apptriangle group photos/2024 (Annual Trip pic 1).jpg" },
  { id: 2, rotation: "rotate-6", pinColor: "border-[#154e8a] bg-[#2d84d6]", image: "/images/Apptriangle group photos/2024 (Annual trip pic 2).jpg" },
  { id: 3, rotation: "-rotate-3", pinColor: "border-[#2d6b27] bg-[#4da53f]", image: "/images/Apptriangle group photos/2024 (Annual Trip pic 3).jpg" },
  { id: 4, rotation: "rotate-4", pinColor: "border-[#8a0f12] bg-[#c2171e]", image: "/images/Apptriangle group photos/2024 (Iftar party pic 1).jpg" },
  { id: 5, rotation: "rotate-2", pinColor: "border-[#b55405] bg-[#ff8f1f]", image: "/images/Apptriangle group photos/2024 (Iftar party pic 2).jpg" },
  { id: 6, rotation: "-rotate-2", pinColor: "border-[#2d6b27] bg-[#4da53f]", image: "/images/Apptriangle group photos/2024 (New year celebration).jpg" },
  { id: 7, rotation: "rotate-5", pinColor: "border-[#154e8a] bg-[#2d84d6]", image: "/images/Apptriangle group photos/2024 (pahela falgun celebration ).jpg" },
  { id: 8, rotation: "-rotate-5", pinColor: "border-[#8a0f12] bg-[#c2171e]", image: "/images/Apptriangle group photos/2025 (Annual Trip pic 1).jpg" },
  { id: 9, rotation: "rotate-0", pinColor: "border-[#2d6b27] bg-[#4da53f]", image: "/images/Apptriangle group photos/2025 (Annual Trip pic 2).jpg" },
  { id: 10, rotation: "rotate-6", pinColor: "border-[#b55405] bg-[#ff8f1f]", image: "/images/Apptriangle group photos/2025 (Annual Trip pic 3).jpg" },
  { id: 11, rotation: "-rotate-1", pinColor: "border-[#154e8a] bg-[#2d84d6]", image: "/images/Apptriangle group photos/2025 (Annual Trip pic 4).jpg" },
  { id: 12, rotation: "rotate-5", pinColor: "border-[#8a0f12] bg-[#c2171e]", image: "/images/Apptriangle group photos/2025 (Cricket Tournament pic 1).JPG" },
  { id: 13, rotation: "-rotate-4", pinColor: "border-[#b55405] bg-[#ff8f1f]", image: "/images/Apptriangle group photos/2025 (Cricket Tournament pic 2).JPG" },
  { id: 14, rotation: "rotate-3", pinColor: "border-[#2d6b27] bg-[#4da53f]", image: "/images/Apptriangle group photos/2025 (Cricket tournament pic 3).jpg" },
  { id: 15, rotation: "-rotate-2", pinColor: "border-[#8a0f12] bg-[#c2171e]", image: "/images/Apptriangle group photos/2025 (New Year Celebration).jpg" },
  { id: 16, rotation: "rotate-4", pinColor: "border-[#154e8a] bg-[#2d84d6]", image: "/images/Apptriangle group photos/2025 (Pahela Baishakh celebration).JPG" },
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
                      className="card-glow group flex h-full min-h-32 items-center justify-between gap-5 rounded-2xl border-2 border-white/60 px-6 py-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(41,179,255,0.5)] sm:min-h-36 sm:px-7"
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
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-14">
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

            <StaggerGroup className="mt-20 sm:mt-24 lg:mt-28" staggerChildren={0.04}>
              <div className="overflow-hidden rounded-[2rem] border-[10px] border-[#4a2d19] bg-[#8f6032] p-4 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.75)] sm:p-6 lg:p-8">
                <div className="rounded-[1.5rem] border border-black/20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_24%),repeating-radial-gradient(circle_at_center,rgba(70,42,20,0.2)_0_1px,transparent_1px_7px),linear-gradient(135deg,#a97342_0%,#8f6032_42%,#74491f_100%)] p-4 sm:p-5 lg:p-6">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
              {lifeMoments.map((moment) => (
                <StaggerItem key={moment.id}>
                  <div className={`relative mx-auto w-full max-w-[250px] ${moment.rotation} transition-transform duration-300`}>
                    <div className={`absolute left-1/2 top-0 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border shadow-[0_2px_5px_rgba(0,0,0,0.35)] ${moment.pinColor}`} />
                    <div className="rounded-[0.4rem] bg-white p-2 pb-5 shadow-[0_14px_20px_rgba(0,0,0,0.28)]">
                      <div className="relative aspect-square w-full overflow-hidden bg-black shadow-inner shadow-black/50">
                        <Image
                          src={moment.image}
                          alt={`Apptriangle group photo ${moment.id}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 250px"
                        />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
                  </div>
                </div>
              </div>
            </StaggerGroup>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
