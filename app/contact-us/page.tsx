import { Mail, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-blocks"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let's Work"
          highlight="Together."
          description="Ready to transform your business? Get in touch with our team today."
        />

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Form */}
              <form className="card-glow lg:col-span-7 rounded-2xl border border-border p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us about your project and we&apos;ll be in touch shortly.
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email Address" name="email" type="email" required />
                  <Field label="Contact Number" name="phone" type="tel" />
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="block w-full resize-y rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_rgba(41,179,255,0.7)] transition-transform hover:scale-[1.02]"
                >
                  Submit
                </button>
              </form>

              {/* Offices */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <Office
                  region="Bangladesh Office"
                  address="House 54, Road 8, Block D, Niketan, Gulshan-1, Dhaka-1212, Bangladesh."
                  phones={["+880 1717 888 388", "+880 1712 152 715"]}
                />
                <Office
                  region="Australia Office"
                  address="2-10 Mount Street, North Sydney, NSW, 2060, Australia."
                  phones={["+61 427 927 466"]}
                />
                <div className="card-glow rounded-2xl border border-border p-6 transition-colors hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">General Enquiries</p>
                      <p className="font-display text-base font-semibold wrap-break-word">hello@apptriangle.com</p>
                    </div>
                  </div>
                </div>
              </div>
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
        className="block w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
      />
    </div>
  )
}

function Office({
  region,
  address,
  phones,
}: {
  region: string
  address: string
  phones: string[]
}) {
  return (
    <div className="card-glow rounded-2xl border border-border p-6 transition-colors hover:border-primary/40">
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
    </div>
  )
}
