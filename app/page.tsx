import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  Hero,
  ServicesGrid,
  ExperienceSection,
  AboutSection,
  PartnersSection,
  NewsSection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesGrid />
        <ExperienceSection />
        <AboutSection />
        <PartnersSection />
        <NewsSection />
      </main>
      <SiteFooter />
    </>
  )
}
