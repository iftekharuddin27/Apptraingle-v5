"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, ServiceCta } from "@/components/page-blocks"
import Link from "next/link"
import { ArrowUpRight, BadgeCheck, Cpu, Database, LayoutGrid, ShieldCheck, Sparkles, Users } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"
import { StaggerGroup, StaggerItem } from "@/components/scroll-reveal"
import { CountUp } from "@/components/count-up"
import { motion } from "framer-motion"

const studies = [
  {
    title: "Project and Task Management System",
    problem: "Too much time was lost creating task lists and chasing updates; the owner couldn't see real-time status across many projects.",
    solution: "A single Power Platform app with templates by project type, bulk multi-supervisor assignment, clean statuses (In-Progress / On-Hold with reasons / Completed), instant email/push alerts, and a portfolio dashboard showing totals and completion %.",
    impact: "60–70% faster project setup, 35–45% fewer manual hand-offs, earlier blocker detection, real-time portfolio visibility.",
  },
  {
    title: "Guest Management System",
    problem: "Paper registry at reception made guest tracking slow and unreliable; staff couldn't quickly find records or notify hosts in real time.",
    solution: "Kiosk-friendly Power Platform app that logs guests digitally, triggers instant host notifications, supports pre-scheduled appointments, captures allow/deny/reschedule decisions with reasons, and provides a real-time dashboard for counts, purposes, and responsiveness.",
    impact: "80–90% faster check-ins, host approvals within 1–5 minutes, 40–60% lower lobby wait, searchable visitor records and audit trail.",
  },
  {
    title: "Staff Augmentation",
    problem: "A global, multi-branch enterprise needed 24/7 IT support and specialist skills so users could work smoothly; their core team didn't have enough knowledgeable resources or time-zone coverage.",
    solution: "Follow-the-sun staff augmentation with specialist engineers (endpoint, identity, security, networking, PKI, RPA, analytics, collaboration) integrated into the client's ITSM, SLAs, runbooks, and clean time-zone handoffs for continuous coverage.",
    impact: "70% faster ticket resolution, 24/7 support capability, 50–60% cost savings, increased customer satisfaction (higher CSAT/NPS).",
  },
  {
    title: "IceWarp (Right-Sized Email)",
    problem: "All users were licensed with \"full\" suites (Microsoft/Google) even though many needed only small mailboxes—driving unnecessary cost for features and storage they didn't use.",
    solution: "Hybrid email strategy—move light users to IceWarp with per-user quotas & capacity alerts, keep power users on Microsoft/Google; governed, secure, and no lock-in.",
    impact: "30–50% license cost savings by right-sizing mailboxes (5/10/30 GB), with the same reliability/security and budget freed for higher-value work.",
  },
  {
    title: "Meeting Room Management System",
    problem: "Unmanaged room schedules led to double bookings, last-minute clashes, and embarrassing moments when teams arrived to find rooms already occupied.",
    solution: "Centralized web/mobile booking with real-time status, door tablets, automatic conflict checks, smart notifications, and analytics for Facilities (usage, no-shows, peak demand).",
    impact: "90–100% fewer double-bookings, 30–40% higher room utilization, 20–30% less lobby wait via check-in & auto-release, plus a polished VIP welcome.",
  },
  {
    title: "Ticketing System",
    problem: "Multiple contact channels (email, calls, chat) made IT support untrackable, hurting KPIs and preventing accurate management reporting.",
    solution: "Unified ticketing across web/email with structured handovers, manager/self-assignment, automated KPIs & SLAs, and exportable dashboards for true visibility.",
    impact: "60–70% faster first response, 40–50% faster resolution (MTTR), 100% ticketed intake, fewer leave-related stalls, and audit-ready reporting.",
  },
  {
    title: "Document Processing System (OCR)",
    problem: "Clients submit financial statements in many different formats, forcing auditors to retype into Excel and bulk-upload manually—slow, error-prone, and hard to scale.",
    solution: "AI OCR + structured field extraction with confidence scoring, rule checks, batch processing, and API/CSV posting that attaches the source file and full audit trail.",
    impact: "80–90% faster data preparation, 60–80% fewer typing errors, 5–10× higher throughput, and audit-ready traceability for every record.",
  },
  {
    title: "Document Management System (DMS)",
    problem: "Critical documents across HR, Accounts, Finance, and Delivery (including VAT/Tax certificates, SLAs, land records) were hard to find and track, causing delayed decisions and missed renewals.",
    solution: "Centralized DMS with mandatory metadata & tags, tree-view + smart filters, role-based access, renewal reminders with tasks, and complete version history/audit trail.",
    impact: "70–85% faster document retrieval, 95–100% on-time renewals (VAT/Tax/SLAs/land records), and faster executive decisions with version-controlled files.",
  },
  {
    title: "Unified Ops (Inventory, Payslips, Timesheets, Payroll, Procurement)",
    problem: "Rapid growth created asset chaos (who owns which device, warranty status) and manual 24/7 rostering, making attendance and payroll slow and error-prone; procurement wasn't linked to real operational demand.",
    solution: "One Power Platform app linking inventory & warranties, rostering/attendance → payroll, and procurement, with role-based access, audit logs, and real-time dashboards for managers.",
    impact: "24/7 coverage with conflict-free rosters, 40–50% fewer scheduling errors, 50–60% faster payroll cycle, full asset visibility & warranty compliance, and demand-driven procurement that cuts delays.",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Experiences"
          title="Our"
          highlight="Experiences"
          whiteHighlight
          description="Proven expertise across industries and technologies"
          bgImage="/images/resources-bg.png"
          bgFull
        />

        {/* Stats */}
        <section className="pb-8">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <StaggerGroup
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
              staggerChildren={0.07}
            >
              {[
                { value: "150+", label: "Projects Completed" },
                { value: "200+", label: "Happy Customers" },
                { value: "50+", label: "Professionals" },
                { value: "99%", label: "Client Retention" },
                { value: "7+", label: "Years Experience" },
              ].map((s, i) => (
                <StaggerItem key={s.label}>
                  <motion.div
                    animate={{ y: [-6, 6] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2.5,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    whileHover={{ y: 0, transition: { duration: 0.2, ease: "easeOut" } }}
                    className="h-full rounded-2xl"
                  >
                    <TiltCard intensity={15} className="h-full rounded-2xl">
                      <div className="group relative h-full overflow-hidden rounded-2xl border border-white/60 bg-card/60 p-7 text-center backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_rgba(41,179,255,0.5)]">
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{ background: "radial-gradient(closest-side, rgba(41,179,255,0.15), transparent 70%)" }}
                        />
                        <p className="relative font-display text-2xl font-semibold text-foreground sm:text-3xl">
                          <CountUp value={s.value} />
                        </p>
                        <p className="relative mt-2 text-xs uppercase tracking-wider text-white">
                          {s.label}
                        </p>
                      </div>
                    </TiltCard>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Case Studies heading */}
        <section className="pb-7 pt-5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Case Studies
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              How we solved real problems and delivered measurable results
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {studies.map((s, i) => (
                <TiltCard key={i} intensity={8} className="rounded-2xl">
                <article
                  className="card-glow flex flex-col rounded-2xl border-2 border-white/60 p-7 h-full transition-colors hover:border-primary/40"
                >
                  <h2 className="font-display text-xl font-semibold leading-tight text-primary">
                    {s.title}
                  </h2>

                  <Block label="Problem" value={s.problem} />
                  <Block label="Solution" value={s.solution} />
                  <Block label="Impact" value={s.impact} variant="impact" />

                  {i === 0 ? (
                    <Link href="/case-studies/project-and-task-management" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  ) : i === 1 ? (
                    <Link href="/case-studies/guest-management-system" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  ) : i === 2 ? (
                    <Link href="/case-studies/staff-augmentation" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  ) : i === 3 ? (
                    <Link href="/case-studies/icewarp-right-sized-email" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  ) : i === 5 ? (
                    <Link href="/case-studies/ticketing-system" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  ) : i === 6 ? (
                    <Link href="/case-studies/document-processing-system" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  ) : i === 7 ? (
                    <Link href="/case-studies/document-management-system" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  ) : i === 8 ? (
                    <Link href="/case-studies/unified-ops" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </span>
                  )}
                </article>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
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
                  <TiltCard key={card.title} intensity={10} className="rounded-2xl">
                  <div
                    className="flex min-h-30 flex-col items-center justify-center rounded-2xl border border-white/60 bg-card/60 px-6 py-5 text-center backdrop-blur transition-colors hover:border-primary/40"
                  >
                    <Icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-3 font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{card.desc}</p>
                  </div>
                  </TiltCard>
                )
              })}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Certifications
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">Recognized by industry leaders</p>
            </div>

            <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {certifications.map((cert) => (
                <TiltCard key={cert} intensity={10} className="h-full rounded-2xl">
                <div
                  className="flex h-full items-center justify-center rounded-2xl border border-white/60 bg-card/60 px-4 py-5 text-center text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40"
                >
                  {cert}
                </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <ServiceCta title="Meet With Our Expertise!" />
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

function Block({ label, value, variant = "default" }: { label: string; value: string; variant?: "default" | "impact" }) {
  return (
    <div className={variant === "impact" ? "mt-5 border-t border-border/50 pt-4" : "mt-5"}>
      <p className={`text-sm font-bold ${variant === "impact" ? "text-primary" : "text-foreground"}`}>
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-white">
        {value}
      </p>
    </div>
  )
}
