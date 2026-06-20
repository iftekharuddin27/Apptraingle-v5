import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  SquareCheckBig,
  FileStack,
  ClipboardX,
  Clock,
  GitBranch,
  Layers,
  ShieldCheck,
  Zap,
  BarChart,
  Search,
  Plug,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
import { ServiceCta } from "@/components/page-blocks"

const painPoints = [
  {
    icon: FileStack,
    title: "Format Variability",
    desc: "Statements arrived as PDFs, scans, images, Excel—each with different layouts, field names, and positions.",
  },
  {
    icon: ClipboardX,
    title: "Manual Excel Normalization",
    desc: "Staff retyped and aligned data to the firm's structure, introducing typing errors and slowing throughput.",
  },
  {
    icon: Clock,
    title: "Time-Consuming Bulk Uploads",
    desc: "Preparing and validating CSV/Excel uploads took significant time; one mistake meant rollback and redo.",
  },
  {
    icon: GitBranch,
    title: "Limited Traceability",
    desc: "It was hard to link a posted record back to the originating document and the person who typed it.",
  },
]

const effects = [
  {
    icon: Layers,
    title: "Template-Agnostic Intake",
    desc: "Accepts diverse client formats—no need to maintain hundreds of rigid templates.",
  },
  {
    icon: ShieldCheck,
    title: "Error Reduction",
    desc: "OCR + extraction + rule checks cut human typing errors; reviewers focus only on low-confidence fields.",
  },
  {
    icon: Zap,
    title: "Big Time Savings",
    desc: "Every record links to the source document, reviewer edits, and timestamps—ideal for internal/external audits.",
  },
  {
    icon: BarChart,
    title: "Scalable Throughput",
    desc: "Process hundreds of statements in parallel; peak season no longer bottlenecks the audit team.",
  },
  {
    icon: Search,
    title: "Cleaner Data for Analytics",
    desc: "Canonical structure enables consistent analytics (vendor spend, tax checks, duplicate detection).",
  },
  {
    icon: Plug,
    title: "Smooth Integration",
    desc: "Works with the firm's existing system (API/CSV), so teams keep familiar downstream tools and reports.",
  },
]

const faqs = [
  {
    q: "What document types are supported?",
    a: "Invoices, vouchers, receipts, bank statements, credit notes, and XLSX exports. New types can be added as models are trained.",
  },
  {
    q: "How does accuracy stay high?",
    a: "The app uses OCR + domain models with confidence scoring and rule checks. Reviewers only fix low-confidence fields; all edits are logged.",
  },
  {
    q: "Can we handle line-item detail?",
    a: "Yes, item description, quantities, unit price, taxes, discounts, totals; multi-currency and multiple tax rates are supported.",
  },
  {
    q: "How does it integrate with our system?",
    a: "Via API or CSV/Excel export, aligned to your schema. Posting attaches the source file and a change log.",
  },
  {
    q: "What about security and compliance?",
    a: "Encrypted storage in transit and at rest, role-based access, document-level permissions, and full audit trail for reviews and changes.",
  },
  {
    q: "How are new client formats onboarded?",
    a: "You can submit samples; the model learns layouts and mappings. Field aliases and dictionary lookups help standardize naming.",
  },
]

export default function DocumentProcessingSystemPage() {
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
                  Capture Once. Audit Faster.{" "}
                  <span>No Manual Typing</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  A smart OCR + extraction system that turns messy, multi-format statements into
                  clean, structured data—ready to load.
                </p>
              </div>

              {/* Right – image */}
              <div className="relative overflow-hidden rounded-2xl bg-card/60 shadow-2xl backdrop-blur">
                <Image
                  src="/images/case-studies/7-1.jpg"
                  alt="Document Processing System"
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
                This is the story of an audit firm with many clients and even more documents.
                Invoices, vouchers, receipts, activity reports—each arriving in its own style, each
                speaking a slightly different language. The team stored the files neatly, but the
                numbers inside still had to be typed by hand into Excel, lined up to a strict
                template, and then uploaded in batches. Hours slipped away. Small mistakes crept
                in—an extra zero here, a wrong date there. Auditors waited for clean data before
                they could begin real analysis. The work felt like copying signs from a busy street
                into a notebook, careful but slow.
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
                  src="/images/case-studies/7-2.webp"
                  alt="Document processing challenge"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Accept multiple document formats (PDFs, scans, images, XLSX). Extract the correct
                  financial fields despite layout differences. Provide confidence scores and quick
                  review to preserve accuracy. Transform fields into the firm&apos;s canonical
                  structure. Auto-submit to the existing system with audit logs and error handling.
                  Keep data secure and compliant (PII,{" "}
                  <span className="font-medium">financial records</span>).
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
                Apptriangle Limited introduced an AI Document Processing system built for audit
                rhythms. In practice, it felt natural: staff upload the statements to the web app;
                the AI builder recognizes the document type and reads it like a sharp-eyed clerk,
                pulling out the right fields—supplier, date, invoice or voucher number, line items,
                amounts, taxes, currencies, totals—and mapping them into the firm&apos;s standard
                shape, no matter how the original looked. Each extraction comes with confidence
                markers, like quiet traffic lights on the fields that need a second glance; reviewers
                tap once, fix a detail, and move on. With Submit, the system sends the structured
                data to the firm&apos;s existing platform via API or export, attaches the source
                file, and writes a full audit trail—who uploaded, when, and what changed.
              </p>
              <p>
                When piles of documents arrive, batch mode turns into a steady conveyor, handling
                hundreds at once. Exception rules raise clear flags—for example, when the total
                doesn&apos;t match the sum of lines—so problems are seen before posting, not after.
                The effect is simple and strong: typing errors fade, cycle time collapses, and
                auditors receive clean, consistent data far sooner. The craft of auditing remains;
                the way of feeding the numbers becomes calm, accurate, and fast. From retyping to
                capturing, from waiting to working—the firm finds a pace it can trust.
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

        <ServiceCta title="You want to document processing system?" cta="Schedule a Call" />

      </main>
      <SiteFooter />
    </>
  )
}
