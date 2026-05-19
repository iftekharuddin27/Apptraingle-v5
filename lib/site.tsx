import Image from "next/image"
import Link from "next/link"

export const services = [
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    short:
      "Extend your in-house capabilities with Apptriangle's Staff Augmentation services. We provide skilled developers, engineers, and IT specialists who seamlessly integrate with your team to speed up project delivery.",
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    short:
      "Focus on your business while we handle your IT operations. Our Managed IT Services ensure your systems run smoothly, securely, and reliably.",
  },
  {
    slug: "business-process-automation",
    title: "Process Automation",
    short:
      "At Apptriangle, we help businesses eliminate repetitive tasks, reduce human error, and improve operational efficiency through advanced Business Process Automation (BPA).",
  },
  {
    slug: "app-development",
    title: "Web & Mobile Development",
    short:
      "Deliver exceptional digital experiences with Web & Mobile App Development services. From responsive web apps to cross-platform mobile solutions.",
  },
  {
    slug: "power-platform",
    title: "Power Platform",
    short:
      "Leverage Microsoft Power Platform to create tailored business apps, automate processes, and gain actionable insights from your data.",
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    short:
      "Align your technology initiatives with business objectives through Technology Consulting. Our experts provide insights, strategies, and roadmaps.",
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    short:
      "Validate your idea with a Minimum Viable Product. We design and build focused MVPs that help you test the market quickly and learn from real users.",
  },
  {
    slug: "ai-ml-solutions",
    title: "AI/ML Solutions",
    short:
      "Bring intelligence to your business with custom AI and Machine Learning solutions for prediction, automation, and decision support.",
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    short:
      "Turn raw data into actionable insights with our Business Analytics services. We help you measure, model and forecast what matters most.",
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    short:
      "Engage your customers around the clock with intelligent chatbots tailored to your business processes and channels.",
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    short:
      "Protect your business from evolving threats with proactive Cybersecurity services covering assessment, monitoring, and response.",
  },
  {
    slug: "email-collaboration",
    title: "Email & Collaboration",
    short:
      "Modern, secure email and collaboration platforms that keep your teams connected and productive across every device.",
  },
  {
    slug: "ssl-certificates",
    title: "SSL Certificates",
    short:
      "Trusted SSL Certificates from leading providers to secure your websites, applications, and customer transactions.",
  },
  {
    slug: "document-management",
    title: "Document Management",
    short:
      "Centralise, organise and govern your business documents with secure, searchable Document Management solutions.",
  },
  {
    slug: "software-licensing",
    title: "Software Licensing",
    short:
      "Source genuine software licences for your organisation through our trusted partner network and licensing experts.",
  },
] as const

export const resources = [
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/news", label: "News & Events" },
] as const

export type NavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "dropdown"; label: string; items: { href: string; label: string }[] }

export const navItems: NavItem[] = [
  { kind: "link", href: "/", label: "Home" },
  { kind: "link", href: "/about-us", label: "About Us" },
  {
    kind: "dropdown",
    label: "Services",
    items: services.map((s) => ({
      href: `/services/${s.slug}`,
      label: s.title,
    })),
  },
  { kind: "link", href: "/products", label: "Products" },
  {
    kind: "dropdown",
    label: "Resources",
    items: resources.map((r) => ({ href: r.href, label: r.label })),
  },
  { kind: "link", href: "/contact-us", label: "Contact Us" },
]

export function Logo({ className = "", size = "header" }: { className?: string; size?: "header" | "footer" }) {
  const imageClass = size === "header" ? "h-12 sm:h-14" : "h-9 sm:h-10"
  return (
    <Link href="/" className={`group inline-flex items-center ${className}`} aria-label="Apptriangle">
      <Image
        src="/images/logo/apptriangle-logo.png"
        alt="Apptriangle logo"
        width={200}
        height={100}
        className={`${imageClass} w-auto`}
        priority
      />
    </Link>
  )
}
