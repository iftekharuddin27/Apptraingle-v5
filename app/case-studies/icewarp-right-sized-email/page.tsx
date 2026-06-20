import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  SquareCheckBig,
  Package,
  Puzzle,
  SlidersHorizontal,
  PiggyBank,
  DollarSign,
  HardDrive,
  Shield,
  GitBranch,
  Unlink,
  Repeat,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
import { ServiceCta } from "@/components/page-blocks"

const painPoints = [
  {
    icon: Package,
    title: "License Over-Provisioning",
    desc: "Flat mailbox quotas (e.g., 50GB/user) meant paying for storage that many users didn't consume.",
  },
  {
    icon: Puzzle,
    title: "Feature Waste",
    desc: "Many roles didn't use the bundled apps (Teams/OneDrive or Meet/Drive), but licenses included them by default—adding cost without daily value.",
  },
  {
    icon: SlidersHorizontal,
    title: "No Per-User Mailbox Right-Sizing",
    desc: "'Basic' plans don't let you reduce mailbox size on a per-user basis to 5–10–30GB; the quota comes with the plan.",
  },
  {
    icon: PiggyBank,
    title: "Budget Locked in Email",
    desc: "With email overspending, little budget remained for apps, training, or automation that could raise productivity elsewhere.",
  },
]

const effects = [
  {
    icon: DollarSign,
    title: "Immediate Cost Reduction",
    desc: "Stop buying large quotas for everyone. Use IceWarp quotas (5/10/30GB) for light users; keep premium suites only where needed.",
  },
  {
    icon: HardDrive,
    title: "Right-Sized Storage with Alerts",
    desc: "Admins set per-user/domain disk quotas and capacity warnings, preventing surprise lockouts and encouraging healthy mailbox hygiene.",
  },
  {
    icon: Shield,
    title: "Governance That Fits",
    desc: "User-/domain-/global-level limits with clear precedence make policies predictable (user overrides domain; domain overrides global if allowed).",
  },
  {
    icon: GitBranch,
    title: "Flexible Growth Path",
    desc: "If collaboration demand rises, IceWarp offers integrated TeamChat, conferencing, documents, and mobile sync—without forcing full-suite licenses up front.",
  },
  {
    icon: Unlink,
    title: "Hybrid Freedom (No Lock-In)",
    desc: "Keep heavy users on Microsoft/Google where needed; the rest on IceWarp—mix and match without disrupting user experience.",
  },
  {
    icon: Repeat,
    title: "Budget Reallocation to Value",
    desc: "Savings can fund app development, training, or automation that lifts productivity more than idle mailbox space ever could.",
  },
]

const faqs = [
  {
    q: "Can IceWarp really set individual mailbox sizes like 5GB or 10GB?",
    a: "Yes. IceWarp supports account-level disk quotas, domain limits, and global limits—with clear precedence, so you can assign small or larger mailboxes per user.",
  },
  {
    q: "What happens when users approach capacity?",
    a: "Admins can configure capacity-warning notifications so users get alerts before hitting their limit.",
  },
  {
    q: "How do Microsoft/Google 'basic' plans handle mailbox/storage sizes?",
    a: "Microsoft Exchange Online sets mailbox size by plan (e.g., 50GB for Business Basic/Standard; 100GB for E3/E5), with archive options in higher tiers. Google Workspace Business Starter provides 30GB pooled storage per user, managed organization-wide.",
  },
  {
    q: "Is migration complicated?",
    a: "IceWarp provides admin tools and documented processes for migration; quotas and limits are admin-configurable post-cutover.",
  },
  {
    q: "Can we keep some users on Microsoft/Google and move others to IceWarp?",
    a: "Yes, this hybrid licensing approach is the point: heavy users stay where the full suite is justified; light users move to right-sized mailboxes.",
  },
]

export default function IceWarpRightSizedEmailPage() {
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
                  Right Sized Mailboxes. Lower Cost.{" "}
                  <span>Same Reliability.</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  A practical switch that trims email spend by matching mailbox size to real
                  usage—without sacrificing security or user experience.
                </p>
              </div>

              {/* Right – image */}
              <div className="relative overflow-hidden rounded-2xl bg-card/60 shadow-2xl backdrop-blur">
                <Image
                  src="/images/case-studies/4-1.png"
                  alt="IceWarp"
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
                This is the story of several respected Bangladeshi companies—serious about
                reliability, careful about cost. Their email ran on big, well-known suites. Every
                employee, from front desk to field sales, carried the same suitcase-sized mailbox,
                even if many only needed a small backpack. The rules were simple but expensive:
                standard Microsoft business plans gave 50GB mailboxes by default, with higher tiers
                offering 100GB and large archives; it was one size for everyone, whether they filled
                it or not.
              </p>
              <p>
                On Google&apos;s side, Business Starter provided 30GB per user in pooled storage—again
                counted for each account, even if most never came close.
              </p>
              <p>
                Admins did their best. They wanted fast search, mobile access, dependable delivery.
                But paying for big seats on every bus meant many seats rode half-empty. It felt like
                buying a full buffet when plenty of staff only needed tea and toast. Costs climbed.
                The experience stayed fine—but the fit wasn&apos;t right.
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

        {/* ── Challenges ── */}
        <section className="py-7 bg-card/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-center text-foreground sm:text-3xl">
              <span>Challenges</span>
            </h2>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/case-studies/4-2.jpg"
                  alt="IceWarp interface"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Design a solution that keeps enterprise-grade email while allowing per-user mailbox
                  quotas (e.g., 5GB, 10GB, 30GB), provides governance and alerts, integrates with
                  existing workflows, and frees budget for{" "}
                  <span className="font-medium">higher-value initiatives</span>.
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
                Apptriangle Limited listened and proposed a straighter path: move the right users to
                IceWarp, keep power users where they need to be, and size mailboxes to real life. In
                practice, it felt simple. IceWarp allowed admins to set per-user, per-domain, and
                global disk quotas with clear precedence, so each account carried only what it
                needed—5GB, 10GB, 30GB, or more when justified. Warnings appeared before anyone hit
                the ceiling, so people stayed productive without surprises.
              </p>
              <p>
                Behind the scenes, Apptriangle ran a usage review and saw a familiar pattern: a
                large group—around 40–50%—used only 5–10GB of mailbox space and rarely touched
                heavy collaboration apps. Those users shifted to right-sized IceWarp mailboxes. Power
                users either stayed on Microsoft/Google or moved to larger IceWarp quotas. The
                platform covered email, calendar, and sync with enterprise-grade administration, and
                could scale to &quot;all-in-one&quot; collaboration later if the business asked.
                (IceWarp&apos;s limits and policies are designed for this kind of flexible control.)
              </p>
              <p>
                The change felt like swapping oversized luggage for just-right carry-ons. Reliability
                stayed. Search stayed. Mobile stayed. Waste didn&apos;t. Admins stayed in control,
                costs fell to match reality, and leaders finally saw an email estate sized to the
                work, not to a blanket license. Same confidence. Lower spend. A better fit.
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

        <ServiceCta title="You want to documents Find Fast, Renew On Time, Decide Quickly." cta="Schedule a Call" />

      </main>
      <SiteFooter />
    </>
  )
}
