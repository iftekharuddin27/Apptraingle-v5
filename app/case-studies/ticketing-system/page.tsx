import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  SquareCheckBig,
  Inbox,
  BarChart,
  UserX,
  FileWarning,
  Database,
  Users,
  ArrowRightLeft,
  ShieldCheck,
  LayoutDashboard,
  Smile,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
import { ServiceCta } from "@/components/page-blocks"

const painPoints = [
  {
    icon: Inbox,
    title: "No Central Intake",
    desc: "Requests arrived via different channels, so many tasks were invisible to the system or duplicated.",
  },
  {
    icon: BarChart,
    title: "Weak KPI Visibility",
    desc: "Without consistent logging and statuses, metrics (FRT, MTTR, SLA adherence) were unreliable.",
  },
  {
    icon: UserX,
    title: "Manual Assignment & Bottlenecks",
    desc: "Team leads spent time chasing people to take ownership; self-assignment wasn't standardized.",
  },
  {
    icon: FileWarning,
    title: "Reporting Pain",
    desc: "Management needed category-, priority-, and trend-level reports, but data wasn't structured.",
  },
]

const effects = [
  {
    icon: Database,
    title: "One Source of Truth",
    desc: "All requests (web + email) become single tickets, eliminating duplicates and invisible work.",
  },
  {
    icon: Users,
    title: "Faster, Fair Assignment",
    desc: "Manager assignment and self-assignment balance load and create clear accountability.",
  },
  {
    icon: ArrowRightLeft,
    title: "Painless Handovers",
    desc: "Ticket transfer protects momentum during leave or shifts, with full audit trail intact.",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy KPIs & SLAs",
    desc: "Automatic tracking builds credible metrics for performance reviews and service improvements.",
  },
  {
    icon: LayoutDashboard,
    title: "Management-Ready Reports",
    desc: "Exportable dashboards show volumes, trends, categories, priorities, and SLA adherence for decision-making.",
  },
  {
    icon: Smile,
    title: "Better User Experience",
    desc: "Users see status updates, receive notifications, and get faster, more consistent resolutions.",
  },
]

const faqs = [
  {
    q: "Can users still email support?",
    a: "Yes, emails automatically create tickets; the system links replies to the same ticket to maintain history.",
  },
  {
    q: "How are KPIs calculated?",
    a: "The app uses timestamps (created, first response, status changes, closed) to compute FRT, MTTR, SLA met/breached, reopen rate, and backlog.",
  },
  {
    q: "Who can assign or transfer tickets?",
    a: "Line managers can assign and transfer; engineers can self-assign and request transfer if they're unavailable.",
  },
  {
    q: "Does it support categories and priorities?",
    a: "Yes, category, sub-category, priority, impact, and attachments are captured for consistent triage and reporting.",
  },
  {
    q: "Is the ticket history preserved?",
    a: "Always. Comments, actions, files, and audit trail remain intact across assignment and transfer.",
  },
]

export default function TicketingSystemPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left – copy */}
              <div>
                <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl xl:text-5xl">
                  Log Once. Assign Fast.{" "}
                  <span>Resolve Confidently.</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  A simple, reliable ticketing system that centralizes requests, protects KPIs,
                  and makes handovers painless.
                </p>
              </div>

              {/* Right – image */}
              <div className="relative overflow-hidden rounded-2xl bg-card/60 shadow-2xl backdrop-blur">
                <Image
                  src="/images/case-studies/6-1.webp"
                  alt="Ticketing System"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── How the Business Works ── */}
        <section className="py-7 bg-card/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              How the Business{" "}
              <span>Works</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-left">
              <p>
                This is the story of a financial organization where the IT team lived in a storm of
                requests. Questions arrived from every direction—emails to different inboxes, quick
                messages, phone calls, and hallway asks. The work was real. The path was messy.
                Without one place to capture everything, tickets were hard to log and easy to miss.
                Metrics lost meaning. First response time felt like a guess. Mean time to resolve
                wandered. Backlog numbers didn&apos;t match the day-to-day feel. Leadership asked
                for a steady picture—true volume, clear categories, and honest trends. The team
                needed a single source of truth for all IT work, plus a way to assign, hand over,
                and cover leave without breaking the rhythm.
              </p>
            </div>
          </div>
        </section>

        {/* ── Where Work Got Stuck ── */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-center text-foreground sm:text-3xl">
              Where Work Got{" "}
              <span>Stuck</span>
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {painPoints.map((p) => {
                const Icon = p.icon
                return (
                  <TiltCard key={p.title} intensity={6} className="rounded-xl">
                    <div className="flex items-start gap-4 rounded-xl border-2 border-white/60 bg-card/50 px-5 py-4 backdrop-blur transition-colors hover:border-primary/40">
                      <Icon className="mt-0.5 h-7 w-7 shrink-0 text-white" />
                      <div>
                        <p className="font-semibold text-foreground">{p.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Key Components ── */}
        <section className="py-7 bg-card/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-center text-foreground sm:text-3xl">
              Key Components and{" "}
              <span>Considerations</span>
            </h2>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/case-studies/6-2.webp"
                  alt="Key components"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Centralize all channels into one ticket record. Enable manager assignment and
                  self-assignment—with clear ownership. Provide formal transfer when an engineer is
                  on leave or unavailable. Track KPIs &amp; SLAs automatically. Generate credible
                  reports for leadership and{" "}
                  <span className="font-medium">audit</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What We Have Done ── */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What We Have{" "}
              <span>Done</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-left">
              <p>
                Apptriangle Limited stepped in and built a Helpdesk Ticket Management System as a
                clean web app. From the user&apos;s point of view, it was simple: raise a request
                in the app—or send an email to the support address—and the system turns that message
                into a ticket with the right category and priority, like placing a train car onto the
                proper track. Managers can direct tickets to specific engineers, and engineers can
                pick up work from a queue when they&apos;re ready. The standout part is structured
                handover: when someone is on leave or unavailable, ownership passes with all history,
                attachments, and comments intact, so the fix continues without a reset—like a relay
                baton handed smoothly mid-race.
              </p>
              <p>
                Behind the scenes, KPIs and SLAs tick like a heartbeat—first response, resolution
                time, met vs breached, reopened rates—all measured automatically. Dashboards give a
                truthful view by category, priority, requester, assignee, and time period, and
                reports export without struggle. What once felt like traffic on unmarked roads became
                a single, well-lit lane: requests enter one door, move with clear ownership, and
                leave with a recorded outcome.
              </p>
              <p>
                The team kept its craft—listening, fixing, guiding. The way of working changed. And
                support became something you could trust in numbers and feel in the pace: log once,
                assign fast, resolve confidently.
              </p>
            </div>
          </div>
        </section>

        {/* ── Real-World Effect ── */}
        <section className="py-7 bg-card/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-center text-foreground sm:text-3xl">
              Real-World{" "}
              <span>Effect</span>
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {effects.map((e) => {
                return (
                  <TiltCard key={e.title} intensity={6} className="rounded-xl">
                    <div className="flex items-start gap-4 rounded-xl border-2 border-white/60 bg-card/50 px-5 py-4 backdrop-blur transition-colors hover:border-primary/40">
                      <SquareCheckBig className="mt-0.5 h-7 w-7 shrink-0 text-white" />
                      <div>
                        <p className="font-semibold text-foreground">{e.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-7">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-center text-foreground sm:text-3xl">
              Frequently Asked{" "}
              <span>Questions</span>
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl border-2 border-white/60 bg-card/50 px-5 py-5 backdrop-blur">
                  <p className="font-semibold text-foreground text-sm">{f.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCta title="Build your dream today?" cta="Schedule a Call" />

      </main>
      <SiteFooter />
    </>
  )
}
