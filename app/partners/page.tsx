"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal"
import { TiltCard } from "@/components/tilt-card"
import { CountUp } from "@/components/count-up"

const partners = [
  { name: "Microsoft",    logo: "/images/Company%20Profile%20Images/Microsoft-Logo.wine.png", large: true },
  { name: "IceWarp",      logo: "/images/Company%20Profile%20Images/IceWarp.png", large: true },
  { name: "enadoc",       logo: "/images/Company%20Profile%20Images/blob-1.png"},
  { name: "Tableau",      logo: "/images/Company%20Profile%20Images/Tableau.png", large: true },
  { name: "DigiCert",     logo: "/images/Company%20Profile%20Images/DigiCert_logo.svg.png" },
  { name: "Sectigo",      logo: "/images/Company%20Profile%20Images/GI-Sectigo-REG-300x198.png.bv.webp",  large: true },
  { name: "Trend Micro",  logo: "/images/Company%20Profile%20Images/1_Trend-Micro-Logo-white-1024x351-1.webp" },
  { name: "ZOHO",         logo: "/images/Company%20Profile%20Images/ZOHO.svg-1024x353.png" },
  { name: "Adobe",        logo: "/images/Company%20Profile%20Images/Adobe_Corporate_logo.svg-300x79.png.bv.webp" },
  { name: "UiPath",       logo: "/images/Company%20Profile%20Images/UiPath_2019_Corporate_Logo.png" },
  { name: "Autodesk",     logo: "/images/Company%20Profile%20Images/Bottom-Side-Cart-1024x576.png", large: true },
  { name: "Fortinet",     logo: "/images/Company%20Profile%20Images/fortinet-logo-white-300x34.png.bv.webp", large: true },
  { name: "ManageEngine", logo: "/images/Company%20Profile%20Images/manageengine-logo-white-768x135-1.png", large: true },
  { name: "AnyDesk",      logo: "/images/Company%20Profile%20Images/Logo_white_AnyDesk-02-2-300x94.webp.bv.webp", large: true },
  { name: "IFS",          logo: "/images/Company%20Profile%20Images/ifs_logo_40-1-300x118.png.bv.webp" },
]

const stats = [
  { value: "15+", label: "Partnerships" },
  { value: "7+",  label: "Years Experience" },
  { value: "50+", label: "Professionals" },
]

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden py-8 text-center sm:py-8">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url(/images/resources-bg.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Trusted Partners in Innovation
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground whitespace-nowrap sm:text-lg">
              We collaborate with industry leaders to bring you world-class technology solutions
            </p>
          </div>
        </section>

        {/* Partner Logos Grid */}
        <section className="pt-8 pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <StaggerGroup
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
              staggerChildren={0.05}
            >
              {partners.map((partner, i) => (
                <StaggerItem key={`${partner.name}-${i}`}>
                  <TiltCard intensity={10} className="h-full rounded-2xl">
                    <div className="flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-card/60 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(41,179,255,0.5)]">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={partner.large ? "h-28 w-48 object-contain" : "h-15 w-36 object-contain"}
                        loading="lazy"
                      />
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Why Our Partnerships Matter */}
        <section className="py-8">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Why Our Partnerships Matter
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our strategic partnerships with leading technology providers ensure that you receive the most advanced, reliable, and cost-effective solutions. These relationships give us access to cutting-edge technologies, training, and support that we pass on to our clients.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="grid grid-cols-3 gap-5">
              {stats.map((s) => (
                <TiltCard key={s.label} intensity={15} className="h-full rounded-2xl">
                  <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/60 bg-card/60 px-6 py-8 text-center backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_rgba(41,179,255,0.5)]">
                    <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                      <CountUp value={s.value} />
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-white/70">
                      {s.label}
                    </p>
                  </div>
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
