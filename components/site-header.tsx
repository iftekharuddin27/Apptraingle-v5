"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Logo, navItems } from "@/lib/site"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo size="header" />

        <nav className="hidden items-center gap-1 rounded-full border border-border/50 bg-card/40 px-2 py-1.5 backdrop-blur md:flex">
          {navItems.map((item) => {
            if (item.kind === "link") {
              const active = isActive(pathname, item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "rounded-full px-4 py-1.5 text-sm font-semibold text-primary"
                      : "rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_0_1px_rgba(41,179,255,0.45),0_0_22px_-4px_rgba(41,179,255,0.6)]"
                  }
                >
                  {item.label}
                </Link>
              )
            }
            const sectionActive = item.items.some((sub) => isActive(pathname, sub.href))
            return (
              <DesktopDropdown
                key={item.label}
                label={item.label}
                items={item.items}
                pathname={pathname}
                sectionActive={sectionActive}
              />
            )
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href="/contact-us"
            className="rounded-full border border-primary/40 bg-primary/20 px-4 py-2 text-sm font-semibold text-primary backdrop-blur transition-all hover:border-primary hover:bg-primary/30 hover:shadow-[0_0_30px_-6px_rgba(41,179,255,0.7)]"
          >
            Schedule a call
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 p-5">
            {navItems.map((item) => {
              if (item.kind === "link") {
                const active = isActive(pathname, item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "rounded-lg px-4 py-3 text-sm font-semibold text-primary"
                        : "rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_0_1px_rgba(41,179,255,0.45),0_0_18px_-4px_rgba(41,179,255,0.5)]"
                    }
                  >
                    {item.label}
                  </Link>
                )
              }
              const sectionActive = item.items.some((sub) => isActive(pathname, sub.href))
              return (
                <div key={item.label} className="rounded-lg">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded((cur) => (cur === item.label ? null : item.label))}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium ${
                      sectionActive
                        ? "text-primary"
                        : "text-muted-foreground transition-all duration-200 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_0_1px_rgba(41,179,255,0.45),0_0_18px_-4px_rgba(41,179,255,0.5)]"
                    }`}
                    aria-expanded={mobileExpanded === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-border/50 pl-3">
                      {item.items.map((sub) => {
                        const subActive = isActive(pathname, sub.href)
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className={
                              subActive
                                ? "rounded-lg bg-primary/15 px-3 py-2 text-sm font-semibold text-primary"
                                : "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                            }
                          >
                            {sub.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
            <div className="mt-2">
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="rounded-full border border-primary/40 bg-primary/20 px-4 py-2.5 text-center text-sm font-semibold text-primary backdrop-blur transition-all hover:border-primary hover:bg-primary/30 hover:shadow-[0_0_30px_-6px_rgba(41,179,255,0.7)]"
              >
                Schedule a call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function DesktopDropdown({
  label,
  items,
  pathname,
  sectionActive,
}: {
  label: string
  items: { href: string; label: string }[]
  pathname: string
  sectionActive: boolean
}) {
  const [hover, setHover] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <button
        type="button"
        className={
          sectionActive
            ? "flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-semibold text-primary"
            : "flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_0_1px_rgba(41,179,255,0.45),0_0_22px_-4px_rgba(41,179,255,0.6)]"
        }
        aria-expanded={hover}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${hover ? "rotate-180" : ""}`} />
      </button>
      {hover && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <div className="min-w-[260px] rounded-2xl border border-border bg-card/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
            {items.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "block rounded-xl bg-primary/15 px-4 py-2.5 text-sm font-semibold text-primary"
                      : "block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/15 hover:text-foreground"
                  }
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
