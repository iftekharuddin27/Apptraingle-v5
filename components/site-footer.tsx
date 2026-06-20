import Link from "next/link"
import { services } from "@/lib/site"
import { MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-display text-base font-extrabold tracking-wide text-foreground">Services</h4>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <ul className="space-y-3">
                {services.slice(0, Math.ceil(services.length / 2)).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-primary">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {services.slice(Math.ceil(services.length / 2)).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-primary">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-extrabold tracking-wide text-foreground">Company</h4>
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
            <h4 className="font-display text-base font-extrabold tracking-wide text-foreground">Offices</h4>
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

        <div className="mt-14 flex items-center justify-center gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground">
          <p className="text-center">© {new Date().getFullYear()} Apptriangle Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
