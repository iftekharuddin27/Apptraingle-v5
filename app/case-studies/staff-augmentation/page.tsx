import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  SquareCheckBig,
  Users,
  Clock,
  Layers,
  ArrowRightLeft,
  Clock3,
  Zap,
  RefreshCw,
  Server,
  TrendingUp,
  BarChart,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
import { ServiceCta } from "@/components/page-blocks"

const painPoints = [
  {
    icon: Users,
    title: "Insufficient Expert Bandwidth",
    desc: "Critical user issues needed knowledgeable engineers (endpoint, identity, security, networking), but the core team was already at capacity during peak and off-hours.",
  },
  {
    icon: Clock,
    title: "No 24/7 Coverage",
    desc: "Branches in different countries generated tickets at all hours; without continuous coverage, backlogs grew overnight and SLA breaches increased.",
  },
  {
    icon: Layers,
    title: "Fragmented Skill Sets",
    desc: "Security, certificates, automation, analytics, collaboration—each required different skills that weren't always available in-house.",
  },
  {
    icon: ArrowRightLeft,
    title: "Inconsistent Handoffs",
    desc: "Tickets handed across time zones lacked context, leading to rework, slower resolution, and frustrated users.",
  },
]

const effects = [
  {
    icon: Clock3,
    title: "True 24/7 Continuity",
    desc: "Follow-the-sun rotations keep tickets moving across time zones, reducing delays without forcing night shifts for a single team.",
  },
  {
    icon: Zap,
    title: "Rapid Access to Specialized Talent",
    desc: "Augmentation adds niche skills (security, PKI, RPA, analytics, collaboration) immediately, under the client's control and processes.",
  },
  {
    icon: RefreshCw,
    title: "Clean Handoffs, Lower Rework",
    desc: "Standard notes and checklists preserve context across shifts, improving resolution speed and consistency. (Best-practice handoffs are core to follow-the-sun.)",
  },
  {
    icon: Server,
    title: "Stack-Aware Support",
    desc: "Engineers familiar with Fortinet security, Kaspersky endpoint/XDR, DigiCert TLS/PKI, UiPath automation, Tableau analytics, IceWarp/Microsoft collaboration, and ManageEngine ITSM keep issues close to source.",
  },
  {
    icon: TrendingUp,
    title: "Better SLAs & User Satisfaction",
    desc: "Round-the-clock coverage with tiered escalations improves FRT/MTTR and reduces overnight backlog. 24/7 support models are linked to faster resolution and higher satisfaction.",
  },
  {
    icon: BarChart,
    title: "Actionable Reporting",
    desc: "Tableau dashboards and ITSM reports surface trends (top incidents, peak hours), helping leaders plan and prevent.",
  },
]

const faqs = [
  {
    q: "How is staff augmentation different from outsourcing?",
    a: "Augmentation adds external professionals who work inside your workflows and under your management; you keep control of priorities and performance. Outsourcing hands an entire function to a provider.",
  },
  {
    q: "How does 24/7 'follow-the-sun' support work?",
    a: "Regional teams in different time zones hand off active tickets with full context so work continues around the clock, without night shifts for a single team.",
  },
  {
    q: "What tools and ecosystems do you support?",
    a: "We integrate with the client's stack across security (Fortinet/Kaspersky), PKI/TLS (DigiCert), automation (UiPath), analytics (Tableau), collaboration (Microsoft/IceWarp), and ITSM (ManageEngine).",
  },
  {
    q: "Will governance and SLAs change?",
    a: "No—augmentation respects your existing SLAs, workflows, and approvals. The client retains control; we align engineers and handoffs to your processes.",
  },
  {
    q: "Is the data secure?",
    a: "Yes—augmentation is built for flexible scaling based on demand and skill needs.",
  },
]

export default function StaffAugmentationPage() {
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
                  Scale Support. Cover Every Time Zone.{" "}
                  <span>Keep Users Happy.</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  A reliable augmentation model that fills skill gaps, provides round-the-clock
                  coverage, and keeps multi-country operations running smoothly.
                </p>
              </div>

              {/* Right – image */}
              <div className="relative overflow-hidden rounded-2xl bg-card/60 shadow-2xl backdrop-blur">
                <Image
                  src="/images/case-studies/3-1.webp"
                  alt="Staff Augmentation"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Business Overview ── */}
        <section className="py-7 bg-card/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Business{" "}
              <span>Overview</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-left">
              <p>
                Every strong operation needs a steady rhythm—support that moves when people move,
                no matter the hour. This is the story of a global enterprise with branches spread
                across countries and time zones. Their users worked day and night. The IT team did
                their best—handling service requests, incidents, access issues, device problems,
                security checks—but the clock was not on their side. With limited in-house capacity
                and no continuous coverage, tickets slept overnight, small issues grew bigger, and
                user satisfaction dipped after hours. What they needed was simple in words, hard in
                practice: 24/7 support with the right skills so work never waits for another office
                to wake up.
              </p>
            </div>
          </div>
        </section>

        {/* ── Key Problems ── */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-center text-foreground sm:text-3xl">
              Key Problems the Customer{" "}
              <span>Faced</span>
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

        {/* ── Challenges ── */}
        <section className="py-7 bg-card/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-center text-foreground sm:text-3xl">
              <span>Challenges</span>
            </h2>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/case-studies/3-2.webp"
                  alt="Challenges"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Design a staff augmentation model that plugs skill gaps on demand, provides 24/7
                  &quot;follow-the-sun&quot; coverage, enforces clean handoffs, respects global SLAs,
                  and integrates with the client&apos;s service desk and security tooling—without
                  disrupting governance or user experience. Staff augmentation adds external
                  professionals under the client&apos;s management to fill short-term or skill-based
                  gaps; it&apos;s valued for speed, control, and{" "}
                  <span className="font-medium">flexibility</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Solution Apptriangle Provide ── */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              The Solution Apptriangle{" "}
              <span>Provide</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-left">
              <p>
                Apptriangle Limited listened and delivered a 24/7 IT Staff Augmentation program
                shaped to the client&apos;s footprint. Day to day, it felt natural. When users raised
                tickets, an active regional team—online in that time zone—picked them up. As one
                shift ended, another began, and work passed like a relay baton with clean context
                and clear next steps. No gaps. No pause. Just a clock that doesn&apos;t sleep.
              </p>
              <p>
                Specialist engineers joined the flow across key disciplines—endpoint and identity,
                network and security, certificates, automation/RPA, analytics and reporting,
                collaboration—and worked inside the client&apos;s own routines: their ITSM workflows
                (the ticket system and process), their SLAs (the time-to-resolve targets), their
                way of measuring success. As a technology partner and integrator, Apptriangle
                supported the stack the client already trusted: Microsoft for core platforms,
                IceWarp for collaboration, Fortinet for network and security, Kaspersky for
                endpoint/XDR, DigiCert for TLS/PKI, UiPath for RPA, Tableau for analytics, and
                ManageEngine for ITSM. It was like lighting bridge lamps across time zones—each
                light guiding tickets forward, safely and on time.
              </p>
              <p>
                Behind the scenes, Apptriangle standardized handoff notes, runbooks, and SLA
                timers, so every shift knew exactly what to do and how fast to do it. The client
                kept full control—priorities, queues, performance dashboards—while our engineers
                worked as part of their team. That is the essence of staff augmentation: speed,
                control, scalability. The orchestra stayed theirs; we added the players and kept
                the tempo steady.
              </p>
              <p>
                The result felt calm and modern. Tickets moved without delay. Minor issues stayed
                small. Users stayed productive—day and night, country to country. From waiting to
                working, from gaps to rhythm, the enterprise found a pace it could trust.
              </p>
              <p>
                The whole flow felt natural. Check-ins were like scanning a boarding pass—quick,
                clear, and recorded. Host alerts rang like a doorbell that never misses. The visit
                log turned into a living ledger: real-time, searchable, and trustworthy. Behind the
                scenes, the app kept clean records—contacts, decisions, reasons, and timestamps—and
                fed a live dashboard with visitor counts, purpose categories, host responsiveness,
                and upcoming pre-scheduled appointments. Management could book slots in advance to
                reduce lobby wait, run quick searches, or export reports whenever needed. The lobby
                moved like a well-timed train—no crowding, no guesswork—and the flow of people
                showed a steady heartbeat the team could read at a glance.
              </p>
              <p>
                They kept their warm hospitality. They changed the way of tracking. And the brand
                greeted every guest with confidence—on time, every time.
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
