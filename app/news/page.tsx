"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-blocks"
import { CtaSection } from "@/components/home-sections"
import { TiltCard } from "@/components/tilt-card"

import newsThree from "../../Images/News & Articles/three.png"
import newsImageOne from "../../Images/News and Events Images/285a31ee0fbd58dcc2e7b7ad99c0fdf7.jpg"
import newsImageTwo from "../../Images/News and Events Images/e11dc3595a3c2088717327a1652d142e.jpg"
import eventOne from "../../Images/News and Events Images/pexels-thisisengineering-3862599-1-1024x683.jpg.bv.webp"
import eventTwo from "../../Images/News and Events Images/pexels-pixabay-38568-1024x680.jpg.bv.webp"
import eventThree from "../../Images/News and Events Images/5c09785b0db777096eadbf4e354d9a5e.jpg"

const news = [
  {
    tag: "Press",
    date: "Mar 2025",
    title: "Apptriangle Featured on News24 TV",
    image: newsImageOne,
    desc: "We are a leading technology service company dedicated to empowering businesses and organizations with cutting-edge solutions.",
  },
  {
    tag: "Launch",
    date: "Feb 2025",
    title: "New Cybersecurity Services Launch",
    image: newsImageTwo,
    desc: "Comprehensive protection for legacy systems causing slow processing and poor user experience.",
  },
  {
    tag: "Award",
    date: "Jan 2025",
    title: "Apptriangle Wins Best IT Services Award",
    image: eventOne,
    desc: "Recognised for excellence in delivering enterprise IT solutions across global markets.",
  },
  {
    tag: "Expansion",
    date: "Dec 2024",
    title: "Apptriangle Expands to Canada & Japan",
    image: eventTwo,
    desc: "Continuing our global mission with new offices opening in Canada and Japan to better serve clients worldwide.",
  },
  {
    tag: "Partnership",
    date: "Nov 2024",
    title: "New Partnership with IceWarp",
    image: eventThree,
    desc: "Strengthening our reseller and implementation portfolio with the latest IceWarp collaboration suite.",
  },
  {
    tag: "Insights",
    date: "Oct 2024",
    title: "The Future of Business Process Automation",
    image: newsThree,
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
              {news.map((n) => (
                <TiltCard key={n.title} intensity={8} className="rounded-2xl">
                <article
                  className="card-glow group flex flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary/40 h-full"
                >
                  <div className="air-float-wrap relative h-48 w-full overflow-hidden border-b border-white/10">
                    <Image src={n.image} alt={n.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {n.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{n.date}</span>
                    </div>
                    <h3
                      className="mt-6 font-display text-lg font-semibold leading-tight text-foreground"
                    >
                      {n.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{n.desc}</p>
                    <Link
                      href="/contact-us"
                      className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      Read More{" "}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
                </TiltCard>
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
