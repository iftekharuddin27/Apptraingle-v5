import Image from "next/image"
import { notFound } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import {
  ArrowLeftRight,
  BarChart3,
  Box,
  Cloud,
  Filter,
  LayoutGrid,
  Lock,
  PieChart,
  SquareCheckBig,
  Tag,
  ToggleLeft,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceCta } from "@/components/page-blocks"
import { TiltCard } from "@/components/tilt-card"

type FeatureItem = { title: string; desc: string; icon: LucideIcon; featured?: boolean }
type ChecklistItem = { title: string; desc: string }

type ProductContent = {
  heroTitle: string
  heroHighlight: string
  heroDesc: string
  heroImage: string
  featuresTitle: string
  features: FeatureItem[]
  whyTitle: string
  whyImage: string
  whyChecklist: ChecklistItem[]
  ctaQuestion: string
  ctaLabel: string
}

const content: Record<string, ProductContent> = {
  "expense-tracker": {
    heroTitle: "Manage Your Finance Smarter,",
    heroHighlight: "Not Harder!",
    heroDesc:
      "Expense Tracker is a simple yet powerful iOS app designed to help you effortlessly manage your daily income and expenses. Whether you want to track your monthly budget, monitor your spending habits, or plan future savings, this app is your personal finance companion right in your pocket!",
    heroImage: "/images/products/expense-tracker/hero-screens.webp",
    featuresTitle: "Key Features",
    features: [
      { title: "Easy Income & Expense Logging", desc: "Add income and expenses in seconds with an intuitive, clutter-free interface.", icon: ArrowLeftRight },
      { title: "Organized by Categories", desc: "Categorize your spending into groups like Food, Transport, Shopping, Entertainment, Bills, and more for better tracking and analysis.", icon: Tag },
      { title: "Visual Reports & Charts", desc: "Understand where your money goes with beautiful, easy-to-read graphs and charts.", icon: PieChart, featured: true },
      { title: "Custom Categories", desc: "Personalize your own categories to better match your lifestyle and needs.", icon: LayoutGrid },
      { title: "Daily, Weekly, Monthly Overview", desc: "Instantly see summaries of your spending patterns over different time frames.", icon: BarChart3 },
      { title: "Secure and Private", desc: "Your financial data stays private on your device. No server storage, no sign-up required.", icon: Lock },
      { title: "Dark Mode Support", desc: "Enjoy a beautifully designed experience in both Light and Dark modes.", icon: ToggleLeft },
      { title: "iCloud Backup & Restore", desc: "Keep your data safe and synced across devices.", icon: Cloud },
      { title: "Search and Filter", desc: "Easily find past transactions by category, amount, or date.", icon: Filter },
      { title: "Simple, Clean UI", desc: "A modern, elegant design that makes tracking your expenses quick and stress-free.", icon: Box },
    ],
    whyTitle: "Why Expense Tracker?",
    whyImage: "/images/products/expense-tracker/why-screens.webp",
    whyChecklist: [
      { title: "Simple by Design", desc: "No clutter, no confusion. Just add expenses and go." },
      { title: "Clear Insights", desc: "See where your money goes with easy-to-read summaries." },
      { title: "No Learning Curve", desc: "Anyone can use it from day one." },
      { title: "Perfect for Everyone", desc: "Ideal for students, freelancers, families, and individuals." },
    ],
    ctaQuestion: "You want to explore this App?",
    ctaLabel: "Schedule a Call",
  },
}

export function generateStaticParams() {
  return Object.keys(content).map((slug) => ({ slug }))
}

function ProductHero({ title, highlight, description, image }: { title: string; highlight: string; description: string; image: string }) {
  return (
    <section className="relative overflow-hidden px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
          {title} <span className="text-white">{highlight}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-card/40 p-4">
          <Image src={image} alt="App preview" width={1024} height={640} className="h-auto w-full rounded-xl object-contain" />
        </div>
      </div>
    </section>
  )
}

function FeaturesGrid({ title, items }: { title: string; items: FeatureItem[] }) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <TiltCard key={item.title} intensity={10} className="rounded-2xl h-full">
                <div
                  className={`card-glow flex h-full min-h-65 flex-col items-center rounded-2xl border-2 px-5 py-8 text-center transition-all duration-300 ${
                    item.featured
                      ? "border-white/60 bg-primary text-white"
                      : "border-white/60 bg-card/40 hover:border-primary/45 hover:shadow-[0_16px_50px_-20px_rgba(41,179,255,0.45)]"
                  }`}
                >
                  <Icon size={36} className={item.featured ? "text-white" : "text-foreground"} />
                  <p className="mt-4 text-sm font-bold sm:text-base">{item.title}</p>
                  <p className={`mt-2 text-xs ${item.featured ? "text-white/85" : "text-muted-foreground"}`}>{item.desc}</p>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhySection({ title, image, items }: { title: string; image: string; items: ChecklistItem[] }) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-card/40 p-3">
            <Image src={image} alt="App highlights" width={1024} height={640} className="h-auto w-full rounded-xl object-contain" />
          </div>
          <div className="space-y-4">
            {items.map((item) => (
              <TiltCard key={item.title} intensity={8} className="rounded-xl">
                <div className="card-glow flex items-start gap-3 rounded-xl border-2 border-white/60 bg-card/40 px-4 py-4 transition-all duration-300 hover:border-primary/45 hover:shadow-[0_16px_50px_-20px_rgba(41,179,255,0.45)]">
                  <SquareCheckBig size={24} className="mt-0.5 shrink-0 text-foreground" />
                  <div>
                    <span className="text-sm font-bold text-foreground">{item.title}</span>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = content[slug]
  if (!data) return notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <ProductHero title={data.heroTitle} highlight={data.heroHighlight} description={data.heroDesc} image={data.heroImage} />
        <FeaturesGrid title={data.featuresTitle} items={data.features} />
        <WhySection title={data.whyTitle} image={data.whyImage} items={data.whyChecklist} />
        <ServiceCta title={data.ctaQuestion} cta={data.ctaLabel} />
      </main>
      <SiteFooter />
    </>
  )
}
