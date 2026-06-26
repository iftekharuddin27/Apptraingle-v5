import Link from "next/link"
import Image from "next/image"
import { Logo, resources } from "@/lib/site" 
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-xs">
            <Logo size="header" className="lg:-mt-2" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Apptriangle is a global technology service provider delivering Managed IT, Staff Augmentation,
              Business Process Automation, App Development, Power Platform, and Technology Consulting.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <Link
                href="https://www.facebook.com/share/1AJbZLFUbr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="flex h-11 w-11 items-center justify-center transition hover:opacity-80 relative bottom-px"
              >
                <Image src="/images/logo/facebook.png" alt="Facebook" width={32} height={32} className="h-8 w-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/apptriangle/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="flex h-11 w-11 items-center justify-center transition hover:opacity-80"
              >
                <Image src="/images/logo/Linkedin.png" alt="LinkedIn" width={48} height={48} className="h-10 w-10" />
              </Link>
              <Link
                href="https://www.youtube.com/@apptriangle6251"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube" className="flex h-11 w-11 items-center justify-center transition hover:opacity-80"
              >
                <Image src="/images/logo/youtube.png" alt="YouTube" width={48} height={48} className="h-12 w-12" />
              </Link>
              <Link
                href="https://basis.org.bd/company-profile/22-02-044"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BASIS"
                className="flex h-11 items-center justify-center transition hover:opacity-80"
              >
                <Image src="/images/logo/basis-logo.svg" alt="BASIS" width={104} height={36} className="h-9 w-auto" />
              </Link>
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

          <div>
            <h4 className="font-display text-base font-extrabold tracking-wide text-foreground">Resources</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="hover:text-primary">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-extrabold tracking-wide text-foreground">Offices</h4>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li>
                <p className="font-medium text-foreground">Bangladesh</p>
                <p className="mt-1 flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />House 54, Road 8, Block D, Niketan, Gulshan-1, Dhaka-1212</p>
                <p className="mt-1 flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" />+880 1717 888 388</p>
                <p className="mt-1 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  <a href="mailto:info@apptriangle.com" className="text-primary hover:underline">info@apptriangle.com</a>
                </p>
              </li>
              <li>
                <p className="font-medium text-foreground">Australia</p>
                <p className="mt-1 flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />2-10 Mount Street, North Sydney, NSW, 2060</p>
                <p className="mt-1 flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" />+61 427 927 466</p>
                <p className="mt-1 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  <a href="mailto:info@apptriangle.com.au" className="text-primary hover:underline">info@apptriangle.com.au</a>
                </p>
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
