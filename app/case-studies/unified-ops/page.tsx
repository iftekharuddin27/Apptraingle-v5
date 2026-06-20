import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  SquareCheckBig,
  PackageSearch,
  ShieldOff,
  CalendarX,
  Receipt,
  ShieldCheck,
  Clock,
  CreditCard,
  ShoppingCart,
  Layers,
  FileCheck,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
import { ServiceCta } from "@/components/page-blocks"

const painPoints = [
  {
    icon: PackageSearch,
    title: "No Asset Visibility",
    desc: "Couldn't see who owns what, warranty deadlines, or asset health in one place.",
  },
  {
    icon: ShieldOff,
    title: "Warranty Misses",
    desc: "Devices slipped out of warranty; renewals and replacements became reactive.",
  },
  {
    icon: CalendarX,
    title: "Manual Rosters for 24/7",
    desc: "Spreadsheets caused overlaps and understaffing; no automated conflict checks.",
  },
  {
    icon: Receipt,
    title: "Attendance & Payroll Pain",
    desc: "Late/absent/overtime weren't captured clearly; payroll took longer and triggered disputes.",
  },
]

const effects = [
  {
    icon: ShieldCheck,
    title: "Clear Asset Ownership & Warranty",
    desc: "Instantly know who has what, when warranty expires, and what needs renewal—no surprise.",
  },
  {
    icon: Clock,
    title: "Conflict-Free 24/7 Rosters",
    desc: "Smart coverage rules ensure the right headcount per shift; agents and supervisors see schedules in real time.",
  },
  {
    icon: CreditCard,
    title: "Credible Attendance & Payroll",
    desc: "Timesheets capture actual hours with approvals; payroll calculations become fast, accurate, and auditable.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement Aligned to Demand",
    desc: "POs and re-orders reflect real asset usage and warranty queues, cutting waste and stockouts.",
  },
  {
    icon: Layers,
    title: "One App, Lower Overhead",
    desc: "Integrated modules remove spreadsheet friction; a single login, shared data, and role-based control.",
  },
  {
    icon: FileCheck,
    title: "Auditability & Trust",
    desc: "Timestamps, change logs, and approvals create reliable records for compliance and external audits.",
  },
]

const faqs = [
  {
    q: "Can we assign multiple assets to one user?",
    a: "Yes, each user can hold multiple devices; you'll see their asset portfolio and related warranty timelines.",
  },
  {
    q: "How are warranty reminders handled?",
    a: "Set the warranty end date; the system sends pre-expiry alerts (e.g., 45/30 days) to owners/admins.",
  },
  {
    q: "Does rostering prevent understaffed shifts?",
    a: "Yes, coverage rules check required headcount per interval; conflicts and gaps are flagged before publishing.",
  },
  {
    q: "How do timesheets become payslips?",
    a: "Approved check-in/out generates net hours → payroll applies OT/allowances/deductions/leave payouts → payslip PDF.",
  },
  {
    q: "Is everything really in one app?",
    a: "Yes, modules share master data and permissions. Users see only what their roles allow; all changes are audited.",
  },
  {
    q: "Can we export data?",
    a: "Absolutely CSV/Excel exports for Ops, HR, and Finance; journal exports for your accounting/ERP.",
  },
]

export default function UnifiedOpsPage() {
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
                  Inventory, Pay slip, TimeSheet, Payroll,{" "}
                  <span>Procurement System</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  A single system that right-sizes asset tracking, 24/7 rostering, attendance,
                  payroll, and procurement—built for speed and clarity.
                </p>
              </div>

              {/* Right – image */}
              <div className="relative overflow-hidden rounded-2xl bg-card/60 shadow-2xl backdrop-blur">
                <Image
                  src="/images/case-studies/9-1.webp"
                  alt="Unified Operations System"
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
                This is the story of a customer care startup racing into global markets. New agents
                joined every week. Devices arrived in boxes—laptops, headsets, phones, routers—yet
                the team couldn&apos;t say, with confidence, who owned which device, when its
                warranty ended, or what exactly was in circulation. The operation ran around the
                clock, but rosters lived in spreadsheets and timesheets were typed by hand. Shifts
                collided, gaps appeared, and payroll turned into a debate instead of a result.
                Procurement pulled in a different direction; purchase orders didn&apos;t speak to
                real demand or warranty timelines, so replacements came late and budgets ran high.
                The company needed one app to connect inventory, rostering, timesheets, payroll, and
                procurement without adding more spreadsheets to the pile.
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
                  src="/images/case-studies/9-2.webp"
                  alt="Key components"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Build inventory + warranty tracking with per-user asset assignment and reminders.
                  Create 24/7 rostering that prevents conflicts and ensures coverage. Automate
                  attendance (timesheets) so approved hours flow directly into payroll. Generate
                  payslips with configurable rules (OT, allowances, deductions, leave payouts). Add
                  procurement basics (vendors, POs, goods receipt, stock levels, re-order alerts)
                  linked to actual demand. Deliver everything in one app with{" "}
                  <span className="font-medium">role-based access</span>, audit logs,
                  and simple UX.
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
                Apptriangle Limited built a Unified Operations App that made the whole machine feel
                smooth. Assets gained a passport: type, serial, vendor, purchase date, warranty, and
                a clear owner. Transfers looked like handing a baton, recorded with service history,
                while warranty reminders tapped the team on the shoulder 30 or 45 days before expiry.
                Rostering became a clock that doesn&apos;t sleep. Shifts for day, evening, and night
                were planned with rules that prevent overlaps; agents saw their schedules on web or
                mobile and checked in or out like passing through a clean turnstile. Exceptions—late,
                absent, overtime—were raised with a clear note for supervisors, so disputes cooled
                and facts stood.
              </p>
              <p>
                Payroll felt like a balanced calculator. Approved hours flowed in: base time, OT,
                allowances, deductions, and leave payouts were applied exactly as policy stated. HR
                reviewed, published payslip PDFs, and employees received timely notifications.
                Journals exported to accounting or ERP, with audit trails that kept compliance steady.
                Procurement finally listened to operations. Purchase orders reflected real asset usage
                and warranty queues; goods receipt updated stock automatically; re-order alerts fired
                when safety stock dipped, guided by what agents were actually using and what would
                soon expire.
              </p>
              <p>
                The strength of the solution lived in one source of truth. Users, departments, and
                sites were shared across modules. Role-based access kept HR and Payroll cleanly
                separated from Ops, while audit logs recorded every change. Dashboards showed what
                managers needed at a glance—warranty queue, roster coverage, attendance exceptions,
                payroll readiness, and PO status—like a control tower watching flights in real time.
              </p>
              <p>
                The work stayed the same—serve customers, support teams, protect budgets. The way of
                working changed. From asset chaos to clear ownership, from shift confusion to steady
                coverage, from payroll debate to accurate slips, and from isolated purchasing to
                demand-driven procurement—one app brought the pieces together and set the pace for
                growth.
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
