"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal"
import { TiltCard } from "@/components/tilt-card"
import { CountUp } from "@/components/count-up"
import { ServiceCta } from "@/components/page-blocks"

const partners = [
  { name: "Microsoft",    logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/Microsoft-Logo.wine_-300x75.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "IceWarp",      logo: "https://apptriangle.com/wp-content/uploads/2025/11/IW-Logo-Wide-4x.png" },
  { name: "enadoc",       logo: "https://apptriangle.com/wp-content/uploads/2025/11/blob-1.png" },
  { name: "Tableau",      logo: "https://apptriangle.com/wp-content/uploads/2025/11/681be50939b06141d83beb76_XktGtPIPc4ZCre0KZ6xJtjvIcCQtJAcHNkVZU1X2nE0-1.png" },
  { name: "DigiCert",     logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/DigiCert_logo.svg-300x68.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "Sectigo",      logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/GI-Sectigo-REG-300x198.png.bv.webp?bv_host=apptriangle.com",  large: true },
  { name: "Trend Micro",  logo: "https://apptriangle.com/wp-content/uploads/2025/11/1_Trend-Micro-Logo-white-1024x351-1.webp" },
  { name: "ZOHO",         logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/ZOHO.svg-300x103.png.bv.webp?bv_host=apptriangle.com" },
  { name: "Adobe",        logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/Adobe_Corporate_logo.svg-300x79.png.bv.webp?bv_host=apptriangle.com" },
  { name: "UiPath",       logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/UiPath_2019_Corporate_Logo-300x106.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "Autodesk",     logo: "https://apptriangle.com/wp-content/uploads/2025/11/Bottom-Side-Cart-1024x576.png", large: true },
  { name: "Fortinet",     logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/fortinet-logo-white-300x34.png.bv.webp?bv_host=apptriangle.com" },
  { name: "ManageEngine", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/manageengine-logo-white-768x135-1-300x53.png.bv.webp?bv_host=apptriangle.com" },
  { name: "AnyDesk",      logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/Logo_white_AnyDesk-02-2-300x94.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "IFS",          logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/ifs_logo_40-1-300x118.png.bv.webp?bv_host=apptriangle.com" },
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
        <section className="relative overflow-hidden py-24 text-center sm:py-32">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl">
              Trusted Partners in{" "}
              <span className="bg-linear-to-r from-primary to-brand-blue-soft bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We collaborate with industry leaders to bring you world-class technology solutions
            </p>
          </div>
        </section>

        {/* Partner Logos Grid */}
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <StaggerGroup
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
              staggerChildren={0.05}
            >
              {partners.map((partner, i) => (
                <StaggerItem key={`${partner.name}-${i}`}>
                  <TiltCard intensity={10} className="h-full rounded-2xl">
                    <div className="flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-primary/15 bg-card/60 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(41,179,255,0.5)]">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={partner.large ? "h-16 w-40 object-contain" : "h-10 w-32 object-contain"}
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
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
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
                  <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/15 bg-card/60 px-6 py-8 text-center backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_rgba(41,179,255,0.5)]">
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

        <ServiceCta title="Ready to leverage our partner network for your business?" />
      </main>
      <SiteFooter />
    </>
  )
}
