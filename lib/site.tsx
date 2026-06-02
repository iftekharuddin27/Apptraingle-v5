import Image from "next/image"
import Link from "next/link"

export const services = [
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    short:
      "Extend your in-house capabilities with Apptriangle’s Staff Augmentation services. We provide skilled developers, engineers, and IT specialists who seamlessly integrate with your team to speed up project delivery.",
    description:
      "We pair you with vetted developers, DevOps engineers, QA specialists, and architects to plug skill gaps, scale rapidly during peak demand, and transfer knowledge back to your internal teams. Flexible engagement models, rapid onboarding, and performance oversight ensure velocity without compromising standards",
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    short:
      "Focus on your business while we handle your IT operations. Our Managed IT Services ensure your systems run smoothly, securely, and reliably.",
    description:
      "From 24/7 monitoring and incident response to patching, backups, and capacity planning, our Managed IT Services deliver predictable uptime and rapid recovery. We combine automation, security best practices, and expert support to lower operational risk, reduce costs, and free your team to focus on innovation",
  },
  {
    slug: "business-process-automation",
    title: "Process Automation",
    short:
      "At Apptriangle, we help businesses eliminate repetitive tasks, reduce human error, and improve operational efficiency through advanced Business Process Automation (BPA)",
    description:
      "We design and build intelligent automation solutions—RPA, workflow orchestration, and integrations with SaaS and legacy systems—that eliminate manual handoffs, enforce business rules, and surface actionable insights. Our approach prioritizes quick wins and measurable ROI, then scales to automate end-to-end processes across the enterprise.",
  },
  {
    slug: "app-development",
    title: "Web & Mobile Development",
    short:
      "Deliver exceptional digital experiences with Web & Mobile App Development services. From responsive web apps to cross-platform mobile solutions",
    description:
      "We craft responsive web applications and cross-platform mobile solutions tailored to your unique business needs. From initial prototyping to final deployment, our agile development process ensures scalable architectures, intuitive user interfaces, and robust performance that engages customers and drives measurable business growth.",
  },
  {
    slug: "power-platform",
    title: "Power Platform",
    short:
      "Leverage Microsoft Power Platform to create tailored business apps, automate processes, and gain actionable insights from your data",
    description:
      "Accelerate digital transformation using Microsoft Power Platform to build custom applications and automated workflows without extensive coding. We help you securely connect diverse data sources, streamline complex daily operations, and deploy interactive dashboards that empower your workforce to make rapid, data-driven decisions.",
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    short:
      "Align your technology initiatives with business objectives through Technology Consulting. Our experts provide insights strategies, and roadmaps",
    description:
      "Navigate complex digital landscapes with our strategic technology consulting tailored to your enterprise goals. We assess your current infrastructure, identify critical technological gaps, and provide actionable roadmaps that modernize legacy systems, optimize IT investments, and align future innovations with your core business objectives.",
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    short:
      "Validate your idea with a Minimum Viable Product. We design and build focused MVPs that help you test the market quickly and learn from real users.",
    description:
      "Quickly validate your core business concepts with a focused Minimum Viable Product designed for rapid market testing. We prioritize essential features to accelerate development cycles, minimize initial investment risks, and gather crucial user feedback, enabling you to iterate confidently and scale effectively.",
  },
  {
    slug: "ai-ml-solutions",
    title: "AI/ML Solutions",
    short:
      "Bring intelligence to your business with custom AI and Machine Learning solutions for prediction, automation, and decision support.",
    description:
      "Harness the power of artificial intelligence and machine learning to uncover hidden patterns within your data. We engineer predictive models and intelligent algorithms that automate complex decision-making, personalize customer experiences, and provide deep strategic insights, giving your organization a distinct competitive advantage.",
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    short:
      "Turn raw data into actionable insights with our Business Analytics services. We help you measure, model and forecast what matters most.",
    description:
      "Transform fragmented data into actionable business intelligence through comprehensive analytics and dynamic visual dashboards. Our solutions integrate multiple operational metrics, providing real-time visibility into organizational performance, identifying emerging market trends, and empowering leadership teams to strategize proactively rather than reacting to past events.",
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    short:
      "Engage your customers around the clock with intelligent chatbots tailored to your business processes and channels.",
    description:
      "Revolutionize customer engagement with intelligent conversational agents available around the clock to handle inquiries instantly. We design custom AI-powered chatbots that seamlessly integrate with your existing platforms, understand natural language intent, resolve common support tickets autonomously, and escalate complex issues to human agents.",
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    short:
      "Protect your business from evolving threats with proactive Cybersecurity services covering assessment, monitoring, and response.",
    description:
      "Fortify your digital assets against evolving threats through comprehensive cybersecurity assessments and continuous proactive monitoring. We implement robust encryption protocols, rigorous access controls, and rapid incident response frameworks that safeguard sensitive corporate information, ensure regulatory compliance, and maintain unwavering trust of your customers.",
  },
  {
    slug: "email-collaboration",
    title: "Email & Collaboration",
    short:
      "Modern, secure email and collaboration platforms that keep your teams connected and productive across every device.",
    description:
      "Enhance organizational productivity with modern, secure email and collaboration ecosystems that unify distributed workforces. We deploy and manage enterprise-grade communication platforms offering seamless file sharing, real-time messaging, and advanced data protection, ensuring your teams remain fully connected and highly efficient from any location.",
  },
  {
    slug: "ssl-certificates",
    title: "SSL Certificates",
    short:
      "Trusted SSL Certificates from leading providers to secure your websites, applications, and customer transactions.",
    description:
      "Secure your online presence and build unparalleled customer confidence by deploying trusted SSL certificates across your domains. We manage the entire lifecycle—from swift provisioning and seamless installation to automated renewals—ensuring your digital transactions remain fully encrypted, compliant, and protected against data interception.",
  },
  {
    slug: "document-management",
    title: "Document Management",
    short:
      "Centralise, organise and govern your business documents with secure, searchable Document Management solutions.",
    description:
      "Centralize your critical corporate knowledge with highly secure and searchable document management architectures. We implement automated version control, strict permission hierarchies, and streamlined approval workflows that eliminate data silos, reduce operational bottlenecks, and ensure comprehensive audit readiness for your most important business records.",
  },
  {
    slug: "software-licensing",
    title: "Software Licensing",
    short:
      "Source genuine software licences for your organisation through our trusted partner network and licensing experts.",
    description:
      "Optimize your corporate software portfolio through strategic licensing procurement and comprehensive compliance management. As authorized partners for leading global vendors, we negotiate cost-effective agreements, oversee centralized deployments, and provide ongoing licensing audits to maximize your return on investment and eliminate unnecessary software expenditures.",
  },
] as const

export const resources = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/partners", label: "Partners" },
  { href: "/news", label: "News & Events" },
  { href: "/blog", label: "Blogs" },
] as const

export type NavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "dropdown"; label: string; items: { href: string; label: string }[] }

export const navItems: NavItem[] = [
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
  { kind: "link", href: "/career", label: "Career" },
  { kind: "link", href: "/about-us", label: "About Us" },
  { kind: "link", href: "/contact-us", label: "Contact Us" },
]

export function Logo({
  className = "",
  size = "header",
  onClick,
}: {
  className?: string
  size?: "header" | "footer"
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  const imageClass = size === "header" ? "h-12 sm:h-14" : "h-9 sm:h-10"
  const href = size === "header" ? "/#hero" : "/"
  return (
    <Link href={href} onClick={onClick} className={`group inline-flex items-center ${className}`} aria-label="Apptriangle">
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
