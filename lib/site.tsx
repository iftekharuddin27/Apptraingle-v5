import Image from "next/image"
import Link from "next/link"

export const services = [
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    short:
      "Extend your in-house capabilities with on-demand senior engineers and specialists who integrate seamlessly with your teams to accelerate delivery and maintain quality.",
    description:
      "We pair you with vetted developers, DevOps engineers, QA specialists, and architects to plug skill gaps, scale rapidly during peak demand, and transfer knowledge back to your internal teams. Flexible engagement models, rapid onboarding, and performance oversight ensure velocity without compromising standards.",
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    short:
      "Reliable, proactive IT operations management that keeps systems secure, performant, and aligned with business goals.",
    description:
      "From 24/7 monitoring and incident response to patching, backups, and capacity planning, our Managed IT Services deliver predictable uptime and rapid recovery. We combine automation, security best practices, and expert support to lower operational risk, reduce costs, and free your team to focus on innovation.",
  },
  {
    slug: "business-process-automation",
    title: "Process Automation",
    short:
      "Automate manual workflows to boost accuracy, throughput, and employee productivity.",
    description:
      "We design and build intelligent automation solutions—RPA, workflow orchestration, and integrations with SaaS and legacy systems—that eliminate manual handoffs, enforce business rules, and surface actionable insights. Our approach prioritizes quick wins and measurable ROI, then scales to automate end-to-end processes across the enterprise.",
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
