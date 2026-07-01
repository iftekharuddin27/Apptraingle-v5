"use client"

import { useEffect, useState } from "react"
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
  Users,
  Zap,
} from "lucide-react"
import { services } from "@/lib/site"
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal"
import { ProgrammerIllustration } from "@/components/programmer-illustration"
import { TiltCard } from "@/components/tilt-card"
import { CountUp } from "@/components/count-up"

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
    <section id="hero" className="relative overflow-hidden">
      {/* Hero background image — blurred so it stays atmospheric */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-no-repeat scale-[1.03]"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
          backgroundPosition: "20% center",
          filter: "blur(0.5px)",
        }}
        aria-hidden="true"
      />
      {/* Left-side mask — fully dark behind text, fades to transparent toward the right/bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.15) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Top fade — keeps the very top edge clean */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 35%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-16">
        {/* LEFT - copy */}
        <div className="lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="inline-flex items-center gap-3 text-sm font-boldtracking-[0.2em] text-primary sm:text-base [text-shadow:0_0_18px_rgba(41,179,255,0.6)]"
          >
           
            We are professionals
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-0 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            <span className="whitespace-nowrap">
              With More Than{" "}
              <span className="text-blue-400 font-bold">7</span>
              <br />
              <span className="relative inline-block">
                <span className="text-blue-400 font-semibold">Years</span>
              </span>{" "}
              of Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
           Our expert team is available 24/7 to attend to your problems promptly and competently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact-us"
              className=" group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground  transition-all duration-300 hover:scale-[1.03] hover:shadow-[10_10px_10px_-5px_rgba(41,179,255,1)]"
            >
              <span className="relative z-10">Get a Consultation</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:border-primary/60 hover:bg-card/60 hover:shadow-[0_0_30px_-5px_rgba(41,179,255,0.5)]"
            >
              Explore Services
              <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </Link>
          </motion.div>

        </div>

        {/* RIGHT - hero animation */}
        <div className="lg:col-span-6">
          <ProgrammerIllustration className="mx-auto w-full max-w-[480px] translate-x-6 sm:translate-x-5 lg:translate-x-15" />
        </div>
      </div>
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
      <TiltCard intensity={10} className="h-full rounded-2xl">
      <Link
        href={`/services/${s.slug}`}
        className="conic-border group relative block h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/60 bg-card/60 p-7 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_rgba(41,179,255,0.5)]"
      >
        <div className="relative inline-flex">
          <span className="grid h-14 w-14 place-items-center rounded-2xl border border-transparent bg-gradient-to-br from-primary/25 to-primary/5 text-primary group-hover:shadow-[0_0_14px_-4px_rgba(41,179,255,0.35)] transition-shadow duration-300">
            <Icon className="h-6 w-6" />
          </span>
        </div>

        <h3 className="relative mt-8 font-display text-lg font-semibold leading-tight text-primary">
          {s.title}
        </h3>
        <p className="relative mt-2 text-sm leading-relaxed text-white line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">{s.short}</p>

        <div className="relative mt-6 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            Learn more
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
          </span>
          <span className="h-px flex-1 ml-4 bg-gradient-to-r from-transparent via-primary/30 to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </Link>
      </TiltCard>
    </motion.div>
  )
}

export function ServicesGrid() {
  const featured = services.slice(0, 6)
  return (
    <section className="relative overflow-hidden py-8">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative flex flex-col items-center gap-4 text-center">
          <ScrollReveal className="max-w-2xl">
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-br from-primary to-brand-blue-soft bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Reliable and Innovative Services Designed for Your Business Success.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
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
    { value: "150+", label: "Projects Completed" },
    { value: "200+", label: "Happy Customers" },
    { value: "50+", label: "Professionals" },
    { value: "99%", label: "Client Retention" },
    { value: "7+", label: "Years Experience" },
  ]
  return (
    <section className="relative overflow-hidden py-8">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
            Our{" "}
            <span className=" text-primary">Experience!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Experience That Matters, Years of Excellent Results You Can Count On.
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
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/60 bg-card/60 p-7 text-center backdrop-blur-xl shadow-[0_0_18px_-4px_rgba(41,179,255,0.45),inset_0_0_24px_-8px_rgba(41,179,255,0.1)] transition-all hover:border-primary/70 hover:shadow-[0_0_28px_-4px_rgba(41,179,255,0.7),inset_0_0_30px_-6px_rgba(41,179,255,0.15)]">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(closest-side, rgba(41,179,255,0.18), transparent 70%)",
                      }}
                    />
                    <p className="relative font-display text-2xl font-semibold text-foreground sm:text-3xl">
                      <CountUp value={s.value} />
                    </p>
                    <p className="relative mt-2 text-xs uppercase tracking-wider text-white">
                      {s.label}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

function AboutIllustration() {
  const [svg, setSvg] = useState("")
  useEffect(() => {
    fetch("/images/about-work.svg")
      .then((r) => r.text())
      .then(setSvg)
  }, [])
  return (
    <div className="about-illustration w-full max-w-md scale-[1.1] select-none">
      <style>{`
        .about-illustration svg {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  )
}

export function AboutSection() {
  const points = ["24/7 Expert Support", "Top-Tier Engineering Experts", "Transparent Pricing", "Future-proof Solutions"]
  return (
    <section className="relative overflow-hidden py-8">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary [text-shadow:0_0_18px_rgba(41,179,255,0.6)]">
              <span className="block h-px w-6 bg-gradient-to-r from-transparent to-primary" aria-hidden="true" />
              Who we are?
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              About {" "}
              <span className="bg-gradient-to-br from-primary to-brand-blue-soft bg-clip-text text-transparent">
                 Us
              </span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We&apos;re a global leading technology service provider dedicated to empowering businesses and organizations with cutting-edge solutions. With a dynamic team of industry experts and a passion for innovation, we strive to deliver top-notch services that propel our clients towards success.
            </p>
            <StaggerGroup as="ul" className="mt-7 grid grid-cols-2 gap-3 text-sm" staggerChildren={0.06}>
              {points.map((p) => (
                <StaggerItem as="li" key={p} className="group flex items-center gap-3 rounded-xl border border-white/60 bg-card/50 p-3 backdrop-blur transition-colors hover:border-primary/40">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary transition-transform group-hover:scale-110">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="font-medium text-primary">{p}</span>
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

          <ScrollReveal delay={0.15} className="flex justify-end">
            <AboutIllustration />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export function PartnersSection() {
  const partners = [
    { name: "Microsoft",    logo: "/images/Company%20Profile%20Images/Microsoft-Logo.wine.png", logoClassName: "scale-380" },
    { name: "IceWarp",      logo: "/images/Company%20Profile%20Images/IceWarp.png", logoClassName: "scale-125" },
    { name: "enadoc",       logo: "/images/Company%20Profile%20Images/blob-1.png", logoClassName: "scale-200" },
    { name: "Tableau",      logo: "/images/Company%20Profile%20Images/Tableau.png", logoClassName: "scale-125" },
    { name: "DigiCert",     logo: "/images/Company%20Profile%20Images/DigiCert_logo.svg.png", logoClassName: "scale-100" },
    { name: "Sectigo",      logo: "/images/Company%20Profile%20Images/GI-Sectigo-REG-300x198.png.bv.webp", logoClassName: "scale-250" },
    { name: "Trend Micro",  logo: "/images/Company%20Profile%20Images/1_Trend-Micro-Logo-white-1024x351-1.webp", logoClassName: "scale-125" },
    { name: "ZOHO",         logo: "/images/Company%20Profile%20Images/ZOHO.svg-1024x353.png" },
    { name: "Adobe",        logo: "/images/Company%20Profile%20Images/Adobe_Corporate_logo.svg-300x79.png.bv.webp" },
    { name: "UiPath",       logo: "/images/Company%20Profile%20Images/UiPath_2019_Corporate_Logo.png" },
    { name: "Autodesk",     logo: "/images/Company%20Profile%20Images/Bottom-Side-Cart-1024x576.png", logoClassName: "scale-225" },
    { name: "Fortinet",     logo: "/images/Company%20Profile%20Images/fortinet-logo-white-300x34.png.bv.webp", logoClassName: "scale-125" },
    { name: "ManageEngine", logo: "/images/Company%20Profile%20Images/manageengine-logo-white-768x135-1.png", logoClassName: "scale-125" },
    { name: "AnyDesk",      logo: "/images/Company%20Profile%20Images/Logo_white_AnyDesk-02-2-300x94.webp.bv.webp", logoClassName: "scale-150" },
    { name: "IFS",          logo: "/images/Company%20Profile%20Images/ifs_logo_40-1-300x118.png.bv.webp" },
  ]
  return (
    <section className="border-y border-primary/15 bg-card/20 py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
             <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Our {" "}
              <span className="bg-gradient-to-br from-primary to-brand-blue-soft bg-clip-text text-transparent">
                 Partners
              </span>
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
              className="inline-flex h-20 w-48 flex-none items-center justify-center rounded-2xl border border-transparent bg-card/50 px-6 py-4 backdrop-blur"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className={`h-8 w-auto object-contain sm:h-10 ${partner.logoClassName ?? ""}`}
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
      overlayIcon: "/images/play-button.png",
      desc: "We are a leading technology service company empowering businesses with cutting-edge solutions.",
      href: "https://youtu.be/WgJBB3ORjTc?si=_xs2mzqdTZD0Dv7-",
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
    <section className="relative overflow-hidden py-8">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative flex flex-col items-center gap-4 text-center">
          <ScrollReveal className="max-w-2xl">
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              News & {" "}
              <span className="bg-gradient-to-br from-primary to-brand-blue-soft bg-clip-text text-transparent">
                 Events
              </span>
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Stay updated with our announcements, launches, and insights.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
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
          {news.map((n) => {
            const CardTag = n.href ? "a" : "div"
            const cardProps = n.href ? { href: n.href, target: "_blank", rel: "noopener noreferrer" } : {}
            return (
              <StaggerItem as="article" key={n.title}>
                <TiltCard intensity={6} className="h-full rounded-2xl">
                  <CardTag
                    {...cardProps}
                    className="conic-border group flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-card/60 backdrop-blur-xl transition-colors hover:border-primary/40"
                  >
                    <div className="air-float-wrap relative aspect-16/10 w-full overflow-hidden border-b border-primary/15">
                      <Image
                        src={n.image}
                        alt={`${n.tag} cover`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      {n.overlayIcon && (
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <Image
                            src={n.overlayIcon}
                            alt=""
                            width={88}
                            height={88}
                            className="h-20 w-20 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-semibold leading-tight text-primary">
                        {n.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{n.desc}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        Read More
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardTag>
                </TiltCard>
              </StaggerItem>
            )
          })}
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

export function HomeBottomCta() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <TiltCard intensity={4} className="rounded-3xl">
            <div className="conic-border group relative overflow-hidden rounded-3xl border border-white/60 bg-linear-to-br from-primary/15 via-card to-card p-10 sm:p-16 text-center transition-colors duration-300 hover:border-primary/60">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse at center, rgba(41,179,255,0.12), transparent 70%)" }}
              />
              <div className="relative">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Let&apos;s Work Together
                </h2>
                <p className="mt-4 text-base font-semibold text-primary sm:text-lg">
                  Ready to transform your business? Get in touch with our team today.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact-us"
                    className="shine-sweep group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(41,179,255,0.8)] transition-transform hover:scale-[1.03]"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45 group-hover/btn:translate-x-1" />
                  </Link>
                  <Link
                    href="https://bookings.cloud.microsoft/book/MeetwithApptriangle@apptriangle.com/?ismsaljsauthenabled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:border-primary/60 hover:bg-card/60 hover:shadow-[0_0_30px_-5px_rgba(41,179,255,0.5)]"
                  >
                    Schedule a Call
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover/btn:translate-x-1">
                      <ArrowUpRight className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover/btn:rotate-45" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <TiltCard intensity={4} className="rounded-3xl">
            <div className="conic-border group relative overflow-hidden rounded-3xl border border-primary/30 bg-linear-to-br from-primary/15 via-card to-card p-10 sm:p-16">
              <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary [text-shadow:0_0_18px_rgba(41,179,255,0.6)]">
                    <span className="block h-px w-6 bg-linear-to-r from-transparent to-primary" aria-hidden="true" />
                    Let&apos;s build
                  </span>
                  <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    Ready to transform{" "}
                    <span className="bg-linear-to-br from-primary to-brand-blue-soft bg-clip-text text-transparent">
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
