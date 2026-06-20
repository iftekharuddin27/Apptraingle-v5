import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  ArrowLeft,
  SquareCheckBig,
  ClipboardList,
  Users,
  AlertCircle,
  LayoutDashboard,
  FolderCheck,
  UserCheck,
  BadgeCheck,
  Bell,
  PieChart,
  Smartphone,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
import { ServiceCta } from "@/components/page-blocks"

const painPoints = [
  {
    icon: ClipboardList,
    title: "Repetitive Setup Work",
    desc: "No standard task templates by project type. Each project required rebuilding the same checklists, slowing down starts and introducing errors.",
  },
  {
    icon: Users,
    title: "Slow, Fragmented Assignment",
    desc: "Assigning many tasks to multiple supervisors took time and relied on phone/text—making hand-offs inconsistent and hard to audit.",
  },
  {
    icon: AlertCircle,
    title: "Unclear Status & Reasons",
    desc: "There was no unified place to see In Progress, On Hold (with a reason), or Completed/Closed—so delays were discovered late.",
  },
  {
    icon: LayoutDashboard,
    title: "No Single View of Project Health",
    desc: "Without a dashboard, the owner lacked a reliable portfolio snapshot: total projects, completion % per project, and bottlenecks.",
  },
]

const effects = [
  {
    icon: FolderCheck,
    title: "Standardized Project Starts",
    desc: "Project types map to ready-made task templates, eliminating repetitive setup and improving consistency across sites.",
  },
  {
    icon: UserCheck,
    title: "Faster, Clear Assignments",
    desc: "Assign multiple tasks and supervisors in one step, with due dates and reminders—reducing hand-off time and confusion.",
  },
  {
    icon: BadgeCheck,
    title: "Truthful Status & Reasons",
    desc: "Simple, consistent states (In Progress / Held with reason / Completed) capture exactly what's happening and why.",
  },
  {
    icon: Bell,
    title: "Real-Time Awareness",
    desc: "Email/push alerts arrive at the right moments; the owner acknowledges progress and blockers without chasing updates.",
  },
  {
    icon: PieChart,
    title: "Portfolio Visibility",
    desc: "The dashboard shows Total Projects, Completion %, and on-hold reasons; filters help leaders focus on what needs attention now.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Ready & Familiar",
    desc: "Canvas app UI is responsive; SharePoint Lists + Power Apps feel natural to Microsoft 365 users, reducing training time.",
  },
]

const faqs = [
  {
    q: "Can we add new project types or change task templates later?",
    a: "Yes. Add or edit templates in SharePoint Lists; the app and flows use them immediately for future projects.",
  },
  {
    q: "Do supervisors need special setup on mobile?",
    a: "No special setup beyond access to Power Apps. The app runs in the Power Apps mobile app or a browser.",
  },
  {
    q: "How do notifications work?",
    a: "When a task completes or moves to 'Held,' Power Automate sends email/push alerts to the owner. You can adjust timing and recipients in the flow.",
  },
  {
    q: "Can the dashboard show completion percentage and filter by supervisor?",
    a: "Yes. Power BI provides completion % per project, total projects, and filters/drill-downs by supervisor or project.",
  },
]

export default function ProjectTaskManagementPage() {
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
                  Project and Task{" "}
                  <span>Management System</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Managing construction projects used to be a scramble. Task lists were handwritten,
                  assignments were made manually, and progress updates trickled in slowly from site
                  to site. Supervisors spent more time chasing information than actually managing
                  work, and the owner had no single view of what was moving, paused, or completed.
                  Delays multiplied, decisions were slowed, and every new project felt like starting
                  from scratch.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Then Apptriangle introduced a single Power Platform app that changed everything.
                  Projects are now set up in minutes, not hours. Tasks are assigned automatically
                  to the right team members, and progress is updated live across every construction
                  site. No more spreadsheets, no more calls, no more chasing scattered updates.
                </p>
              </div>

              {/* Right – image */}
              <div className="relative overflow-hidden rounded-2xl bg-card/60 shadow-2xl backdrop-blur">
                <Image
                  src="/images/case-studies/1-1.png"
                  alt="Project and Task Management System"
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
                This is the story of a trusted interior construction brand in Australia—a company
                known for its expertise, reliability, and the sheer speed at which it worked. Every
                day, their teams were busy juggling multiple sites, each with its own unique
                challenges and timelines. Work moved fast, deadlines loomed, and yet, somehow,
                updates struggled to keep pace.
              </p>
              <p>
                Every new project began the same way, stuck in the old habits: task lists scribbled
                by hand, supervisors assigned one by one, and progress scattered across calls,
                messages, and spreadsheets. It was like trying to hold onto a stack of papers in a
                strong wind—the information existed, but never all in one place.
              </p>
              <p>
                During their busiest periods, hidden blockers would emerge too late. Small issues
                became bigger delays because no one had a clear picture until it was almost too
                late. Decisions, crucial to keeping projects on track, often waited longer than
                they should.
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
                  src="/images/case-studies/1-2.webp"
                  alt="Key components"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Imagine an app so simple that non-technical users can start using it instantly, on
                  mobile or web. Projects can be set up in minutes using standardized templates for
                  each type, while still allowing{" "}
                  <span className="font-medium">flexibility</span> for unique site needs.
                </p>
                <p>
                  Tasks are tracked clearly, with precise statuses and reasons for any hold-ups,
                  ensuring no detail is lost. Email and push notifications alert the right people at
                  the right time, keeping everyone connected without the chaos of calls or spreadsheets.
                </p>
                <p>
                  All updates feed into a single portfolio dashboard, summarizing totals, completion
                  percentages, and key metrics at a glance. The result: faster decisions, real-time
                  visibility, and smoother operations across every construction site.
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
                Apptriangle came in, listened, and built a single app on Microsoft's Power Platform.
                It became the team's steady window. Projects were set up in minutes instead of hours.
                Tasks reached the right supervisors automatically, without manual handoffs. Progress
                showed up clearly, in real time, for every site. Notes, photos, and updates stayed
                together, so the work spoke for itself. Blockers appeared early, not late. Decisions
                moved faster. The owner finally saw the whole portfolio at a glance—no chasing,
                no guesswork, just calm clarity.
              </p>
              <p>
                That is how the company stepped from the classic rhythm into a modern, digital flow:
                one place to create, one path to assign, one view to see everything. The work stayed
                the same. The way of working got better. And the brand kept its promise—delivering
                with confidence, site after site.
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

        <ServiceCta title="Build your project management today!" cta="Schedule a Call" />

      </main>
      <SiteFooter />
    </>
  )
}
