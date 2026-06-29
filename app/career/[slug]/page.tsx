import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CareerApplyForm } from "@/components/career-apply-form"
import { TiltCard } from "@/components/tilt-card"
import { jobs } from "@/lib/jobs"

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }))
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const job = jobs.find((j) => j.slug === slug)
  if (!job) notFound()

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        {/* Back link */}
        <Link
          href="/career"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Careers
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            {/* Job details */}
            <article className="card-glow rounded-2xl border-2 border-white/60 p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(41,179,255,0.5)]">
                <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">{job.title}</h1>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Location:</span> {job.location}</p>
                  <p><span className="font-semibold text-foreground">Job Type:</span> {job.type}</p>
                  <p><span className="font-semibold text-foreground">Experience Level:</span> {job.level}</p>
                </div>

                <div className="mt-8 space-y-8">
                  <Section title="About Us">
                    <p className="text-sm leading-relaxed text-muted-foreground">{job.about}</p>
                  </Section>

                  <Section title="Responsibilities">
                    <ul className="space-y-2">
                      {job.responsibilities.map((item) => (
                        <ListItem key={item} text={item} />
                      ))}
                    </ul>
                  </Section>

                  <Section title="Requirements">
                    <ul className="space-y-2">
                      {job.requirements.map((item) => (
                        <ListItem key={item} text={item} />
                      ))}
                    </ul>
                  </Section>

                  <Section title={job.preferredTitle}>
                    <ul className="space-y-2">
                      {job.preferred.map((item) => (
                        <ListItem key={item} text={item} />
                      ))}
                    </ul>
                  </Section>

                  <Section title={job.benefitsTitle}>
                    <ul className="space-y-2">
                      {job.benefits.map((item) => (
                        <ListItem key={item} text={item} />
                      ))}
                    </ul>
                  </Section>
                </div>
            </article>
          </div>

          <aside className="lg:sticky lg:top-24">
            {job.expired ? <ExpiredNotice /> : <CareerApplyForm jobTitle={job.title} />}
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function ExpiredNotice() {
  return (
    <TiltCard intensity={4} className="rounded-2xl">
      <div className="rounded-2xl border-2 border-white/60 bg-card/60 p-7 text-sm text-muted-foreground backdrop-blur-xl">
        Sorry! This job has expired.
      </div>
    </TiltCard>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-display text-lg font-semibold text-primary">{title}</h2>
      {children}
    </section>
  )
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      {text}
    </li>
  )
}
