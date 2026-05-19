import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, ServiceCta } from "@/components/page-blocks"

const posts = [
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    excerpt:
      "Empowering businesses with flexible, scalable, and high-quality talent—right when they need it most. In today's rapidly evolving business world, organizations…",
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation (BPA)",
    excerpt:
      "Eliminate manual work, accelerate productivity, and transform your workflow with intelligent automation. What Business Process Automation Means Business Process Automation…",
  },
  {
    slug: "power-platform-development",
    title: "Power Platform Development",
    excerpt:
      "Empower your team with low-code innovation that accelerates business transformation. What Power Platform Development Means Microsoft Power Platform is a…",
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    excerpt:
      "Secure, scalable, and always-on IT management that keeps your business running without interruption. Technology is the backbone of every modern…",
  },
  {
    slug: "apps-development",
    title: "Apps Development",
    excerpt:
      "Transform ideas into powerful digital experiences with custom-built applications. What Apps Development Means App development refers to the process of…",
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    excerpt:
      "Protect your digital assets with intelligent, proactive, and reliable cybersecurity solutions. What Cybersecurity Services Mean Cybersecurity services involve protecting an…",
  },
]

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Blogs"
          title="Insights &"
          highlight="Innovation"
          description="Expert articles, tutorials, and industry insights."
        />

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className={`group flex flex-col rounded-2xl border p-7 transition-colors ${
                    i === 1 ? "card-glow-active border-primary/50" : "card-glow border-border hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`inline-block self-start rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      i === 1 ? "bg-white/20 text-white" : "bg-primary/15 text-primary"
                    }`}
                  >
                    Article
                  </span>
                  <h2
                    className={`mt-6 font-display text-lg font-semibold leading-tight ${
                      i === 1 ? "text-white" : "text-foreground"
                    }`}
                  >
                    {p.title}
                  </h2>
                  <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-white/85" : "text-muted-foreground"}`}>
                    {p.excerpt}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${
                      i === 1 ? "text-white" : "text-primary"
                    }`}
                  >
                    Read more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceCta title="Want to discuss how these insights apply to your business?" />
      </main>
      <SiteFooter />
    </>
  )
}
