import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, ServiceCta } from "@/components/page-blocks"
import { ArrowUpRight } from "lucide-react"

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
              {studies.map((s, i) => {
                const highlighted = i % 5 === 1
                return (
                  <article
                    key={i}
                    className={`flex flex-col rounded-2xl border p-7 ${
                      highlighted ? "card-glow-active border-primary/50" : "card-glow border-border"
                    }`}
                  >
                    <h2
                      className={`font-display text-xl font-semibold leading-tight ${
                        highlighted ? "text-white" : "text-foreground"
                      }`}
                    >
                      {s.title}
                    </h2>

                    <Block label="Problem" value={s.problem} highlighted={highlighted} />
                    <Block label="Solution" value={s.solution} highlighted={highlighted} />
                    <Block label="Impact" value={s.impact} highlighted={highlighted} />

                    <span
                      className={`group mt-6 inline-flex items-center gap-1 text-sm font-medium ${
                        highlighted ? "text-white" : "text-primary"
                      }`}
                    >
                      Read Full Story
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </span>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <ServiceCta title="Ready to Write Your Success Story?" />
      </main>
      <SiteFooter />
    </>
  )
}

function Block({ label, value, highlighted }: { label: string; value: string; highlighted?: boolean }) {
  return (
    <div className="mt-5">
      <p
        className={`text-[10px] font-semibold uppercase tracking-wider ${
          highlighted ? "text-white/80" : "text-primary"
        }`}
      >
        {label}
      </p>
      <p className={`mt-1 text-sm leading-relaxed ${highlighted ? "text-white/90" : "text-muted-foreground"}`}>
        {value}
      </p>
    </div>
  )
}
