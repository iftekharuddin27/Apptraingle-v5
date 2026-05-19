import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-blocks"
import { CtaSection } from "@/components/home-sections"

const news = [
  {
    tag: "Press",
    date: "Mar 2025",
    title: "Apptriangle Featured on News24 TV",
    desc: "We are a leading technology service company dedicated to empowering businesses and organizations with cutting-edge solutions.",
  },
  {
    tag: "Launch",
    date: "Feb 2025",
    title: "New Cybersecurity Services Launch",
    desc: "Comprehensive protection for legacy systems causing slow processing and poor user experience.",
  },
  {
    tag: "Award",
    date: "Jan 2025",
    title: "Apptriangle Wins Best IT Services Award",
    desc: "Recognised for excellence in delivering enterprise IT solutions across global markets.",
  },
  {
    tag: "Expansion",
    date: "Dec 2024",
    title: "Apptriangle Expands to Canada & Japan",
    desc: "Continuing our global mission with new offices opening in Canada and Japan to better serve clients worldwide.",
  },
  {
    tag: "Partnership",
    date: "Nov 2024",
    title: "New Partnership with IceWarp",
    desc: "Strengthening our reseller and implementation portfolio with the latest IceWarp collaboration suite.",
  },
  {
    tag: "Insights",
    date: "Oct 2024",
    title: "The Future of Business Process Automation",
    desc: "Our CTO shares perspectives on how AI-driven workflows are reshaping enterprise operations.",
  },
]

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="News & Events"
          title="Stay updated with our latest"
          highlight="announcements & insights."
          description="From product launches to global expansions and industry recognition — keep up with what's happening at Apptriangle."
        />

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((n, i) => (
                <article
                  key={n.title}
                  className={`group flex flex-col rounded-2xl border p-6 transition-colors ${
                    i === 1 ? "card-glow-active border-primary/50" : "card-glow border-border hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                        i === 1 ? "bg-white/20 text-white" : "bg-primary/15 text-primary"
                      }`}
                    >
                      {n.tag}
                    </span>
                    <span className={`text-xs ${i === 1 ? "text-white/80" : "text-muted-foreground"}`}>{n.date}</span>
                  </div>
                  <h3
                    className={`mt-6 font-display text-lg font-semibold leading-tight ${
                      i === 1 ? "text-white" : "text-foreground"
                    }`}
                  >
                    {n.title}
                  </h3>
                  <p className={`mt-2 text-sm ${i === 1 ? "text-white/85" : "text-muted-foreground"}`}>{n.desc}</p>
                    <Link
                    href="/contact-us"
                    className={`group mt-6 inline-flex items-center gap-1 text-sm font-medium ${
                      i === 1 ? "text-white" : "text-primary"
                    }`}
                  >
                    Read More{" "}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
