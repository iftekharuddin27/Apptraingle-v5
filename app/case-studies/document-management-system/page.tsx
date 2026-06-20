import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  SquareCheckBig,
  Search,
  BellOff,
  LayoutGrid,
  MonitorOff,
  Eye,
  Bell,
  Zap,
  Tag,
  History,
  Lock,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
import { ServiceCta } from "@/components/page-blocks"

const painPoints = [
  {
    icon: Search,
    title: "Low Findability",
    desc: "Documents were scattered; naming conventions varied; search took too long—especially for time-sensitive executive reviews.",
  },
  {
    icon: BellOff,
    title: "Missed Renewals",
    desc: "Certificates (VAT, Tax, SLAs, and records) lacked timely alerts; renewals slipped, risking compliance and penalties.",
  },
  {
    icon: LayoutGrid,
    title: "No Uniform Structure",
    desc: "Folders differed by team and person; metadata/tags were inconsistent, making filters unreliable.",
  },
  {
    icon: MonitorOff,
    title: "Slow Decision Support",
    desc: 'Leaders couldn\'t see the right file at the moment of decision; meetings stalled waiting for the "latest version."',
  },
]

const effects = [
  {
    icon: Eye,
    title: "Instant Findability",
    desc: "Tree view + filters (type, owner, department, expiry window, keywords) reduce search time from minutes to seconds.",
  },
  {
    icon: Bell,
    title: "Never Miss a Renewal",
    desc: "30/45-day reminders with assigned tasks and status tracking keep VAT, Tax, SLAs, and land records current.",
  },
  {
    icon: Zap,
    title: "Faster Decisions",
    desc: "Leaders access the right, latest document during meetings—decisions move forward without delays.",
  },
  {
    icon: Tag,
    title: "Consistent Structure & Tags",
    desc: "Required metadata at upload ensures reliable filtering and reporting across departments.",
  },
  {
    icon: History,
    title: "Version History & Audit Trail",
    desc: "Older copies remain accessible; changes and timestamps are logged for audit and compliance.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    desc: "Shared folders and permissions protect sensitive HR/Finance records while enabling collaboration.",
  },
]

const faqs = [
  {
    q: "Can we standardize tags across departments?",
    a: "Yes, admins define required fields (e.g., type, owner, expiry date) and department-specific tag lists to keep filters consistent.",
  },
  {
    q: "How are reminders configured?",
    a: "Uploaders/owners set pre-expiry reminders (e.g., 45 and 30 days). The system creates a renewal task, assigns it, and sends notifications until completion.",
  },
  {
    q: "Do we keep old copies?",
    a: "Yes, version history preserves prior files with timestamps and notes; the latest becomes the active version.",
  },
  {
    q: "How is access controlled?",
    a: "Through role-based permissions. Departments get shared folders; sensitive files (HR/Finance) have restricted groups.",
  },
  {
    q: "Can we search by expiry month or type?",
    a: "Absolutely, use filters (expiry window, type, department, owner, keywords) to find the exact document fast.",
  },
  {
    q: "Does it support mobile or remote access?",
    a: "Yes, authorized users can access and upload from mobile/web, subject to policy.",
  },
]

export default function DocumentManagementSystemPage() {
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
                  Document Management System{" "}
                  <span>(DMS)</span>
                </h1>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Managing documents used to involve searching through multiple locations and
                    tracking deadlines manually. <span className="font-medium">Critical files</span> were hard
                    to locate, renewals slipped quietly, and decision-making slowed as teams waited
                    for information.
                  </p>
                  <p>
                    Apptriangle replaced that friction with a centralized document management system
                    designed for clarity. Files are organized, renewal schedules stay on track, and
                    executives gain quick access to the information they need. Work moves forward with
                    less delay and greater certainty.
                  </p>
                </div>
              </div>

              {/* Right – image */}
              <div className="relative overflow-hidden rounded-2xl bg-card/60 shadow-2xl backdrop-blur">
                <Image
                  src="/images/case-studies/8-1.png"
                  alt="Document Management System"
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
                This is the story of a multinational organization with documents everywhere—HR
                records, invoices, vouchers, financial statements, delivery challans, contracts, VAT
                and Tax return certificates, SLAs, and land ownership copies. The work was serious.
                The files were scattered. Over time, documents lived inside email threads, shared
                drives, personal folders, and paper boxes. When leaders needed one specific file,
                teams searched like walking through a library without a catalog. Decisions waited.
                Renewals slipped because reminders were spread across people and places, and the
                right document wasn&apos;t visible when it mattered.
              </p>
              <p>
                The company asked for one trusted home: a single source of truth with easy upload,
                clear organization, smart filtering, and renewal reminders that truly work.
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
                  src="/images/case-studies/8-2.webp"
                  alt="Key components"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  As organizations grow, documents quickly become scattered across folders, emails,
                  and personal drives, making retrieval slow and governance difficult. A structured
                  document management solution organizes files into department-wise shared folders
                  with a clear hierarchy, ensuring everyone knows where documents belong.
                </p>
                <p>
                  By enforcing metadata at upload, the system enables fast and accurate search,
                  while automated renewal reminders ensure critical documents are never missed.
                  Version control and access permissions maintain governance and accountability, and
                  a simple upload experience allows teams to digitize scanned copies and existing
                  PDFs without complexity—bringing order, visibility, and{" "}
                  <span className="font-medium">control to enterprise documents</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Solution We Provide ── */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              The Solution We{" "}
              <span>Provide</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-left">
              <p>
                Apptriangle Limited built a Document Management System that turned a maze of folders
                into a well-marked archive. Employees upload scanned copies or PDFs, choose the
                shared area they can access, and add simple tags—type, department, owner, validity
                date, renewal cycle, keywords—so the document knows where it belongs. Managers and
                executives open the DMS and move through tree-view folders like following a clean
                map—HR to Offers and Contracts, Finance to Certificates for VAT/Tax, Delivery to
                Challans for the right year—and then use filters to reach the exact file in seconds.
              </p>
              <p>
                Renewals become steady and predictable. When a document has an expiry date, the
                uploader or owner sets reminders—say 45 and 30 days before. The system creates a
                small, clear task, assigns it to the responsible person, and sends notifications by
                email or app. As the work progresses, status moves from Planned to In Process to
                Completed, and the renewed file is uploaded. The previous version stays safely in
                the record, so audit history remains intact. It feels like a calendar that taps on
                the shoulder at the right time, and a binder that keeps every edition in order.
              </p>
              <p>
                Behind the scenes, access follows roles, version history and timestamps are logged,
                and departments can standardize tags so filters stay trustworthy. Admins see renewal
                calendars across teams, reading future workload like a weather chart. The effect is
                simple: documents are easy to find, renewals arrive on time, and decisions move
                quickly. The organization kept its careful work; the way of handling documents
                became calm, compliant, and clear—from chaos to confidence, day after day.
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

        <ServiceCta title="You want to documents find fast?" cta="Schedule a Call" />

      </main>
      <SiteFooter />
    </>
  )
}
