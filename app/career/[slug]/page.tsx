import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Briefcase, MapPin, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
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
      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        {/* Back link */}
        <Link
          href="/career"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Careers
        </Link>

        {/* Header card */}
        <TiltCard intensity={8} className="rounded-2xl">
          <div className="rounded-2xl border border-white/30 bg-card/60 p-8 backdrop-blur-xl">
            <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">{job.title}</h1>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-sm text-muted-foreground">
                <Briefcase className="h-3.5 w-3.5" />
                {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-sm text-muted-foreground">
                <Star className="h-3.5 w-3.5" />
                {job.level}
              </span>
            </div>
          </div>
        </TiltCard>

        {/* Body sections */}
        <div className="mt-4 space-y-4">
          {job.about && (
            <Section title="About the Role">
              <p className="text-sm leading-relaxed text-white">{job.about}</p>
            </Section>
          )}

          <Section title="Key Responsibilities">
            <ul className="space-y-2">
              {job.responsibilities.map((item) => (
                <ListItem key={item} text={item} />
              ))}
            </ul>
          </Section>

          <Section title="Required Qualifications">
            <ul className="space-y-2">
              {job.requirements.map((item) => (
                <ListItem key={item} text={item} />
              ))}
            </ul>
          </Section>

          {job.preferred && job.preferred.length > 0 && (
            <Section title="Preferred Skills">
              <ul className="space-y-2">
                {job.preferred.map((item) => (
                  <ListItem key={item} text={item} />
                ))}
              </ul>
            </Section>
          )}

          <Section title="What We Offer">
            <ul className="space-y-2">
              {job.benefits.map((item) => (
                <ListItem key={item} text={item} />
              ))}
            </ul>
          </Section>
        </div>

        {/* Apply CTA */}
        <TiltCard intensity={6} className="mt-6 rounded-2xl">
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center backdrop-blur-xl">
            <h2 className="font-display text-xl font-semibold text-foreground">Interested in this role?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Send us your application and we&apos;ll get back to you.</p>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_rgba(41,179,255,0.7)] transition-all hover:scale-[1.03]"
            >
              Apply Now
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </TiltCard>
      </main>
      <SiteFooter />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <TiltCard intensity={6} className="rounded-2xl">
      <div className="rounded-2xl border border-white/20 bg-card/60 p-7 backdrop-blur-xl">
        <h2 className="mb-4 font-display text-lg font-semibold text-primary">{title}</h2>
        {children}
      </div>
    </TiltCard>
  )
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-relaxed text-white">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      {text}
    </li>
  )
}
