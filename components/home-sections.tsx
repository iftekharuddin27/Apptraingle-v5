"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  AudioWaveform,
  Bot,
  Brain,
  ChartNoAxesCombined,
  Check,
  FileText,
  FolderCode,
  Headset,
  ImageIcon,
  Lock,
  Mails,
  MessageSquare,
  Monitor,
  Settings,
  ShieldCheck,
  Smartphone,
  Star,
  Users,
  Zap,
} from "lucide-react"
import { services } from "@/lib/site"
import { InteractiveGrid } from "@/components/interactive-grid"
import { NeuralConstellation } from "@/components/neural-constellation"
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal"
import { FluidBallAnimation } from "@/components/fluid-ball"
import { TiltCard } from "@/components/tilt-card"
import { FloatingImage } from "@/components/floating-image"

export const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* <NeuralConstellation /> */}
      <InteractiveGrid />
      <div className="pointer-events-none relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 pb-32 pt-4 sm:px-8 sm:pt-6 lg:grid-cols-12 lg:gap-10 lg:pb-40">
        {/* LEFT - copy */}
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-0 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl xl:text-7xl"
          >
            Architecting the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-brand-blue-soft to-primary bg-clip-text text-transparent">
                technology
              </span>
            </span>
            {" "}of tomorrow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            7+ years of crafting cutting-edge software, AI, and cloud solutions.
            Our experts are on call 24/7, turning ambitious ideas into shipped products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact-us"
              className="shine-sweep group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(41,179,255,0.8)] transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10">Get a Consultation</span>
                  <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:bg-card/60"
            >
              Explore Services
              <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-primary/20 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1">
                <ArrowUpRight className="h-3 w-3 text-primary transition-transform duration-300 " />
              </span>
            </Link>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6"
          >
            {[
              { v: "500+", l: "Projects" },
              { v: "98%", l: "Retention" },
              { v: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l} className="border-l border-primary/30 pl-4">
                <p className="font-display text-3xl font-semibold text-foreground">{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - hero animation */}
        <div className="lg:col-span-6">
          <FluidBallAnimation />
        </div>
      </div>

      <TiltCard intensity={12} className="w-full max-w-5xl mx-auto">
        <div className="group flex w-full items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(41,179,255,0.25)]">

          <div className="flex flex-col">
            <span className="text-3xl font-display font-bold text-white">200+</span>
             <span className="text-xs font-semibold tracking-wider text-white/60 uppercase">Customers</span>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
             
            </div>
          </div>

          <div className="mx-8 hidden h-12 w-px bg-white/10 md:block"></div>

          <div className="hidden flex-1 items-center justify-between md:flex">
            {["Microsoft", "DigiCert", "IceWarp", "Zoho"].map((brand) => (
              <div key={brand} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(41,179,255,0.8)]"></div>
                <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">{brand}</span>
              </div>
            ))}
          </div>
          
        </div>
      </TiltCard>
    </section>
  )
}

function PartnerLabel({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(41,179,255,0.7)]" />
      {name}
    </div>
  )
}


/* -------- Service card with magnetic icon + reveal layer -------- */
function ServiceCard({ s }: { s: (typeof services)[number] & { description?: string } }) {
  const Icon = serviceIcons[s.slug] ?? Monitor

  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }
      }}
      className="h-full rounded-2xl"
    >
      <Link
        href={`/services/${s.slug}`}
        className="conic-border group relative block h-full min-h-[300px] overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-7 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_rgba(41,179,255,0.5)]"
      >
        <div className="relative inline-flex">
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/25 to-primary/5 text-primary shadow-[0_0_30px_-10px_rgba(41,179,255,0.7)]">
            <Icon className="h-6 w-6" />
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(41,179,255,0.6), transparent 50%, rgba(41,179,255,0.6))",
                filter: "blur(8px)",
              }}
            />
          </span>
        </div>

        <h3 className="relative mt-8 font-display text-lg font-semibold leading-tight text-foreground">
          {s.title}
        </h3>
        <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{s.short}</p>

        {/* Expanded description on hover */}
        <div className="relative mt-3 max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-[200px] group-hover:opacity-100">
          <p className="text-xs leading-relaxed text-muted-foreground/80 pt-2 border-t border-primary/10">
            {s.description || "Comprehensive solutions tailored to your business needs with cutting-edge technology and expert guidance."}
          </p>
        </div>

        <div className="relative mt-6 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            Learn more
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
          </span>
          <span className="h-px flex-1 ml-4 bg-gradient-to-r from-transparent via-primary/30 to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </Link>
    </motion.div>
  )
}

export function ServicesGrid() {
  const featured = services.slice(0, 6)
  return (
    <section className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <ScrollReveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              What we do
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Services that{" "}
              <span className="bg-gradient-to-br from-primary to-brand-blue-soft bg-clip-text text-transparent">
                move you forward
              </span>
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Reliable and innovative solutions designed for measurable business outcomes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_30px_-5px_rgba(41,179,255,0.5)]"
            >
              Explore all services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerGroup
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start"
          staggerChildren={0.08}
          delayChildren={0.1}
        >
          {featured.map((s) => (
            <StaggerItem key={s.slug}>
              <ServiceCard s={s} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Customers" },
    { value: "50+", label: "Professionals" },
    { value: "98%", label: "Client Retention" },
    { value: "7+", label: "Years Experience" },
  ]
  return (
    <section className="relative">
      <div className="section-blue relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              By the numbers
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl">
              Experience that{" "}
              <span className="italic text-brand-blue-soft">delivers.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/85">
              Years of excellence and results you can count on.
            </p>
          </ScrollReveal>

          <StaggerGroup
            className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
            staggerChildren={0.08}
          >
            {stats.map((s, i) => (
              <StaggerItem key={s.label}>
                <motion.div
                  animate={{ y: [-6, 6] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  whileHover={{
                    y: 0,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="h-full rounded-2xl"
                >
                  <TiltCard intensity={15} className="h-full rounded-2xl">
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-7 text-center backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/10">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent 70%)",
                        }}
                      />
                      <p className="relative font-display text-4xl font-semibold text-white sm:text-5xl">
                        {s.value}
                      </p>
                      <p className="relative mt-2 text-xs uppercase tracking-wider text-white/85">
                        {s.label}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  const points = ["24/7 Expert Support", "Senior-only Engineers", "Transparent Pricing", "Future-proof Solutions"]
  return (
    <section className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              Who we are
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              A team that ships,{" "}
              <span className="bg-gradient-to-br from-primary to-brand-blue-soft bg-clip-text text-transparent">
                obsessively.
              </span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We&apos;re a global technology service provider dedicated to empowering businesses with
              cutting-edge solutions. A dynamic team of industry experts and a passion for innovation —
              that&apos;s how we propel our clients to success.
            </p>
            <StaggerGroup as="ul" className="mt-7 grid grid-cols-2 gap-3 text-sm" staggerChildren={0.06}>
              {points.map((p) => (
                <StaggerItem as="li" key={p} className="group flex items-center gap-3 rounded-xl border border-primary/15 bg-card/50 p-3 backdrop-blur transition-colors hover:border-primary/40">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary transition-transform group-hover:scale-110">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="font-medium">{p}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <div className="mt-9">
              <Link
                href="/about-us"
                className="shine-sweep group inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(41,179,255,0.8)] transition-transform hover:scale-[1.03]"
              >
                <span className="relative z-10">Learn More</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <FloatingImage
              src="/images/about-us/Team.jpeg"
              alt="Apptriangle team"
              rounded="rounded-3xl"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export function PartnersSection() {
  const partners = [
    { name: "Microsoft", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/Microsoft-Logo.wine_-300x75.webp.bv.webp?bv_host=apptriangle.com" },
    { name: "DigiCert", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/DigiCert_logo.svg-300x68.webp.bv.webp?bv_host=apptriangle.com" },
    { name: "Sectigo", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/GI-Sectigo-REG-300x198.png.bv.webp?bv_host=apptriangle.com" },
    { name: "Trend Micro", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/1_Trend-Micro-Logo-white-1024x351-1-300x103.webp.bv.webp?bv_host=apptriangle.com" },
    { name: "ZOHO", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/ZOHO.svg-300x103.png.bv.webp?bv_host=apptriangle.com" },
    { name: "Adobe", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/Adobe_Corporate_logo.svg-300x79.png.bv.webp?bv_host=apptriangle.com" },
    { name: "UiPath", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/UiPath_2019_Corporate_Logo-300x106.webp.bv.webp?bv_host=apptriangle.com" },
    { name: "Fortinet", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/fortinet-logo-white-300x34.png.bv.webp?bv_host=apptriangle.com" },
    { name: "ManageEngine", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/manageengine-logo-white-768x135-1-300x53.png.bv.webp?bv_host=apptriangle.com" },
    { name: "AnyDesk", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/Logo_white_AnyDesk-02-2-300x94.webp.bv.webp?bv_host=apptriangle.com" },
    { name: "IFS", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/ifs_logo_40-1-300x118.png.bv.webp?bv_host=apptriangle.com" },
  ]
  return (
    <section className="border-y border-primary/15 bg-card/20 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Partners</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted technology partners
          </h2>
        </ScrollReveal>
      </div>
      <div
        className="mt-12 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)",
          WebkitMaskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-6 px-5 sm:gap-10 sm:px-8">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="inline-flex items-center justify-center rounded-2xl border border-primary/15 bg-card/50 px-6 py-4 backdrop-blur transition-all hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(41,179,255,0.5)]"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-8 w-auto object-contain sm:h-10"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NewsSection() {
  const news = [
    {
      tag: "Press",
      image: "/images/news-and-articles/one.png",
      title: "Apptriangle Featured on News24 TV",
      desc: "We are a leading technology service company empowering businesses with cutting-edge solutions.",
    },
    {
      tag: "Launch",
      image: "/images/news-and-articles/two.png",
      title: "New Cybersecurity Services Launch",
      desc: "Modernizing legacy systems for faster processing and superior user experience.",
    },
    {
      tag: "Award",
      image: "/images/news-and-articles/three.png",
      title: "Apptriangle Wins Best IT Services Award",
      desc: "Recognized for excellence in delivery and customer satisfaction.",
    },
  ]
  return (
    <section className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              Latest
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              News &amp; Articles
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Stay updated with our announcements, launches, and insights.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_30px_-5px_rgba(41,179,255,0.5)]"
            >
              View all news
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3" staggerChildren={0.1}>
          {news.map((n) => (
            <StaggerItem as="article" key={n.title}>
              <TiltCard intensity={6} className="h-full rounded-2xl">
                <div className="conic-border group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card/60 backdrop-blur-xl transition-colors hover:border-primary/40">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-primary/15">
                    <Image
                      src={n.image}
                      alt={`${n.tag} cover`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{n.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read More
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export function ImagePlaceholder({ label, compact }: { label: string; compact?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(41,179,255,0.08),rgba(255,255,255,0.02))]">
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <ImageIcon className={compact ? "h-5 w-5" : "h-8 w-8"} aria-hidden="true" />
        <span className={compact ? "text-[10px] uppercase tracking-wider" : "text-xs uppercase tracking-wider"}>
          {label}
        </span>
      </div>
    </div>
  )
}

export function CtaSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <TiltCard intensity={4} className="rounded-3xl">
            <div className="conic-border group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-10 sm:p-16">
              <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                    Let&apos;s build
                  </span>
                  <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    Ready to transform{" "}
                    <span className="bg-gradient-to-br from-primary to-brand-blue-soft bg-clip-text text-transparent">
                      your business?
                    </span>
                  </h2>
                </div>
                <Link
                  href="/contact-us"
                  className="shine-sweep group/btn relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(41,179,255,0.8)] transition-transform hover:scale-[1.03]"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
