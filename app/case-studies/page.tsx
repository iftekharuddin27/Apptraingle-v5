import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, ServiceCta } from "@/components/page-blocks"
import { ArrowUpRight, BadgeCheck, Cpu, Database, LayoutGrid, ShieldCheck, Sparkles, Users } from "lucide-react"

const studies = Array.from({ length: 6 }).map(() => ({
  title: "Enterprise Digital Transformation",
  problem: "Legacy systems causing slow processing and poor user experience",
  solution: "Cloud migration, microservices architecture, and modern web applications",
  impact: "300% faster transactions, 50% cost reduction, 95% customer satisfaction",
}))

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Case Studies"
          title="Real problems."
          highlight="Measurable results."
          description="How we solved real problems and delivered measurable results."
        />

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {studies.map((s, i) => (
                <article
                  key={i}
                  className="card-glow flex flex-col rounded-2xl border border-border p-7 transition-colors hover:border-primary/40"
                >
                  <h2 className="font-display text-xl font-semibold leading-tight text-foreground">
                    {s.title}
                  </h2>

                  <Block label="Problem" value={s.problem} />
                  <Block label="Solution" value={s.solution} />
                  <Block label="Impact" value={s.impact} />

                  <span className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read Full Story
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Technology Expertise
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">Our team's technical capabilities</p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="flex min-h-30 flex-col items-center justify-center rounded-2xl border border-primary/15 bg-card/60 px-6 py-5 text-center backdrop-blur transition-colors hover:border-primary/40"
                  >
                    <Icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-3 font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{card.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Certifications
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">Recognized by industry leaders</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center justify-center rounded-2xl border border-primary/15 bg-card/60 px-4 py-5 text-center text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCta title="Ready to Write Your Success Story?" />
      </main>
      <SiteFooter />
    </>
  )
}

const expertiseCards = [
  { title: "Cloud Platforms", desc: "AWS, Azure, GCP", icon: Cpu },
  { title: "Development", desc: "React, Laravel, Python, Next.js", icon: LayoutGrid },
  { title: "Databases", desc: "SQL, MongoDB, Cosmos", icon: Database },
  { title: "Security", desc: "Zero Trust, IAM, DLP", icon: ShieldCheck },
  { title: "Automation", desc: "Power Platform, AI Chatbot", icon: Sparkles },
  { title: "IT Support", desc: "Microsoft, IceWarp", icon: Users },
]

const certifications = [
  "ISO 27001 Certified",
  "Microsoft Gold Partner",
  "AWS Advanced Consulting Partner",
  "Cisco Select Partner",
  "Google Cloud Partner",
  "Zoho Authorized Partner",
]

function Block({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {value}
      </p>
    </div>
  )
}
