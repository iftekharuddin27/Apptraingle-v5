"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TiltCard } from "@/components/tilt-card"
export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden py-10 sm:py-14 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/contact-us-bg.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-3xl px-5">
            <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
              Let&apos;s <span className="text-white">Contact</span>
            </h1>
            <p className="mt-4 text-base text-white sm:text-lg">
              Have questions or need help? We&apos;re here to assist.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-8">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
              {/* Left — Get in Touch + Map + Offices */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Get in <span className="text-primary">Touch</span></h1>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    We&apos;d love to hear from you. Whether you have a question about our services, need technical support, or want to discuss a project, we&apos;re ready to help.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/map.png"
                    alt="World map showing Apptriangle office locations"
                    className="w-full object-contain"
                  />
                </div>

                <TiltCard intensity={8} className="rounded-2xl">
                <Office
                  region="Bangladesh Office"
                  address="House 54, Road 8, Block D, Niketan, Gulshan-1, Dhaka-1212, Bangladesh."
                  phones={["+880 1717 888 388", "+880 1712 152 715"]}
                  email="info@apptriangle.com"
                />
                </TiltCard>
                <TiltCard intensity={8} className="rounded-2xl">
                <Office
                  region="Australia Office"
                  address="2-10 Mount Street, North Sydney, NSW, 2060, Australia."
                  phones={["+61 427 927 466"]}
                  email="info@apptriangle.com.au"
                />
                </TiltCard>
              </div>

              {/* Form — right */}
              <form className="card-glow lg:col-span-7 rounded-2xl border-2 border-white/60 p-7 sm:p-9 flex flex-col">
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us about your project and we&apos;ll be in touch shortly.
                </p>
                <div className="mt-8 flex flex-col gap-5 flex-1">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Contact Number" name="phone" type="tel" required />
                  <Field label="Email Address" name="email" type="email" required />
                  <div className="flex flex-col flex-1">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="block w-full flex-1 min-h-40 resize-y rounded-xl border-2 border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground hover:border-primary/50 hover:shadow-[0_0_18px_-4px_rgba(41,179,255,0.45)] focus:border-primary/60 focus:shadow-[0_0_22px_-4px_rgba(41,179,255,0.6)]"
                      placeholder=""
                    />
                  </div>

                </div>
                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_rgba(41,179,255,0.7)] transition-transform hover:scale-[1.02]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="block w-full rounded-xl border-2 border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground hover:border-primary/50 hover:shadow-[0_0_18px_-4px_rgba(41,179,255,0.45)] focus:border-primary/60 focus:shadow-[0_0_22px_-4px_rgba(41,179,255,0.6)]"
      />
    </div>
  )
}

function Office({
  region,
  address,
  phones,
  email,
}: {
  region: string
  address: string
  phones: string[]
  email: string
}) {
  return (
    <div className="card-glow rounded-2xl border-2 border-white/60 p-6 transition-colors hover:border-primary/40">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
        {region}
      </p>
      <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-foreground">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <span>{address}</span>
      </p>
      <div className="mt-4 space-y-1.5 text-sm text-foreground">
        {phones.map((p) => (
          <p key={p} className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 shrink-0 text-primary" /> {p}
          </p>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-2 text-sm text-foreground">
        <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
        <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
      </p>
    </div>
  )
}
