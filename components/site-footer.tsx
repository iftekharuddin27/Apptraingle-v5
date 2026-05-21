import Link from "next/link"
import { Logo, services } from "@/lib/site"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Apptriangle Limited is a global technology service provider, empowering businesses through people, apps,
              and innovation since 2018.
            </p>
            <div className="mt-6 flex gap-2">
              <Link
                href="/contact-us"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_-6px_rgba(41,179,255,0.75)]"
              >
                Start a Project
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h4 className="font-display text-sm font-semibold tracking-wide text-foreground">Services</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-primary">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold tracking-wide text-foreground">Company</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><Link href="/about-us" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/services" className="hover:text-primary">All Services</Link></li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link href="/case-studies" className="hover:text-primary">Case Studies</Link></li>
                <li><Link href="/news" className="hover:text-primary">News & Events</Link></li>
                <li><Link href="/contact-us" className="hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-display text-sm font-semibold tracking-wide text-foreground">Offices</h4>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li>
                  <p className="font-medium text-foreground">Bangladesh</p>
                  <p className="mt-1 flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />House 54, Road 8, Block D, Niketan, Gulshan-1, Dhaka-1212</p>
                  <p className="mt-1 flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" />+880 1717 888 388</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">Australia</p>
                  <p className="mt-1 flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />2-10 Mount Street, North Sydney, NSW, 2060</p>
                  <p className="mt-1 flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" />+61 427 927 466</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground">
          <p className="text-center">© {new Date().getFullYear()} Apptriangle Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
