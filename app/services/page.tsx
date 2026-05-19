import Link from "next/link"
import { ArrowUpRight, AudioWaveform, Bot, Brain, ChartNoAxesCombined, FileText, FolderCode, Headset, Lock, Mails, Monitor, Rocket, Settings, ShieldCheck, Smartphone, Users, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-blocks"
import { CtaSection } from "@/components/home-sections"
import { services } from "@/lib/site"

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "staff-augmentation": Users,
  "managed-it-services": Monitor,
  "business-process-automation": Settings,
  "app-development": Smartphone,
  "power-platform": Zap,
  "technology-consulting": Headset,
  "mvp-development": AudioWaveform,
  "ai-ml-solutions": Brain,
  "business-analytics": ChartNoAxesCombined,
  "chatbot-development": Bot,
  "cybersecurity-services": ShieldCheck,
  "email-collaboration": Mails,
  "ssl-certificates": Lock,
  "document-management": FileText,
  "software-licensing": FolderCode,
}

export default function ServicesIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Reliable & Innovative Services"
          highlight="Built for Success."
          description="From managed IT to custom software, we deliver end-to-end technology services that move your business forward."
        />

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const Icon = icons[s.slug] ?? Monitor
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="card-glow group relative overflow-hidden rounded-2xl border border-border p-7 transition-all duration-300 hover:border-primary/40"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1"
                      />
                    </div>
                    <h3
                      className="mt-12 font-display text-lg font-semibold leading-tight text-foreground"
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      {s.short}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
