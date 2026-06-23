import Image from "next/image"
import { notFound } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import ServerStatusIllustration from "@/components/server-status-illustration"
import DataReportsIllustration from "@/components/data-reports-illustration"
import AiCodeAssistantIllustration from "@/components/ai-code-assistant-illustration"
import MobileDevelopmentIllustration from "@/components/mobile-development-illustration"
import WireframingIllustration from "@/components/wireframing-illustration"
import DataCollaborationIllustration from "@/components/data-collaboration-illustration"
import ProblemSolvingIllustration from "@/components/problem-solving-illustration"
import BusinessPlanIllustration from "@/components/business-plan-illustration"
import DataProcessingIllustration from "@/components/data-processing-illustration"
import ExperienceDesignIllustration from "@/components/experience-design-illustration"
import MobileUxIllustration from "@/components/mobile-ux-illustration"
import AiAgentIllustration from "@/components/ai-agent-illustration"
import AiDataExtractionIllustration from "@/components/ai-data-extraction-illustration"
import LightbulbMomentIllustration from "@/components/lightbulb-moment-illustration"
import OnlineStatsIllustration from "@/components/online-stats-illustration"
import AiAnswersIllustration from "@/components/ai-answers-illustration"
import JoinIllustration from "@/components/join-illustration"
import SegmentAnalysisIllustration from "@/components/segment-analysis-illustration"
import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  Bot,
  Brain,
  Bug,
  CheckCircle,
  Clock,
  Cloud,
  Cpu,
  Database,
  Eye,
  Folder,
  Gauge,
  Globe,
  GraduationCap,
  Headset,
  Layers,
  LifeBuoy,
  Lightbulb,
  LineChart,
  ListChecks,
  Lock,
  MessageSquare,
  Pencil,
  PiggyBank,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  SquareCheckBig,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Workflow,
  Zap,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceCta } from "@/components/page-blocks"
import { TiltCard } from "@/components/tilt-card"
import { services } from "@/lib/site"

type ServiceContent = {
  eyebrow: string
  heroTitle: string
  heroHighlight: string
  heroDesc: ReactNode
  benefitsTitle: string
  benefits: BenefitItem[]
  approachTitle: string
  steps: StepItem[]
  cta: string
}

type BenefitItem = { title: string; desc?: string; icon: LucideIcon }
type StepItem = { title: string; desc?: string; icon: LucideIcon }

const content: Record<string, ServiceContent> = {
  "managed-it-services": {
    eyebrow: "Managed IT Services",
    heroTitle: "End-to-End Management of Your",
    heroHighlight: "IT Infrastructure.",
    heroDesc: (
      <>
        Focus on your business while we handle your IT operations. Our <strong>Managed IT Services</strong> ensure your systems run smoothly, securely, and reliably.
      </>
    ),
    benefitsTitle: "Comprehensive IT Support Benefits",
    benefits: [
      { title: "24/7 IT support and monitoring", desc: "Round-the-clock coverage from our global team.", icon: Clock },
      { title: "Reduced downtime and faster problem resolution", desc: "Faster problem resolution with proactive monitoring.", icon: Activity },
      { title: "Optimized IT performance and cost efficiency", desc: "Improve cost efficiency across your IT estate.", icon: Gauge },
      { title: "Scalable services that grow with your business", desc: "Grow with your business — adjust capacity as you need.", icon: Layers },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Assess your existing IT environment", icon: Search },
      { title: "Develop a custom managed services plan", icon: Settings },
      { title: "Implement monitoring, maintenance, and security protocols", icon: ShieldCheck },
      { title: "Provide ongoing support, reporting, and optimization", icon: LineChart },
    ],
    cta: "Optimize your IT operations?",
  },
  "staff-augmentation": {
    eyebrow: "Staff Augmentation",
    heroTitle: "Scale Your Team with",
    heroHighlight: "Skilled IT Professionals.",
    heroDesc: (
      <>
        Extend your in-house capabilities with <strong>Apptriangle&apos;s Staff Augmentation</strong> services. We provide highly qualified developers, engineers, and IT specialists who seamlessly integrate with your team to accelerate project delivery.
      </>
    ),
    benefitsTitle: "Benefits of Team Scaling",
    benefits: [
      { title: "Flexible team scaling", desc: "Teams can be scaled to match project requirements. This allows for efficient resource allocation.", icon: Users },
      { title: "Specialized Skills", desc: "Gain access to niche expertise without permanent hires. This ensures projects have the right talent.", icon: BadgeCheck },
      { title: "Faster Launch", desc: "Development projects can be launched more quickly. This is due to readily available resources.", icon: Rocket },
      { title: "Cost Effective", desc: "Cost-efficient solution for temporary or ongoing projects", icon: PiggyBank },
    ],
    approachTitle: "Build a High Performing Team",
    steps: [
      { title: "Understand your team's requirements", icon: Search },
      { title: "Identify and allocate skilled professionals", icon: BadgeCheck },
      { title: "Integrate seamlessly with your workflow", icon: Workflow },
      { title: "Monitor performance and optimize team efficiency", icon: BarChart3 },
    ],
    cta: "Build your dream team today?",
  },
  "business-process-automation": {
    eyebrow: "Business and Process Automation",
    heroTitle: "Streamline Your Operations with",
    heroHighlight: "Intelligent Automation.",
    heroDesc: (
      <>
        At <strong>Apptriangle</strong>, we help businesses eliminate repetitive tasks, reduce human error, and improve operational efficiency through advanced <strong>Business Process Automation (BPA)</strong>. By leveraging smart workflows, AI, and integration tools, we enable organizations to focus on strategic growth rather than manual processes.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Increased Efficiency", desc: "Automate repetitive tasks and free up your team to focus on high-value work.", icon: Zap },
      { title: "Improved Accuracy", desc: "Reduce errors caused by manual data entry or fragmented processes.", icon: CheckCircle },
      { title: "Scalable Solutions", desc: "Easily adapt workflows as your business grows or changes.", icon: Layers },
      { title: "Real-Time Insights", desc: "Track performance, identify bottlenecks, and make data-driven decisions.", icon: LineChart },
    ],
    approachTitle: "How We Do It",
    steps: [
      { title: "Process Assessment", desc: "Analyze your existing workflows to identify automation opportunities.", icon: Search },
      { title: "Solution Design", desc: "Create a tailored automation strategy that integrates seamlessly with your systems.", icon: Settings },
      { title: "Implementation & Testing", desc: "Deploy automated workflows with thorough testing to ensure reliability.", icon: Workflow },
      { title: "Monitoring & Optimization", desc: "Continuously monitor performance and refine automation for maximum impact.", icon: RefreshCw },
    ],
    cta: "Ready to optimize your operations?",
  },
  "app-development": {
    eyebrow: "Web & Mobile App Development",
    heroTitle: "Build Scalable and User-Centric",
    heroHighlight: "Applications",
    heroDesc: (
      <>
        Deliver exceptional digital experiences with <strong>Web &amp; Mobile App Development</strong> services. From responsive web apps to cross-platform mobile solutions, we help your business reach users everywhere.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Custom, responsive, and scalable apps", icon: Layers },
      { title: "Cross-platform compatibility", icon: Globe },
      { title: "Optimized for performance and user experience", icon: Gauge },
      { title: "End-to-end development and maintenance", icon: Wrench },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Define product vision and requirements", icon: Target },
      { title: "Design UI/UX and prototype", icon: Pencil },
      { title: "Develop, test, and deploy applications", icon: Rocket },
      { title: "Provide ongoing support and feature updates", icon: LifeBuoy },
    ],
    cta: "Transform your digital presence?",
  },
  "power-platform": {
    eyebrow: "Power Platform Development",
    heroTitle: "Build Custom Apps, Automate",
    heroHighlight: "Workflows, and Visualize Data",
    heroDesc: (
      <>
        Leverage <strong>Microsoft Power Platform</strong> to create tailored business apps, automate processes, and gain actionable insights from your data. Our solutions help you streamline operations and improve decision-making.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Rapid application development with low-code tools", icon: Zap },
      { title: "Automate repetitive tasks to save time and reduce errors", icon: Workflow },
      { title: "Real-time analytics for smarter business decisions", icon: BarChart3 },
      { title: "Scalable solutions that grow with your organization", icon: Layers },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Analyze business requirements", icon: Search },
      { title: "Design and develop custom apps and workflows", icon: Settings },
      { title: "Integrate dashboards and analytics", icon: LineChart },
      { title: "Train teams and optimize performance", icon: GraduationCap },
    ],
    cta: "Transform your operations?",
  },
  "technology-consulting": {
    eyebrow: "Technology Consulting",
    heroTitle: "Strategic Guidance for",
    heroHighlight: "Business-Driven Technology.",
    heroDesc: (
      <>
        Align your technology initiatives with business objectives through <strong>Technology Consulting</strong>. Our experts provide insights, strategies, and roadmaps to maximize the impact of your IT investments.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Identify technology opportunities and risks", icon: AlertTriangle },
      { title: "Optimize existing IT infrastructure and processes", icon: Gauge },
      { title: "Make data-driven and strategic technology decisions", icon: LineChart },
      { title: "Ensure scalable and future-ready solutions", icon: Layers },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Assess current IT landscape", icon: Search },
      { title: "Define technology strategy aligned with business goals", icon: Target },
      { title: "Recommend solutions and implementation roadmap", icon: Lightbulb },
      { title: "Support execution and continuous improvement", icon: RefreshCw },
    ],
    cta: "Transform your IT strategy?",
  },
  "mvp-development": {
    eyebrow: "MVP Development",
    heroTitle: "Validate Your Ideas Quickly with a",
    heroHighlight: "Functional MVP",
    heroDesc: (
      <>
        Bring your business ideas to market faster with <strong>MVP Development</strong>. Test assumptions, get feedback, and iterate efficiently to reduce risks and costs.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Faster product launch and market validation", icon: Rocket },
      { title: "Cost-effective approach to product development", icon: PiggyBank },
      { title: "Early user feedback to refine your product", icon: MessageSquare },
      { title: "Iterate quickly based on real-world insights", icon: RefreshCw },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Define core product features", icon: ListChecks },
      { title: "Rapidly design and develop a functional MVP", icon: Zap },
      { title: "Launch and collect user feedback", icon: MessageSquare },
      { title: "Refine and scale the product", icon: TrendingUp },
    ],
    cta: "Launch smarter, faster.",
  },
  "ai-ml-solutions": {
    eyebrow: "AI & Machine Learning Solutions",
    heroTitle: "Unlock Intelligent Insights with",
    heroHighlight: "AI & Machine Learning",
    heroDesc: (
      <>
        At <strong>Apptriangle</strong>, we harness the power of <strong>Artificial Intelligence (AI)</strong> and <strong>Machine Learning (ML)</strong> to help businesses make smarter decisions, automate processes, and predict outcomes with precision. Our solutions transform raw data into actionable insights, enabling organizations to innovate faster and stay ahead of the competition.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Predictive analytics", desc: "Anticipate trends, customer behavior, and market shifts with data-driven forecasts.", icon: LineChart },
      { title: "Process automation", desc: "Leverage AI to automate routine tasks, improving efficiency and accuracy", icon: Workflow },
      { title: "Data-driven decisions", desc: "Turn complex data into clear insights to guide strategic planning.", icon: Brain },
      { title: "Scalable AI solutions", desc: "Solutions that grow with your business and adapt to evolving needs.", icon: Layers },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Data assessment", desc: "Evaluate your existing data sources for quality and relevance.", icon: Database },
      { title: "Model development", desc: " Design AI/ML models tailored to your business challenges.", icon: Cpu },
      { title: "Integration and deployment", desc: "Seamlessly embed models into your business workflows and systems.", icon: Plug },
      { title: "Monitoring and optimization", desc: "Continuously refine models to maintain accuracy and efficiency.", icon: RefreshCw },
    ],
    cta: "Ready to leverage AI for smarter outcomes?",
  },
  "business-analytics": {
    eyebrow: "Business Intelligence & Analytics",
    heroTitle: "Turn Data into",
    heroHighlight: "Actionable Insights",
    heroDesc: (
      <>
        Make informed decisions with <strong>Business Intelligence &amp; Analytics</strong> solutions. Visualize data, track performance, and identify opportunities to drive growth.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Centralized dashboards for real-time monitoring", icon: BarChart3 },
      { title: "Data-driven decision-making", icon: LineChart },
      { title: "Identify trends, bottlenecks, and opportunities", icon: Search },
      { title: "Scalable analytics solutions for all business sizes", icon: Layers },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Assess current data landscape", icon: Database },
      { title: "Build dashboards and reports", icon: BarChart3 },
      { title: "Implement analytics tools", icon: Settings },
      { title: "Provide insights and recommendations", icon: Lightbulb },
    ],
    cta: "Unlock the power of your data!",
  },
  "chatbot-development": {
    eyebrow: "Chatbot Development",
    heroTitle: "Enhance Customer Engagement with",
    heroHighlight: "Smart AI Chatbots",
    heroDesc: (
      <>
        Deliver instant, 24/7 support and improve customer experiences with AI-powered <strong>chatbots</strong> tailored to your business needs.
      </>
    ),
    benefitsTitle: "Benefits",
    benefits: [
      { title: "Automate customer support and inquiries", icon: Bot },
      { title: "Personalized and interactive conversations", icon: MessageSquare },
      { title: "Reduce response time and operational costs", icon: Clock },
      { title: "Integrate seamlessly with your systems", icon: Plug },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Define chatbot goals and workflow", icon: Target },
      { title: "Design conversational UI and responses", icon: MessageSquare },
      { title: "Integrate AI and test functionality", icon: Cpu },
      { title: "Monitor and optimize performance", icon: RefreshCw },
    ],
    cta: "Engage customers smarter!",
  },
  "cybersecurity-services": {
    eyebrow: "Cybersecurity Services",
    heroTitle: "Protect Your Business with",
    heroHighlight: "Proactive Cybersecurity",
    heroDesc: (
      <>
        At <strong>Apptriangle</strong>, we provide comprehensive <strong>Cybersecurity Services</strong> to safeguard your business against evolving digital threats. From in-depth security assessments to robust protection strategies, we ensure your systems, data, and networks are secure, compliant, and resilient.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Security Assessment & Audits", desc: "Identify vulnerabilities and potential threats before they become risks.", icon: ShieldCheck },
      { title: "Risk Mitigation", desc: "Implement tailored strategies to prevent security breaches", icon: AlertTriangle },
      { title: "Regulatory Compliance", desc: "Ensure your systems meet industry standards and regulations", icon: BadgeCheck },
      { title: "Continuous Monitoring", desc: "Detect and respond to threats in real time", icon: Eye },
      { title: "Data Protection", desc: "Secure sensitive information and maintain customer trust", icon: Lock },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Security Assessment", desc: "Conduct a thorough evaluation of your IT infrastructure, applications, and processes.", icon: Search },
      { title: "Threat Analysis", desc: "Identify vulnerabilities, risks, and potential attack vectors.", icon: Bug },
      { title: "Protection Strategy", desc: "Design and implement security measures, including firewalls, encryption, and access control.", icon: Shield },
      { title: "Monitoring & Response", desc: "Continuously monitor systems, detect threats, and respond proactively.", icon: Eye },
      { title: "Optimization & Reporting", desc: "Regularly refine security posture and provide actionable reports.", icon: LineChart },
    ],
    cta: "Ensure your business stays safe in a digital world?",
  },
  "email-collaboration": {
    eyebrow: "Email & Collaboration Solutions",
    heroTitle: "Empower Teams with",
    heroHighlight: "Modern Communication Tools",
    heroDesc: (
      <>
        Enhance productivity and collaboration with secure, scalable <strong>Email &amp; Collaboration Solutions</strong> for teams of all sizes.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Cloud-based email and file sharing", icon: Cloud },
      { title: "Real-time collaboration tools", icon: Users },
      { title: "Secure access and permissions", icon: Lock },
      { title: "Integration with existing systems", icon: Plug },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Assess collaboration requirements", icon: Search },
      { title: "Implement secure email and collaboration tools", icon: Settings },
      { title: "Train teams and optimize workflows", icon: GraduationCap },
      { title: "Provide ongoing support and maintenance", icon: LifeBuoy },
    ],
    cta: "Improve team productivity!",
  },
  "ssl-certificates": {
    eyebrow: "SSL Certificates",
    heroTitle: "Build Trust with",
    heroHighlight: "Encrypted, Secure Connections",
    heroDesc: (
      <>
        Protect your website and sensitive data with <strong>SSL &amp; Security Certificates</strong>. Ensure secure communication between your users and systems.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Encrypt sensitive data transmission", icon: Lock },
      { title: "Build customer trust and confidence", icon: ShieldCheck },
      { title: "Improve website SEO ranking", icon: TrendingUp },
      { title: "Ensure regulatory compliance", icon: BadgeCheck },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Identify certificate requirements", icon: Search },
      { title: "Deploy SSL/TLS certificates", icon: Shield },
      { title: "Configure servers for secure connections", icon: Server },
      { title: "Monitor and renew certificates regularly", icon: RefreshCw },
    ],
    cta: "Secure your website today!",
  },
  "document-management": {
    eyebrow: "Document Management Solutions (DMS)",
    heroTitle: "Secure, Organize, and Automate",
    heroHighlight: "Document Workflows",
    heroDesc: (
      <>
        Streamline document storage, access, and collaboration with <strong>DMS solutions</strong>. Keep your data secure, organized, and compliant.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Centralized document repository", icon: Folder },
      { title: "Secure access and permission management", icon: Lock },
      { title: "Automated document workflows and approvals", icon: Workflow },
      { title: "Compliance and audit-ready documentation", icon: BadgeCheck },
    ],
    approachTitle: "Approach",
    steps: [
      { title: "Evaluate current document processes", icon: Search },
      { title: "Implement secure DMS system", icon: Server },
      { title: "Automate workflows and approvals", icon: Workflow },
      { title: "Train teams and optimize usage", icon: GraduationCap },
    ],
    cta: "Simplify your document workflows!",
  },
  "software-licensing": {
    eyebrow: "Software Licensing & Reselling",
    heroTitle: "Authorized Software Licensing",
    heroHighlight: "and Expert Implementation",
    heroDesc: (
      <>
        As a trusted partner of <strong>Microsoft, Zoho, IceWarp, DigiCert</strong>, and many more, <strong>Apptriangle</strong> provides end-to-end software licensing solutions. Whether you need to purchase licenses, implement them, or require ongoing support, we ensure a seamless and reliable experience for your business.
      </>
    ),
    benefitsTitle: "Key Benefits",
    benefits: [
      { title: "Authorized Licensing", desc: "Purchase software from certified vendors with confidence.", icon: BadgeCheck },
      { title: "Implementation Services", desc: "Our experts set up and configure software to suit your business needs.", icon: Wrench },
      { title: "Ongoing Support", desc: "Ensure smooth operation with maintenance, updates, and troubleshooting", icon: Headset },
      { title: "Cost-Effective Solutions", desc: "Maximize value with the right license plan for your organization.", icon: PiggyBank },
      { title: "Wide Vendor Network", desc: "Access top software brands and enterprise solutions in one place.", icon: Users },
    ],
    approachTitle: "Our Approach",
    steps: [
      { title: "License Consultation", desc: "Understand your business requirements and recommend the right software and licensing options.", icon: Search },
      { title: "Procurement & Setup", desc: "Acquire authorized licenses and implement them efficiently.", icon: ShoppingCart },
      { title: "Training & Support", desc: "Provide user training, ongoing support, and system optimization.", icon: GraduationCap },
      { title: "Monitoring & Renewal", desc: "Ensure licenses stay compliant and up-to-date.", icon: RefreshCw },
    ],
    cta: "Simplify software procurement and management!",
  },
}

type ServiceMedia = {
  hero: string
  benefits: string
  benefitsGrid?: string[]
  approach?: string
  fit?: "cover" | "contain"
  heroImagePadding?: string
  benefitsImagePadding?: string
}

const serviceMedia: Record<string, ServiceMedia> = {
  "staff-augmentation": {
    hero: "/images/services/Staff Augmentation/undraw_collaboration_hkrb.svg",
    benefits: "/images/services/Staff Augmentation/undraw_segment-analysis_cl30.svg",
    fit: "contain",
    heroImagePadding: "p-0",
  },
  "managed-it-services": {
    hero: "/images/services/managed-it-services/undraw_business-decisions_7vkl.svg",
    benefits: "/images/services/managed-it-services/undraw_server-status_7viz.svg",
    fit: "contain",
  },
  "business-process-automation": {
    hero: "/images/services/business-process-automation/undraw_ai-code-assistant_5xop.svg",
    benefits: "/images/services/business-process-automation/undraw_data-reports_l2u3.svg",
    fit: "contain",
  },
  "app-development": {
    hero: "/images/services/app-development/undraw_mobile-development_tjxm.svg",
    benefits: "/images/services/app-development/undraw_wireframing_d3cx.svg",
    fit: "contain",
  },
  "power-platform": {
    hero: "/images/services/power-platform/undraw_data_25jw.svg",
    benefits: "/images/services/power-platform/undraw_problem-solving_1kpx.svg",
    fit: "contain",
  },
  "technology-consulting": {
    hero: "/images/services/technology-consulting/undraw_business-plan_zrf7.svg",
    benefits: "/images/services/technology-consulting/undraw_data-processing_ohfw.svg",
    fit: "contain",
  },
  "mvp-development": {
    hero: "/images/services/mvp-development/undraw_experience-design_d4md.svg",
    benefits: "/images/services/mvp-development/undraw_mobile-ux_5h2w.svg",
    fit: "contain",
  },
  "ai-ml-solutions": {
    hero: "/images/services/ai-ml-solutions/undraw_ai-agent_pdkp.svg",
    benefits: "/images/services/ai-ml-solutions/undraw_ai-data-extraction_soxc.svg",
    fit: "contain",
  },
  "business-analytics": {
    hero: "/images/services/business-analytics/undraw_lightbulb-moment_16av.svg",
    benefits: "/images/services/business-analytics/undraw_online-stats_d57c.svg",
    fit: "contain",
  },
  "chatbot-development": {
    hero: "/images/services/chatbot-development/undraw_ai-answers_uxgx.svg",
    benefits: "/images/services/chatbot-development/undraw_join_niai.svg",
    fit: "contain",
  },
  "cybersecurity-services": {
    hero: "/images/services/cybersecurity-services/undraw_authentication_1evl.svg",
    benefits: "/images/services/cybersecurity-services/undraw_security-on_3ykb.svg",
    fit: "contain",
  },
  "email-collaboration": {
    hero: "/images/services/email-collaboration/undraw_cloud-sync_h1ig.svg",
    benefits: "/images/services/email-collaboration/undraw_email-campaign_2z6t.svg",
    fit: "contain",
    heroImagePadding: "p-0",
    benefitsImagePadding: "p-0",
  },
  "ssl-certificates": {
    hero: "/images/services/ssl-certificates/undraw_mobile-log-in_0n4q.svg",
    benefits: "/images/services/ssl-certificates/undraw_security_0ubl.svg",
    fit: "contain",
    heroImagePadding: "p-0",
    benefitsImagePadding: "p-0",
  },
  "document-management": {
    hero: "/images/services/document-management/undraw_ai-generated-document_ykb4.svg",
    benefits: "/images/services/document-management/undraw_file-bundle_oaof.svg",
    fit: "contain",
    heroImagePadding: "p-0",
    benefitsImagePadding: "p-0",
  },
  "software-licensing": {
    hero: "/images/services/software-licensing/undraw_analytics-setup_ptrz.svg",
    benefits: "/images/services/software-licensing/undraw_certification_oqiz.svg",
    fit: "contain",
    heroImagePadding: "p-0",
    benefitsImagePadding: "p-0",
  },
}

const defaultMedia: ServiceMedia = {
  hero: "/images/services/pexels-fauxels-3184436-1024x683.webp",
  benefits: "/images/services/pexels-chuck-3109168-1-1024x683.webp",
}

function getServiceMedia(slug: string) {
  return serviceMedia[slug as keyof typeof serviceMedia] ?? defaultMedia
}

function HeroSplit({ title, highlight, description, image, fit = "cover", imagePadding = "p-6", illustration }: { title: string; highlight: string; description: ReactNode; image: string; fit?: "cover" | "contain"; imagePadding?: string; illustration?: ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-8 pt-12 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
            {title} {" "}
            <span className="text-white">{highlight}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl border-2 border-transparent bg-card/40 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          {illustration ?? (
            <Image src={image} alt="Service visual" fill sizes="(min-width: 1024px) 40vw, 100vw" className={fit === "contain" ? `object-contain ${imagePadding}` : "object-cover"} />
          )}
        </div>
      </div>
    </section>
  )
}

function BenefitsImageList({ title, image, items, fit = "cover", imagePadding = "p-6", illustration }: { title: string; image: string; items: BenefitItem[]; fit?: "cover" | "contain"; imagePadding?: string; illustration?: ReactNode }) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-left text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">{title}</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border-2 border-transparent bg-card/40">
            {illustration ?? (
              <Image src={image} alt={title} fill sizes="(min-width: 1024px) 40vw, 100vw" className={fit === "contain" ? `object-contain ${imagePadding}` : "object-cover"} />
            )}
          </div>
          <div className="space-y-4">
            {items.map((item) => (
              <TiltCard key={item.title} intensity={8} className="rounded-xl">
                <div className="card-glow flex items-center gap-3 rounded-xl border-2 border-white/60 bg-card/40 px-4 py-3 transition-all duration-300 hover:border-primary/45 hover:shadow-[0_16px_50px_-20px_rgba(41,179,255,0.45)]">
                  <SquareCheckBig size={28} className="shrink-0 text-foreground" />
                  <div>
                    <span className="text-sm font-bold text-foreground">{item.title}</span>
                    {item.desc && <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsCardsGrid({ title, items }: { title: string; items: StepItem[] }) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-center text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">{title}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <TiltCard key={item.title} intensity={10} className="rounded-xl">
              <div
                className="card-glow rounded-xl border-2 border-white/60 bg-card/40 px-4 py-5 text-center h-full transition-all duration-300 hover:border-primary/45 hover:shadow-[0_16px_50px_-20px_rgba(41,179,255,0.45)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--sky),rgba(41,179,255,0.2))] text-(--blue)">
                  <Icon size={28} />
                </div>
                <p className="mt-3 text-xs font-semibold text-foreground sm:text-sm">{item.title}</p>
                {item.desc && <p className="mt-2 text-[11px] text-muted-foreground">{item.desc}</p>}
              </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = content[slug]
  if (!data) return notFound()

  const media = getServiceMedia(slug)

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSplit
          title={data.heroTitle}
          highlight={data.heroHighlight}
          description={data.heroDesc}
          image={media.hero}
          fit={media.fit}
          imagePadding={media.heroImagePadding}
          illustration={
            slug === "business-process-automation" ? (
              <AiCodeAssistantIllustration />
            ) : slug === "app-development" ? (
              <MobileDevelopmentIllustration />
            ) : slug === "power-platform" ? (
              <DataCollaborationIllustration />
            ) : slug === "technology-consulting" ? (
              <BusinessPlanIllustration />
            ) : slug === "mvp-development" ? (
              <ExperienceDesignIllustration />
            ) : slug === "ai-ml-solutions" ? (
              <AiAgentIllustration />
            ) : slug === "business-analytics" ? (
              <LightbulbMomentIllustration />
            ) : slug === "chatbot-development" ? (
              <AiAnswersIllustration />
            ) : undefined
          }
        />
        <BenefitsImageList
          title={data.benefitsTitle}
          image={media.benefits}
          items={data.benefits}
          fit={media.fit}
          imagePadding={media.benefitsImagePadding}
          illustration={
            slug === "managed-it-services" ? (
              <ServerStatusIllustration />
            ) : slug === "business-process-automation" ? (
              <DataReportsIllustration />
            ) : slug === "app-development" ? (
              <WireframingIllustration />
            ) : slug === "power-platform" ? (
              <ProblemSolvingIllustration />
            ) : slug === "technology-consulting" ? (
              <DataProcessingIllustration />
            ) : slug === "mvp-development" ? (
              <MobileUxIllustration />
            ) : slug === "ai-ml-solutions" ? (
              <AiDataExtractionIllustration />
            ) : slug === "business-analytics" ? (
              <OnlineStatsIllustration />
            ) : slug === "chatbot-development" ? (
              <JoinIllustration />
            ) : slug === "staff-augmentation" ? (
              <SegmentAnalysisIllustration />
            ) : undefined
          }
        />
        <BenefitsCardsGrid title={data.approachTitle} items={data.steps} />
        <ServiceCta title={data.cta} />
      </main>
      <SiteFooter />
    </>
  )
}
