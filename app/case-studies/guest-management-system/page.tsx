import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  SquareCheckBig,
  BookOpen,
  BellOff,
  CalendarX,
  BarChart,
  UserCheck,
  Bell,
  CalendarCheck,
  Search,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
import { ServiceCta } from "@/components/page-blocks"

const painPoints = [
  {
    icon: BookOpen,
    title: "Paper-Based Records",
    desc: "Logbook entries were hard to read, easy to miss, and impossible to search quickly—especially during busy hours.",
  },
  {
    icon: BellOff,
    title: "Slow Host Notification",
    desc: "Reception had to call or message hosts manually; approvals were delayed, creating bottlenecks and longer wait times.",
  },
  {
    icon: CalendarX,
    title: "No Pre-Scheduling or Queue Visibility",
    desc: "Guests arrived without confirmed time slots; reception couldn't see the live queue or plan ahead for peak periods.",
  },
  {
    icon: BarChart,
    title: "Poor Tracking & Reporting",
    desc: "No simple way to count visitors, see purpose categories, or retrieve contact information for follow-ups.",
  },
]

const effects = [
  {
    icon: UserCheck,
    title: "Faster, Frictionless Check-Ins",
    desc: "Visitors submit details digitally; reception stops rewriting the same fields—speeding up the front desk.",
  },
  {
    icon: Bell,
    title: "Instant, Actionable Notifications",
    desc: "Hosts get real-time alerts and approve/deny/reschedule with one tap, cutting wait times and back-and-forth.",
  },
  {
    icon: CalendarCheck,
    title: "Pre-Scheduling That Works",
    desc: "Appointments booked in advance appear as ready slots, so VIPs and peak-hour guests aren't stuck in the lobby.",
  },
  {
    icon: Search,
    title: "Searchable Visitor Records",
    desc: "Find any visitor by name, organization, designation, or purpose—no more thumbing through paper books.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Decisions & Audit Trail",
    desc: "Every outcome (allow/deny/reschedule) and reason is logged centrally—useful for compliance and service quality.",
  },
  {
    icon: LayoutDashboard,
    title: "Live Insights for Management",
    desc: "See visitor counts, purpose trends, and host responsiveness; plan staffing and improve visitor experience.",
  },
]

const faqs = [
  {
    q: "Can we pre-schedule and bulk import appointments?",
    a: "Yes. Admins can add appointments in advance; bulk import is possible via spreadsheet/file uploads.",
  },
  {
    q: "How do hosts receive and act on requests?",
    a: "Through app/email notifications. Their tap (Allow, Deny, or Reschedule) reasons are saved for reporting.",
  },
  {
    q: "Can reception search past visitors quickly?",
    a: "Yes. The dashboard supports search by name, organization, designation, purpose, and date range.",
  },
  {
    q: "What if a meeting is denied or rescheduled?",
    a: "Reception sees the status immediately and can offer a new slot or notify the visitor accordingly.",
  },
  {
    q: "Is the data secure?",
    a: "Data is stored in SharePoint Lists within the customer's Microsoft 365 tenant; permissions and access are governed centrally.",
  },
  {
    q: "Can we add Bangla forms or bilingual labels?",
    a: "Absolutely. The visitor form and notifications can be English + Bangla to fit your audience.",
  },
]

export default function GuestManagementSystemPage() {
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
                  Guest Management{" "}
                  <span>System (GMS)</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Paper logbooks slowed everything down. Visitor details were scattered, notifications
                  were manual, and real-time visibility was missing.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Apptriangle delivered one Power Platform app that replaces paper entirely. Guests
                  are logged digitally, hosts are notified instantly, and every visit is tracked in
                  real time. The result is a faster check-in experience, stronger security, and
                  complete visibility — all from a single, simple system.
                </p>
              </div>

              {/* Right – image */}
              <div className="relative overflow-hidden rounded-2xl bg-card/60 shadow-2xl backdrop-blur">
                <Image
                  src="/images/case-studies/2-1.png"
                  alt="Guest Management System"
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
              How the Business Works—and{" "}
              <span>Where It Hurts</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-left">
              <p>
                Every meaningful improvement begins with a small realization—the understanding that
                even simple experiences, like welcoming a visitor, should feel effortless and
                transparent.
              </p>
              <p>
                This story begins with a well-established and respected Bangladeshi brand. Their
                office space reflected professionalism and modern thinking, yet the first interaction
                for any guest told a different story. At the front desk, a large paper register sat
                open each day. Visitors carefully wrote down their name, organization, designation,
                and purpose of visit, then signed the page, leaving behind handwritten traces of
                their presence.
              </p>
              <p>
                At first glance, the process seemed familiar and harmless. But over time, its
                limitations became clear. When a manager later asked, &quot;Who came to meet me last
                Tuesday?&quot; the answer was never immediate. The front desk team flipped through
                pages one by one, scanning handwritten entries, hoping to find the right name among
                hundreds of similar notes. Important records were difficult to locate, sometimes
                unclear, and often incomplete.
              </p>
              <p>
                Meanwhile, hosts were not notified on time, visitors waited longer than expected,
                and the reception area slowly filled with quiet frustration. What should have been a
                smooth, welcoming experience instead became a small but persistent operational
                challenge—one that hinted at a deeper need for clarity, efficiency, and change.
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
                  src="/images/case-studies/2-2.webp"
                  alt="Key components"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  As organizations grow, managing visitors becomes increasingly complex and
                  time-consuming. Manual registration processes slow down entry, introduce errors,
                  and make it difficult to maintain accurate and searchable records. Reception teams
                  often rely on calls or messages to notify hosts, which leads to delays and
                  inconsistent communication.
                </p>
                <p>
                  The lack of a centralized system further limits visibility and control.
                  Pre-scheduled appointments are handled separately, making coordination difficult,
                  while management has no real-time view of who is on-site, why they are visiting,
                  or how long they stay. Without an integrated, digital approach within the existing
                  Microsoft environment, visitor management remains fragmented, inefficient, and
                  challenging to govern at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How We Overcame ── */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              How We{" "}
              <span>Overcame</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-left">
              <p>
                Apptriangle Limited built a Guest Management System on Microsoft Power Platform. At
                reception, the experience became simple: a guest arrives, taps the kiosk or tablet,
                enters their details, and sends a meeting request. The requested person—the host—
                instantly receives an app or email notification showing who wants to meet and why,
                and can allow, deny, or reschedule with one tap. If approved, reception sees the
                status, checks the visitor in, and the system records the time. If rescheduled or
                denied, the visitor is guided politely to the next step.
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

        <ServiceCta title="Build your dream today!" cta="Schedule a Call" />

      </main>
      <SiteFooter />
    </>
  )
}
