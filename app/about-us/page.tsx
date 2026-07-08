"use client"

import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, ServiceCta } from "@/components/page-blocks"
import { CountUp } from "@/components/count-up"
import { TiltCard } from "@/components/tilt-card"
import { Apptriangle3DLogo } from "@/components/apptriangle-3d-logo"

const team = [
  {
    name: "Ali Mortuza Bilash",
    role: "Director",
    photo: "Annotation-2025-07-15-133358-1.png",
    bio: "A tech visionary with over 15 years of experience in software and enterprise solutions, driving innovation and business transformation.",
  },
  {
    name: "Moshiur Rahman Oly",
    role: "Director",
    photo: "WhatsApp-Image-2025-07-14-at-1.04.10-PM.jpeg",
    bio: "A technology leader with over 12 years of experience in software and enterprise solutions, driving innovation and global growth.",
  },
  {
    name: "Rana Mustafiz",
    role: "Director",
    photo: "WhatsApp-Image-2025-07-14-at-3.09.04-PM-1024x972.jpeg",
    bio: "An industry expert with over 20 years of experience and a background at AWS, driving growth and strategic operations across Australia.",
  },
]

const stats = [
  { value: "50+", label: "Professionals" },
  { value: "40+", label: "Certified Resources" },
  { value: "20+", label: "Countries Covered" },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="About Apptriangle"
          description="We are a global leading technology service provider dedicated to empowering businesses and organizations with cutting-edge solutions. With a dynamic team of industry experts and a passion for innovation, we strive to deliver top-notch services that propel our clients towards success."
          wide
          bgImage="/images/about-us-bg.png"
          bgFull
        />

        {/* Our Story */}
        <section className="py-6">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-stretch gap-10 lg:grid-cols-[1.2fr_1.05fr]">
              <div className="flex h-full flex-col rounded-2xl bg-card/60 p-8 backdrop-blur">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Our <span className="text-primary">Story</span></h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Every great idea begins with a spark — and for <strong>Apptriangle Limited</strong>, that spark ignited in <strong>2018</strong>, when three passionate engineers — <span className="text-primary">Ali Mortuza <strong>Bilash</strong></span>, <span className="text-primary">Moshiur Rahman <strong>Oly</strong></span>, and another like-minded colleague — shared a common dream: <strong>To deliver world-class apps and technology services that transform how businesses work.</strong> All three came from strong engineering backgrounds, with years of experience working with multinational tech companies serving enterprise clients. But soon, <strong>Bilash</strong> &amp; <strong>Moshiur</strong> took the bold step of leaving their secure jobs, stepping out of their comfort zones to bring the <strong>Apptriangle</strong> vision to life. The third co-founder chose to continue his professional journey elsewhere, but his place in the original idea remained — symbolized in the name itself, <strong>Apptriangle</strong> — representing the three points of innovation that sparked the journey.
                  </p>
                </div>
              </div>
              <div className="air-float-wrap relative h-100 w-full max-w-md translate-y-18 justify-self-end overflow-hidden">
                <Apptriangle3DLogo className="h-full w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* The Beginning */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1.2fr] lg:items-center">
              <div className="air-float-wrap relative aspect-4/3 overflow-hidden rounded-2xl md:aspect-[16/10]">
                <Image
                  src="/images/about-us/about-us-3.jpg"
                  alt="The Beginning"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="rounded-2xl bg-card/60 p-8 backdrop-blur">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">The <span className="text-primary">Beginning</span></h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Apptriangle&apos;s first product, <strong>ShopManager</strong>, was built to empower small retailers with tools for managing inventory, tracking sales, and generating automated SMS invoices. They personally visited local markets, listened to shop owners, and refined the product through real-world feedback — proving that genuine innovation starts with understanding real customer needs.
                  </p>
                  <p>
                    Over time, Apptriangle expanded its product portfolio, developing several innovative solutions such as <strong>TREAL, OMS, GuestPro</strong>, and <strong>GlamPro</strong> — each designed to solve real business challenges and enhance operational efficiency. And this journey of innovation continues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Breakthrough */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1.05fr] lg:items-center">
              <div className="rounded-2xl bg-card/60 p-8 backdrop-blur">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Global <span className="text-primary">Breakthrough</span></h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    In <strong>2020</strong>, amid the global pandemic, an opportunity arrived that changed everything. Microsoft&apos;s global support team reached out to Bilash with an offer to provide remote assistance for <strong>Microsoft 365 customers</strong>. With Oly joining in, Apptriangle secured its first international contract — one that continues to this day.
                  </p>
                  <p>
                    That moment marked the beginning of Apptriangle&apos;s global journey. In <strong>2021</strong>, the company expanded internationally by opening a second office in <strong>Australia</strong>, strengthening its ability to serve customers worldwide.
                  </p>
                  <p>
                    <strong>Moshiur</strong> began working in the global market in 2022, securing its first contract from the USA. Since then, they have built a strong international team and successfully partnered with clients from Canada, Australia, Dubai, Latvia, Brunei, and other regions. Currently, they are successfully providing ongoing support to all these global clients while maintaining high-quality service and effectively managing the entire support system.
                  </p>
                </div>
              </div>
              <div className="air-float-wrap relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-us/pexels-diva-plavalaguna-6147381-1024x683.jpg.bv.webp"
                  alt="Global Breakthrough"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expanding Horizons */}
        <section className="py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1.2fr] lg:items-center">
              <div className="air-float-wrap relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-us/pexels-dream-3381066-1-1024x768.webp"
                  alt="Expanding Horizons"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="rounded-2xl bg-card/60 p-8 backdrop-blur">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Expanding <span className="text-primary">Horizons</span></h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Today, <strong>Apptriangle Limited</strong> proudly serves <strong>200+ unique customers</strong> across <strong>Bangladesh, USA, Australia, Canada, UAE, and Brunei</strong> — providing top-tier <strong>AI, BI, Automation, Staff Augmentation, Consulting</strong>, and <strong>Managed IT Services</strong>.
                  </p>
                  <p>
                    Apptriangle has also built strong partnerships with industry leaders such as <strong>Microsoft, DigiCert, IceWarp, Zoho</strong>, and many more — offering comprehensive <strong>implementation, software licensing</strong>, and <strong>subscription services</strong> that help businesses grow and stay secure.
                  </p>
                  <p>
                    Very soon, Apptriangle will open its <strong>third office in Canada</strong> and <strong>fourth in Japan</strong> — continuing its mission of global expansion.
                  </p>
                  <p>
                    From a small team with a big dream to a globally recognized technology partner, <strong>Apptriangle</strong> continues its mission:
                  </p>
                  <p className="italic font-semibold">
                    &quot;Empowering businesses through people, apps, and innovation.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Leadership <span className="text-primary">Team</span></h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Meet the people driving our vision forward.
              </p>
            </div>
            <div className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <TiltCard key={m.name} intensity={8} className="h-full rounded-2xl">
                <article
                  className="card-glow flex h-full flex-col rounded-2xl border-2 border-white/60 p-7 transition-colors hover:border-primary/40"
                >
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-white/60">
                    <Image
                      src={`/images/about-us/${m.photo}`}
                      alt={m.name}
                      fill
                      data-floating="true"
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <h3
                    className="mt-6 text-center font-display text-lg font-semibold leading-tight text-primary"
                  >
                    {m.name}
                  </h3>
                  <p className="text-center text-sm font-medium text-primary">{m.role}</p>
                  <p className="mt-3 text-center text-sm leading-relaxed text-white">
                    {m.bio}
                  </p>
                </article>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="border-y border-border/40 py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Our <span className="text-primary">Team</span></h2>
              <p className="mt-4 text-muted-foreground">
                We&apos;re a diverse team of 50+ passionate professionals from around the world, united by our
                commitment to innovation and excellence. Our team includes developers, consultants, designers, and
                business strategists working together to deliver exceptional results.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <TiltCard key={s.label} intensity={10} className="rounded-2xl">
                <div className="card-glow rounded-2xl border-2 border-white/60 p-6 text-center">
                  <p className="font-display text-3xl font-semibold sm:text-4xl">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 text-xs text-white">{s.label}</p>
                </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

<ServiceCta title="Interested to know more about how Apptriangle can transform your business?" />
      </main>
      <SiteFooter />
    </>
  )
}

