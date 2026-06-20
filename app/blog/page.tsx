"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-blocks"
import { TiltCard } from "@/components/tilt-card"
import { posts } from "@/lib/blog-posts"

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Blogs"
          title="Insights &"
          highlight="Innovation"
          whiteHighlight
          description="Expert articles, tutorials, and industry insights."
          bgImage="/images/resources-bg.png"
          bgFull
        />

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <TiltCard key={p.slug} intensity={8} className="rounded-2xl">
                <Link
                  href={`/blog/${p.slug}`}
                  className="card-glow group flex flex-col overflow-hidden rounded-2xl border-2 border-white/60 transition-colors hover:border-primary/40 h-full"
                >
                  <div className="air-float-wrap relative h-48 w-full overflow-hidden border-b border-white/10">
                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <span
                      className="inline-block self-start rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary"
                    >
                      {p.tag}
                    </span>
                    <h2
                      className="mt-6 font-display text-lg font-semibold leading-tight text-foreground"
                    >
                      {p.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <span
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      Read More
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
