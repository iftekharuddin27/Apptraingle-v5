"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, ServiceCta } from "@/components/page-blocks"
import { TiltCard } from "@/components/tilt-card"

import staffAugImage from "../../Images/Blog-Images/pexels-mikhail-nilov-7681302-1024x683.jpg"
import bpaImage from "../../Images/Blog-Images/pexels-divinetechygirl-1181244-1024x684.jpg"
import powerPlatformImage from "../../Images/Blog-Images/pexels-cottonbro-6804068-1024x683.jpg"
import managedItImage from "../../Images/Blog-Images/pexels-altabena-10142683-1024x683.jpg.bv.webp"
import appsImage from "../../Images/Blog-Images/pexels-pavel-danilyuk-6612717-1024x684.jpg.bv.webp"
import cybersecurityImage from "../../Images/Blog-Images/pexels-tima-miroshnichenko-5380665-1024x683.jpg.bv.webp"

const posts = [
  {
    slug: "staff-augmentation",
    tag: "Staff Augmentation",
    title: "Staff Augmentation",
    image: staffAugImage,
    excerpt:
      "Empowering businesses with flexible, scalable, and high-quality talent—right when they need it most. In today's rapidly evolving business world, organizations…",
  },
  {
    slug: "business-process-automation",
    tag: "Business Process Automation (BPA)",
    title: "Business Process Automation (BPA)",
    image: bpaImage,
    excerpt:
      "Eliminate manual work, accelerate productivity, and transform your workflow with intelligent automation. What Business Process Automation Means Business Process Automation…",
  },
  {
    slug: "power-platform-development",
    tag: "Power Platform Development",
    title: "Power Platform Development",
    image: powerPlatformImage,
    excerpt:
      "Empower your team with low-code innovation that accelerates business transformation. What Power Platform Development Means Microsoft Power Platform is a…",
  },
  {
    slug: "managed-it-services",
    tag: "Managed IT Services",
    title: "Managed IT Services",
    image: managedItImage,
    excerpt:
      "Secure, scalable, and always-on IT management that keeps your business running without interruption. Technology is the backbone of every modern…",
  },
  {
    slug: "apps-development",
    tag: "Apps Development",
    title: "Apps Development",
    image: appsImage,
    excerpt:
      "Transform ideas into powerful digital experiences with custom-built applications. What Apps Development Means App development refers to the process of…",
  },
  {
    slug: "cybersecurity-services",
    tag: "Cybersecurity Services",
    title: "Cybersecurity Services",
    image: cybersecurityImage,
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
              {posts.map((p) => (
                <TiltCard key={p.slug} intensity={8} className="rounded-2xl">
                <Link
                  href={`/blog/${p.slug}`}
                  className="card-glow group flex flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary/40 h-full"
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

        <ServiceCta title="Want to discuss how these insights apply to your business?" />
      </main>
      <SiteFooter />
    </>
  )
}
