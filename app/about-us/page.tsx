import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, ServiceCta } from "@/components/page-blocks"
import { Check } from "lucide-react"

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
  { value: "50+", label: "Certified Resources" },
  { value: "50+", label: "Professionals" },
  { value: "6+", label: "Countries Covered" },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About Apptriangle"
          title="Empowering businesses through people, apps,"
          highlight="and innovation."
          description="A global leading technology service provider dedicated to empowering businesses and organizations with cutting-edge solutions. With a dynamic team of industry experts and a passion for innovation, we deliver top-notch services that propel our clients towards success."
        />

        {/* Our Story */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-stretch gap-10 lg:grid-cols-[1.2fr_1.05fr]">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-8 backdrop-blur">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Our Story</h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Every great idea begins with a spark — and for Apptriangle Limited, that spark ignited in 2018, when
                    three passionate engineers — Ali Mortuza Bilash, Moshiur Rahman Oly, and another like-minded colleague
                    — shared a common dream: to deliver world-class apps and technology services that transform how
                    businesses work.
                  </p>
                  <p>
                    All three came from strong engineering backgrounds, with years of experience working with multinational
                    tech companies serving enterprise clients. Bilash and Oly took the bold step of leaving their secure
                    jobs to bring the Apptriangle vision to life. The third co-founder chose to continue his professional
                    journey elsewhere, but his place in the original idea remained — symbolized in the name itself,
                    Apptriangle — representing the three points of innovation that sparked the journey.
                  </p>
                </div>
              </div>
              <div className="relative h-100 w-full max-w-md justify-self-end overflow-hidden rounded-2xl border border-border card-glow">
                <Image
                  src="/images/about-us/pexels-chuck-3109168-1-1024x683.webp"
                  alt="Our Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Beginning */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1.2fr] lg:items-start">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border card-glow">
                <Image
                  src="/images/about-us/Gray-Minimalist-Line-Simple-A4-Stationery-Paper-Document-3-1024x910.webp.bv.webp"
                  alt="The Beginning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">The Beginning</h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Apptriangle's first product, ShopManager, empowered small retailers with tools for managing inventory,
                  tracking sales, and generating automated SMS invoices. The founders personally visited local markets,
                  listened to shop owners, and refined the product through real-world feedback. Over time, Apptriangle
                  expanded with TREAL, OMS, GuestPro, and GlamPro — solving real business challenges and improving
                  operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Breakthrough */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1.05fr] lg:items-start">
              <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Global Breakthrough</h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  In 2020, amid the pandemic, Microsoft's global support team reached out to Bilash to provide remote
                  assistance for Microsoft 365 customers. Apptriangle secured its first international contract — one that
                  continues to this day. In 2021, the company opened a second office in Australia, strengthening its
                  ability to serve customers worldwide.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border card-glow">
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
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1.2fr] lg:items-start">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border card-glow">
                <Image
                  src="/images/about-us/pexels-dream-3381066-1-1024x768.webp"
                  alt="Expanding Horizons"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Expanding Horizons</h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Today, Apptriangle Limited proudly serves 200+ unique customers across Bangladesh, USA, Australia,
                  Canada, UAE, and Brunei. We've built strong partnerships with Microsoft, DigiCert, IceWarp, Zoho and
                  more. Very soon, Apptriangle will open its third office in Canada and fourth in Japan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Leadership Team</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Meet the people driving our vision forward.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m, i) => (
                <article
                  key={m.name}
                  className={`rounded-2xl border p-7 ${
                    i === 1 ? "card-glow-active border-primary/50" : "card-glow border-border"
                  }`}
                >
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-border">
                    <Image
                      src={`/images/about-us/${m.photo}`}
                      alt={m.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <h3
                    className={`mt-6 text-center font-display text-lg font-semibold leading-tight ${
                      i === 1 ? "text-white" : "text-foreground"
                    }`}
                  >
                    {m.name}
                  </h3>
                  <p className={`text-center text-sm font-medium ${i === 1 ? "text-white/90" : "text-primary"}`}>{m.role}</p>
                  <p className={`mt-3 text-center text-sm leading-relaxed ${i === 1 ? "text-white/85" : "text-muted-foreground"}`}>
                    {m.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="border-y border-border/40 py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Our Team</h2>
                <p className="mt-4 text-muted-foreground">
                  We&apos;re a diverse team of 50+ passionate professionals from around the world, united by our
                  commitment to innovation and excellence. Our team includes developers, consultants, designers, and
                  business strategists working together to deliver exceptional results.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {["Professional Services", "Affordable Prices", "Quality Solutions", "Trusted by 200+ customers"].map(
                    (i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        {i}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="card-glow rounded-2xl border border-border p-6 text-center">
                    <p className="font-display text-3xl font-semibold sm:text-4xl">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceCta title="Interested to know more about how Apptriangle can transform your business?" />
      </main>
      <SiteFooter />
    </>
  )
}

