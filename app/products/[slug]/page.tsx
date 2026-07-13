import Image from "next/image"
import { notFound } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import {
  ArrowLeftRight,
  ArrowUpRight as ArrowUpRightIcon,
  BarChart3,
  Bell as BellIcon,
  Bike,
  BookOpen as BookOpenIcon,
  Bone as BoneIcon,
  Box,
  CalendarClock,
  Car as CarIcon,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  CreditCard,
  Database,
  Eye,
  FileText,
  Filter,
  Folder,
  Headphones,
  History,
  ImageIcon,
  LayoutGrid,
  Layers,
  ListTodo,
  Lock,
  Mail,
  MapPinned,
  PackageCheck,
  Navigation,
  PieChart,
  QrCode,
  Route,
  ScanLine,
  Search,
  ShieldCheck,
  Share2 as ShareIcon,
  ShoppingCart,
  SlidersHorizontal,
  Smartphone,
  SquareCheckBig,
  Timer,
  Tag,
  ToggleLeft,
  Wrench,
  Workflow as WorkflowIcon,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceCta } from "@/components/page-blocks"
import { TiltCard } from "@/components/tilt-card"

type FeatureItem = { title: string; desc: string; icon: LucideIcon; featured?: boolean }
type ChecklistItem = { title: string; desc: string }

type ProductContent = {
  heroTitle: string
  heroHighlight: string
  heroDesc: string
  heroImage: string
  featuresTitle: string
  features: FeatureItem[]
  whyTitle: string
  whyImage: string
  whyImage2?: string
  whyChecklist: ChecklistItem[]
  ctaQuestion: string
  ctaLabel: string
  heroImageMaxWidth?: string
  whyImageMaxWidth?: string
}

function anatomyChecklist(memoryTitle: string): ChecklistItem[] {
  return [
    { title: "Clear Visual Learning", desc: "Simple cards and interactive visuals make complex anatomy easier to study, recognize, and remember." },
    { title: "User-Friendly", desc: "Clean screens, quick gestures, and organized lists make studying smooth for students and learners." },
    { title: "Lightweight & Fast", desc: "Native Objective-C and Android Java deliver responsive screens and snappy navigation on a wide range of devices." },
    { title: memoryTitle, desc: "Active recall with picture matching and targeted review helps you remember names and locations longer." },
    { title: "Offline & Private", desc: "Study anytime without internet; minimal permissions and on-device data help keep learning experience secure." },
  ]
}

const content: Record<string, ProductContent> = {
  "expense-tracker": {
    heroTitle: "Manage Your Finance Smarter,",
    heroHighlight: "Not Harder!",
    heroDesc:
      "Expense Tracker is a simple yet powerful iOS app designed to help you effortlessly manage your daily income and expenses. Whether you want to track your monthly budget, monitor your spending habits, or plan future savings, this app is your personal finance companion right in your pocket!",
    heroImage: "/images/products/expense-tracker/hero-screens.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Easy Income & Expense Logging", desc: "Add income and expenses in seconds with an intuitive, clutter-free interface.", icon: ArrowLeftRight },
      { title: "Organized by Categories", desc: "Categorize your spending into groups like Food, Transport, Shopping, Entertainment, Bills, and more for better tracking and analysis.", icon: Tag },
      { title: "Visual Reports & Charts", desc: "Understand where your money goes with beautiful, easy-to-read graphs and charts.", icon: PieChart, featured: true },
      { title: "Custom Categories", desc: "Personalize your own categories to better match your lifestyle and needs.", icon: LayoutGrid },
      { title: "Daily, Weekly, Monthly Overview", desc: "Instantly see summaries of your spending patterns over different time frames.", icon: BarChart3 },
      { title: "Secure and Private", desc: "Your financial data stays private on your device. No server storage, no sign-up required.", icon: Lock },
      { title: "Dark Mode Support", desc: "Enjoy a beautifully designed experience in both Light and Dark modes.", icon: ToggleLeft },
      { title: "iCloud Backup & Restore", desc: "Keep your data safe and synced across devices.", icon: Cloud },
      { title: "Search and Filter", desc: "Easily find past transactions by category, amount, or date.", icon: Filter },
      { title: "Simple, Clean UI", desc: "A modern, elegant design that makes tracking your expenses quick and stress-free.", icon: Box },
    ],
    whyTitle: "Why Expense Tracker?",
    whyImage: "/images/products/expense-tracker/why-screens.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Simple by Design", desc: "No clutter, no confusion. Just add expenses and go." },
      { title: "Clear Insights", desc: "See where your money goes with easy-to-read summaries." },
      { title: "No Learning Curve", desc: "Anyone can use it from day one." },
      { title: "Perfect for Everyone", desc: "Ideal for students, freelancers, families, and individuals." },
    ],
    ctaQuestion: "You want to explore this App?",
    ctaLabel: "Schedule a Call",
  },
  ecommerce: {
    heroTitle: "eShop eCommerce",
    heroHighlight: "Mobile App",
    heroDesc:
      "Perfect for developers and businesses aiming to build their own robust and scalable eCommerce platform, this codebase is designed using Flutter, enabling seamless cross-platform development for both Android and iOS.",
    heroImage: "/images/products/ecommerce/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Multi-Platform Compatibility", desc: "Developed with Flutter, ensuring smooth performance on both Android and iOS devices.", icon: Smartphone },
      { title: "Beautiful UI/UX Design", desc: "Elegant and modern design, optimized for a superior user experience that keeps customers engaged and coming back for more.", icon: LayoutGrid },
      { title: "User-Friendly Navigation", desc: "Intuitive navigation with features like search, filtering, and sorting to help customers find products quickly.", icon: Navigation },
      { title: "Shopping Cart & Checkout", desc: "A streamlined shopping cart experience with a smooth checkout process to reduce cart abandonment.", icon: ShoppingCart },
      { title: "Responsive Design", desc: "Looks and functions beautifully on any screen size, from mobile devices to tablets.", icon: Smartphone },
      { title: "Easy Customization", desc: "A well-organized and documented codebase makes it easy to customize and extend the app to fit your specific business needs.", icon: SlidersHorizontal },
    ],
    whyTitle: "Why choose eShop",
    whyImage: "/images/products/ecommerce/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Highly Customizable", desc: "Tailor the app to your unique business requirements with flexible settings from scratch." },
      { title: "Future-Proof", desc: "Built with Flutter, the code is ready to maintain and adapt to new app updates and improvements." },
      { title: "Time-Saving", desc: "Jumpstart your project and save hundreds of development hours with ready-to-use App." },
      { title: "Clean & Professional Design", desc: "Every pixel has been meticulously calculated to create a flawless and modern user interface. Our UI/UX designer crafted this design using Figma." },
    ],
    ctaQuestion: "Build your Ecommerce business with this App?",
    ctaLabel: "Schedule a Call",
  },
  "rico-ride-connect": {
    heroTitle: "Rico Ride Connect - Get There Fast, Safely, and",
    heroHighlight: "In Control",
    heroDesc:
      "Rico Ride Connect is a fast, reliable, and secure ride-sharing app for everyday travel. Book in seconds, track your driver live, and enjoy transparent fares and safety features that keep you in control-commuting, hangouts, or quick errands made easy.",
    heroImage: "/images/products/rico-ride/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Quick Ride Requests", desc: "Book in seconds with clear pickup, destination, and instant driver matching.", icon: Bike },
      { title: "Live Driver Tracking", desc: "Watch your ride arrive in real time with live progress and ETA.", icon: MapPinned },
      { title: "Upfront Fares & ETA", desc: "See price and arrival time before you confirm-no surprises, no guesswork.", icon: CalendarClock },
      { title: "Flexible Payments", desc: "Pay with cash, mobile wallet, or card-with your preferred method.", icon: CreditCard },
      { title: "Built-In Safety", desc: "SOS button, trip-share, OTP pickup verification, and driver ratings for trust.", icon: ShieldCheck },
      { title: "Favorites & Smart Routing", desc: "Save Home/Work, rebook faster, and choose preferred routes for comfort.", icon: Route },
    ],
    whyTitle: "Why Choose Rico Ride Connect?",
    whyImage: "/images/products/rico-ride/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Reliable Dispatch", desc: "Smart matching reduces wait times and cancellations, keeping rides and drivers connected without interruption." },
      { title: "Modern Flutter UI", desc: "Clean Flutter design with clear controls, native-feeling screens, and support simple for everyone, everywhere." },
      { title: "Fast & Smooth", desc: "Optimized code delivers responsive maps, quick updates, and low battery use across iOS and Android." },
      { title: "Safety & Privacy", desc: "In-app safety tools, data encryption, and permission controls protect trips and personal information at all times." },
    ],
    ctaQuestion: "You want to explore this App?",
    ctaLabel: "Schedule a Call",
  },
  "asset-management": {
    heroTitle: "Asset Management System - Track, Manage,",
    heroHighlight: "Maintain - All in One",
    heroDesc:
      "A complete asset lifecycle solution for physical and digital assets. See location, status, and ownership, plan maintenance on time, track depreciation and compliance, and get accurate reports for faster decisions-without spreadsheets.",
    heroImage: "/images/products/asset-management/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Asset Registry & Ownership", desc: "Create a single record per asset with type, owner, site, and assignment history.", icon: Box },
      { title: "Location & Status Tracking", desc: "Know where assets are and their current condition-update records in seconds.", icon: MapPinned },
      { title: "Maintenance Scheduling", desc: "Plan preventive schedules and repairs; get reminders before due dates.", icon: CalendarClock },
      { title: "Depreciation & Finance", desc: "Track costs, useful life, and book value; export figures for accounting.", icon: BarChart3 },
      { title: "Compliance & Audit Trail", desc: "Keep certificates, policies, and logs with timestamps for full traceability.", icon: CheckCircle2 },
      { title: "Smart IDs & Scanning", desc: "Use QR/barcodes to identify assets quickly and reduce manual errors.", icon: QrCode },
    ],
    whyTitle: "Why Choose Asset Management System?",
    whyImage: "/images/products/asset-management/why.png",
    whyImageMaxWidth: "max-w-lg",
    whyChecklist: [
      { title: "Cross-Site Visibility", desc: "See asset status across departments and locations in real time, improving transparency, accountability, and coordination." },
      { title: "Reduced Loss & Downtime", desc: "Track ownership and health to prevent misplaced equipment, reduce outages, and shorten time to resolution." },
      { title: "Timely Maintenance", desc: "Automated reminders and service schedules keep assets maintained on time, extending lifespan and reliability." },
      { title: "Accurate Reporting", desc: "Dashboards and exportable reports bring clean data for confident decisions and faster audits and planning." },
      { title: "Secure & Auditable", desc: "Role-based access, encryption, and full audit logs protect data and simplify compliance across teams." },
    ],
    ctaQuestion: "You want to manage your asset?",
    ctaLabel: "Schedule a Call",
  },
  "school-management-system": {
    heroTitle: "School Management System — Your School,",
    heroHighlight: "Organized",
    heroDesc:
      "A complete web platform that streamlines admissions, attendance, timetables, grading, communication, and fees. Teachers work faster, admins see real-time data, and parents stay informed—so the school runs smoothly every day.",
    heroImage: "/images/products/school-management/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Student Enrollment & Profiles", desc: "Enroll students online and keep data records—guardians, documents, class history in one place.", icon: ClipboardList },
      { title: "Attendance Tracking", desc: "Daily roll call with instant status updates, alerts for absences, and exportable attendance logs.", icon: ClipboardCheck },
      { title: "Class Scheduling & Timetables", desc: "Build conflict-free timetables for classes, rooms, and teachers—with edit-able slots.", icon: Timer },
      { title: "Gradebook & Result Publishing", desc: "Record marks, calculate grades, and release report cards securely to students and parents.", icon: BookOpenIcon },
      { title: "Assignments & Communication", desc: "Teachers upload tasks, share materials, and message students/parents with announcements.", icon: Wrench },
      { title: "Fees & Payments", desc: "Track invoices, discounts, dues, and receipts—keep finance records accurate and audit-ready.", icon: CreditCard },
    ],
    whyTitle: "Why Choose School Management System?",
    whyImage: "/images/products/school-management/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Real-Time Data", desc: "Live dashboards and role-wise reports show school activities, updates, and performance for faster, confident decisions every day." },
      { title: "User-Friendly", desc: "Clean screens, simple flows, and helpful defaults make everyday school tasks quick for teachers and administrators." },
      { title: "Secure & Role-Based", desc: "Role permissions, encryption, and audit trails protect student data and control access consistently across the school." },
      { title: "Work Automation", desc: "Automated forms, attendance, and notifications remove repetitive tasks, reduce manual errors, and free staff time." },
      { title: "Proven Stack", desc: "Built on Laravel and MySQL for reliable performance and maintainable management aligned with school IT standards." },
    ],
    ctaQuestion: "You want to manage your school?",
    ctaLabel: "Schedule a Call",
  },
  treal: {
    heroTitle: "Treal — Employee Attendance,",
    heroHighlight: "Leave & Expense",
    heroDesc:
      "Treal helps employees record attendance, manage shifts, request leave, track expenses, and organize tasks all in one Android, iOS, Web app. A friendly interface and robust features keep daily work simple for staff, managers, and admins.",
    heroImage: "/images/products/treal/hero.png",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Real-Time Attendance", desc: "Record check-in/check-out quickly, view daily summaries, and reduce manual errors with consistent logs visible to managers and teams.", icon: Timer },
      { title: "Shift Management", desc: "Build and publish rosters, handle overtime rules, swap requests, and get clearer visibility on upcoming shifts and coverage.", icon: History },
      { title: "Leave Requests Workflow", desc: "Request, approve, reject, or cancel leaves in a structured way that keeps HR, managers, and employees aligned.", icon: FileText },
      { title: "Smart Expense Capture", desc: "Add expenses with categories, amounts, and receipts; submit expenses from the camera and track approvals for timely reimbursements.", icon: CalendarClock },
      { title: "Task Management", desc: "Create tasks, set due dates, assign owners, add notes and attachments, and track progress with simple status updates.", icon: ListTodo },
      { title: "Approvals, Notifications & Reports", desc: "Managers approve in one tap; employees receive real time notifications and monthly reports for attendance, leave, and expenses.", icon: BellIcon },
    ],
    whyTitle: "Why Choose Treal?",
    whyImage: "/images/products/treal/why.png",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "User-Friendly", desc: "Clean screens, simple actions, and helpful defaults make everyday tasks easy for employees, managers, and admins." },
      { title: "Faster Decisions", desc: "Live dashboards and clear summaries give teams the right information to approve, plan, and act quickly." },
      { title: "Secure & Role-Based", desc: "Role permissions control who sees and changes data, improving privacy and compliance across departments." },
      { title: "Reliable on Android", desc: "Optimized for Android devices with smooth performance, responsive interactions, and consistent behavior on diverse hardware." },
    ],
    ctaQuestion: "Build your Ecommerce business with this App?",
    ctaLabel: "Schedule a Call",
  },
  "car-movement-on-map": {
    heroTitle: "Car Movement On Map - Seamless Car",
    heroHighlight: "Animation, Route Navigation on Google Maps",
    heroDesc:
      "Bring your app to life with CarMover—a premium Swift module that adds real-time car movement, intelligent routing, and rich navigation experience directly into any iOS app!",
    heroImage: "/images/products/car-movement/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Smooth Car Movement", desc: "Animate a car icon as it moves seamlessly along the plotted route on Google Maps.", icon: CarIcon },
      { title: "Real-Time Route Display", desc: "Dynamically shows the best path from the source to the destination.", icon: Timer },
      { title: "Turn-by-Turn Indications", desc: "Displays left and right turn hints directly along the journey.", icon: ArrowLeftRight },
      { title: "Distance & Time Estimates", desc: "Calculates and presents remaining distance and ETA in real-time.", icon: MapPinned },
      { title: "Powered by Google Maps SDK", desc: "Reliable, accurate, and familiar experience for users.", icon: Route },
      { title: "Highly Customizable", desc: "Easily change the car icon, speed, route colors, and markers to match your app's design.", icon: SlidersHorizontal },
    ],
    whyTitle: "Perfect For",
    whyImage: "/images/products/car-movement/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Ride-hailing apps", desc: "" },
      { title: "Food delivery apps", desc: "" },
      { title: "Logistics & courier tracking apps", desc: "" },
      { title: "Real-time service tracking apps", desc: "" },
      { title: "Any app that needs live movement visualization on maps!", desc: "" },
    ],
    ctaQuestion: "You want to explore our solutions?",
    ctaLabel: "Schedule a Call",
  },
  "ticketing-system": {
    heroTitle: "Ticketing System — Your Unified Support",
    heroHighlight: "Assistant",
    heroDesc:
      "This web application helps teams collect requests from multiple channels, track every ticket from open to close, and improve service quality with structured SLAs, automation, and a connected knowledge base. Agents collaborate with notes, easy informed via notifications, and use reporting for continuous improvement.",
    heroImage: "/images/products/help-desk/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Ticket Creation & Management", desc: "Create, assign, prioritize, and track support tickets from multiple channels in one centralized system.", icon: ClipboardList },
      { title: "Automated Ticket Routing", desc: "Automatically assign tickets to the right departments or agents based on category.", icon: History },
      { title: "Role-Based Access Control", desc: "Control different levels of access for admins, agents, supervisors, and customers to ensure security and clarity.", icon: ShieldCheck },
      { title: "Email & Notification Integration", desc: "Send real-time email or in-app notifications to agents and users on ticket updates or replies.", icon: Mail },
      { title: "Reports & Analytics", desc: "Generate detailed reports on agent performance, ticket volume, response/resolution times, and customer satisfaction.", icon: BarChart3 },
      { title: "Knowledge Base Integration", desc: "Connect with a help center or FAQs so users can self-serve common issues before submitting a ticket.", icon: Headphones },
    ],
    whyTitle: "Why Choose Office Management System",
    whyImage: "/images/products/help-desk/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Easy to Adopt", desc: "Clean, browser-based UI with guided workflows keeps setup simple while scaling manual steps for agents." },
      { title: "Faster Resolution", desc: "SLA, auto-routing, and reusable responses shorten cycles and prevent breaches, improving customer trust." },
      { title: "Self-Service Ready", desc: "A searchable knowledge base reduces repetitive tickets and gives users answers before they ask." },
      { title: "Actionable Analytics", desc: "Real-time metrics and dashboards help leaders spot bottlenecks early and fine-tune support operations." },
    ],
    ctaQuestion: "You want to the system?",
    ctaLabel: "Schedule a Call",
  },
  "inventory-pro": {
    heroTitle: "Inventory Pro — Your Smart",
    heroHighlight: "Inventory Assistant",
    heroDesc:
      "Inventory Pro System is a smart, efficient inventory management solution for real-time stock tracking. Built as a web app with NextJS, Python-Flask, and MySQL, it helps teams manage products, suppliers, alerts, and reports with speed and simplicity.",
    heroImage: "/images/products/inventory-pro/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Real-Time Stock Tracking", desc: "Track products as they move through receiving, transfers, and sales with instant updates, reducing errors and keeping records accurate across your team.", icon: Timer },
      { title: "Low-Stock Alerts", desc: "Set reorder points and get automatic notifications when quantities drop, so you restock on time and avoid costly stockouts.", icon: BellIcon },
      { title: "Category-Based Organization", desc: "Group items by categories, SKUs, and variants for clean navigation, fast search, and simplified reporting across product lines.", icon: ClipboardList },
      { title: "Supplier Management", desc: "Keep supplier records, lead times, and preferred vendors organized to streamline purchasing, deliveries, and price comparisons.", icon: PackageCheck },
      { title: "Role-Based Access", desc: "Assign permissions for admins, warehouse staff, and sales users with audit logs that catch every change for secure operations.", icon: ShieldCheck },
      { title: "Reports & Dashboards", desc: "View inventory valuation, movement, aging, and performance reports with export-ready Excel for clear, data-driven decisions.", icon: BarChart3 },
    ],
    whyTitle: "Why Choose Inventory Pro?",
    whyImage: "/images/products/inventory-pro/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Real-Time Accuracy", desc: "Live updates powered by MySQL transactions keep stock levels correct across users and devices—no more outdated sheets." },
      { title: "User-Friendly", desc: "Clean NextJS interface with quick filters, smart search, and bulk actions makes everyday inventory tasks simple for everyone." },
      { title: "Lightweight & Fast", desc: "Optimized Python Flask APIs deliver speedy responses and snappy dashboards, even on modest hardware or shared hosting." },
      { title: "Built for Growth", desc: "Modular design scales easily: add products, sites, or modules—without downtime or complex data migrations." },
      { title: "Secure & Private", desc: "Role permissions, audit logs, and encrypted connections help protect business data and support compliance best practices." },
    ],
    ctaQuestion: "You want to explore the solution?",
    ctaLabel: "Schedule a Call",
  },
  "qrbar-scanner": {
    heroTitle: "Create, Scan, and Manage QR Codes and",
    heroHighlight: "Barcodes - All in One App!",
    heroDesc:
      "Looking for the fastest way to generate or scan QR codes and barcodes? Our app offers you the ultimate all-in-one solution! Whether you want to share a link, contact info, product data, or scan anything around you—this app makes it incredibly easy and fast.",
    heroImage: "/images/products/qrbar/hero.png",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Generate QR Codes", desc: "Create custom QR codes from text, links, emails, phone numbers, and more.", icon: QrCode },
      { title: "Generate Barcodes", desc: "Instantly produce barcodes for inventory, retail, or personal use.", icon: ScanLine },
      { title: "Scan Instantly", desc: "Use your camera to scan QR codes and barcodes with lightning speed.", icon: ScanLine },
      { title: "Save & Share", desc: "Save your created codes or share them directly through social apps, email, or AirDrop.", icon: ShareIcon },
      { title: "Scan from Gallery", desc: "Choose images from your photo library to detect QR or barcodes inside them.", icon: ImageIcon },
      { title: "History Management", desc: "Automatically keep track of your scans and creations for future use.", icon: History },
    ],
    whyTitle: "Ideal For",
    whyImage: "/images/products/qrbar/why.png",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Business owners", desc: "" },
      { title: "Event organizers", desc: "" },
      { title: "Students and teachers", desc: "" },
      { title: "Inventory and warehouse managers", desc: "" },
    ],
    ctaQuestion: "You want to explore our solutions?",
    ctaLabel: "Schedule a Call",
  },
  "office-management-system": {
    heroTitle: "Office Management System (OMS) - Your",
    heroHighlight: "Unified Workplace Operations Assistant",
    heroDesc:
      "OMS centralizes everyday office tasks-attendance and leave, expenses, documents, meeting rooms, and approvals-into one easy web app. Built with Laravel (PHP), it streamlines administrative workflows and improves visibility across departments and sites.",
    heroImage: "/images/products/oms/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Attendance & Shift Management", desc: "Record check-in/check-out, build shift rosters, handle overtime rules, and view real-time logs to monitor punctual events.", icon: Timer },
      { title: "Payroll", desc: "Calculate salaries from attendance and shifts; manage allowances, deductions, and downloadable pay slips with clear audit trails.", icon: FileText },
      { title: "Task Management", desc: "Assign tasks, set deadlines, add notes and attachments, and track status to ensure deliverables stay on time.", icon: ListTodo },
      { title: "Contacts & Leads", desc: "Keep company contacts and sales leads in one place; capture notes, status, tags, and follow-up reminders for follow-ups.", icon: Mail },
      { title: "Calendar & Approvals", desc: "Schedule events and deadlines; route requests for leave, expenses, purchase, or logistical approvals with notifications and escalation.", icon: CalendarClock },
      { title: "Expense Tracking", desc: "Submit expenses with categories and receipts; streamline review, approvals, and monthly exports for finance.", icon: CreditCard },
    ],
    whyTitle: "Why Choose Office Management System",
    whyImage: "/images/products/oms/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "User-Friendly", desc: "Clean screens and simple flows help employees, managers, and admins finish daily tasks faster with fewer clicks." },
      { title: "Faster Decisions", desc: "Real-time dashboards for attendance, tasks, leads, and expenses give managers the context to approve and plan quickly." },
      { title: "Secure & Role-Based", desc: "Permissions and activity logs protect sensitive payroll and approvals data while keeping access consistent across teams." },
      { title: "Scalable & Modular", desc: "Add users, sites, or new modules without disrupting existing processes-OMS grows smoothly with your organization." },
    ],
    ctaQuestion: "You want to manage your office with the App?",
    ctaLabel: "Schedule a Call",
  },
  "back-office-ai": {
    heroTitle: "BackOffice AI - Your Document Intelligence",
    heroHighlight: "Assistant",
    heroDesc:
      "BackOffice AI turns PDFs, DOCX, and XLSX files into a smart, searchable knowledge base. Upload your documents once, ask any question, and get accurate, context-based answers from your own content-no more manual searching, faster decisions, and hidden insights unlocked.",
    heroImage: "/images/products/back-office-ai/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Instant Knowledge Base", desc: "Upload files and documents once and access them through smart search.", icon: Database },
      { title: "RAG Answers You Can Trust", desc: "The AI cites passages from your documents and answers with context.", icon: Layers },
      { title: "Multi-Format Support", desc: "Works with PDF, DOCX, and XLSX-ideal for policies, reports, manuals, and forms.", icon: FileText },
      { title: "Semantic Search & Embeddings", desc: "Find relevant content using meaning, not just keywords.", icon: Search },
      { title: "Secure, Private, Yours", desc: "Your data stays inside the private knowledge base; it is not public.", icon: Lock },
      { title: "Modern Web Experience", desc: "Clean UI for interacting with documents, files, and query-ready results.", icon: LayoutGrid },
    ],
    whyTitle: "Why Choose BackOffice AI?",
    whyImage: "/images/products/back-office-ai/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Document-Driven Accuracy", desc: "BackOffice AI returns precise answers grounded in your internal documents, reducing ambiguity and improving trust." },
      { title: "Time Saver", desc: "Cut hours of manual searching with instant retrieval, summaries, and references directly inside your workflow." },
      { title: "Enterprise-Ready", desc: "Role controls and private knowledge organization make it safe for operations, reporting, audit tasks, and department records that meet enterprise security requirements." },
      { title: "Easy Integration", desc: "Connect quickly via REST APIs, SDKs, or app deployment so it fits your architecture without heavy changes." },
    ],
    ctaQuestion: "You want to explore this App?",
    ctaLabel: "Schedule a Call",
  },
  "creative-memo": {
    heroTitle: "Take note-taking to the next level with this",
    heroHighlight: "feature rich Creative Memo App!",
    heroDesc:
      "Built with SwiftUI and following the MVVM architecture, this app offers a seamless, modern, and efficient note-taking experience.",
    heroImage: "/images/products/creative-memo/hero.png",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Multiple Attachments", desc: "Attach photos, videos, audio recordings, links, and handwritten drawings to your memos.", icon: FileText },
      { title: "Organized & Searchable", desc: "Categorize memos easily using tags for quick access.", icon: Search },
      { title: "Pin & Lock", desc: "Keep important memos at the top with pinning and secure sensitive notes with a lock feature.", icon: Lock },
      { title: "Core Data Storage", desc: "All memos and their attachments are saved locally using Apple's Core Data framework for efficient and reliable offline access.", icon: Database },
      { title: "SwiftUI & MVVM", desc: "Clean, maintainable, and scalable architecture using the latest Apple technologies.", icon: Wrench },
      { title: "Dark Mode Support", desc: "Offers a smooth experience in light and dark themes.", icon: ToggleLeft },
    ],
    whyTitle: "",
    whyImage: "/images/products/creative-memo/why.png",
    whyImage2: "/images/products/creative-memo/why-2.png",
    whyImageMaxWidth: "max-w-lg",
    whyChecklist: [],
    ctaQuestion: "You want to explore this App?",
    ctaLabel: "Schedule a Call",
  },
  "secure-vault": {
    heroTitle: "SecureVault - Photo & Video Locker with",
    heroHighlight: "Disguised App Icon and Premium iOS App",
    heroDesc:
      "Launch your own Privacy App with a Smart Twist! SecureVault is a powerful yet discreet app that locks private Photos and Videos-without annoying ads or subscription traps like most competitors.",
    heroImage: "/images/products/secure-vault/hero.png",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Unlimited Photo & Video Storage", desc: "Store safely inside app sandbox.", icon: ImageIcon },
      { title: "Custom Folder Creation", desc: "Organize files your way.", icon: Folder },
      { title: "Dynamic App Icon Change", desc: "Switch to a Calculator icon for complete privacy.", icon: LayoutGrid },
      { title: "PIN Code Protection", desc: "Easily customizable to Face ID / Touch ID.", icon: Lock },
      { title: "Modern, Minimalist Design", desc: "Professional UI built using Swift.", icon: Layers },
      { title: "Built with Swift", desc: "Clean, scalable, and up-to-date Swift codebase.", icon: Wrench },
    ],
    whyTitle: "Ideal For",
    whyImage: "/images/products/secure-vault/why.png",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Entrepreneurs & Startups wanting a high-demand app.", desc: "" },
      { title: "Developers looking for a professional vault app.", desc: "" },
      { title: "Agencies offering white-label app solutions.", desc: "" },
      { title: "Anyone wanting to enter the security and privacy app market fast.", desc: "" },
    ],
    ctaQuestion: "You want to explore our solutions?",
    ctaLabel: "Schedule a Call",
  },
  "path-finder": {
    heroTitle: "Path Finder - Smart Navigation and",
    heroHighlight: "Route Discovery Assistant",
    heroDesc:
      "Path Finder helps users discover clear routes, save important destinations, and move confidently with a lightweight navigation experience designed for everyday travel and location-based workflows.",
    heroImage: "/images/products/path-finder/hero.png",
    heroImageMaxWidth: "max-w-xs",
    featuresTitle: "Key Features",
    features: [
      { title: "Route Planning", desc: "Plan routes quickly between source and destination points.", icon: Route },
      { title: "Saved Locations", desc: "Keep favorite places handy for faster access.", icon: MapPinned },
      { title: "Simple Search", desc: "Find locations with a clear, user-friendly search flow.", icon: Search },
      { title: "Lightweight UI", desc: "Fast screens make route discovery simple and smooth.", icon: Smartphone },
      { title: "Customizable Design", desc: "Adapt icons, colors, and screens to your brand needs.", icon: SlidersHorizontal },
      { title: "Mobile Ready", desc: "Built for convenient use on modern mobile devices.", icon: Navigation },
    ],
    whyTitle: "Why Choose Path Finder?",
    whyImage: "/images/products/path-finder/why.png",
    whyImageMaxWidth: "max-w-xs",
    whyChecklist: [
      { title: "Easy to Use", desc: "A clean route-focused flow keeps the experience simple." },
      { title: "Fast to Customize", desc: "Use it as a starting point for location-based apps." },
      { title: "Practical for Travel", desc: "Useful for transport, delivery, and everyday navigation ideas." },
      { title: "Compact and Lightweight", desc: "Small screens and simple structure make it easy to maintain." },
    ],
    ctaQuestion: "You want to explore this App?",
    ctaLabel: "Schedule a Call",
  },
  "auto-pilot": {
    heroTitle: "Auto Pilot - Your Fleet Maintenance",
    heroHighlight: "Assistant",
    heroDesc:
      "Auto Pilot streamlines maintenance operations end-to-end-vehicle registration, service scheduling, job card management, and spare-parts tracking. See fleet health at a glance, cut manual work, and keep service history clean for faster decisions.",
    heroImage: "/images/products/auto-pilot/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Vehicle Registry", desc: "Record vehicle and technician info, VIN/plate, mileage, and assignments-everything in one place.", icon: CarIcon },
      { title: "Smart Service Scheduling", desc: "Plan preventive and corrective service by mileage, date, or checklist to avoid surprises.", icon: Timer },
      { title: "Job Card Management", desc: "Create work orders with tasks, labor, parts, costs, and status until approval or closure.", icon: ClipboardList },
      { title: "Spare Parts & Inventory", desc: "Monitor stock, reorder levels, and usage per job to reduce delays in workflow.", icon: PackageCheck },
      { title: "Fleet Health & History", desc: "See service timelines, costs, and downtime per vehicle; compare trends across the fleet.", icon: History },
      { title: "Notifications & Reminders", desc: "Auto-alerts for due services, approvals, warranty expiry, and low inventory critical timing.", icon: BellIcon },
    ],
    whyTitle: "Why Choose Auto Pilot?",
    whyImage: "/images/products/auto-pilot/why.png",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: [
      { title: "Fleet Visibility", desc: "Get status and service views of vehicle issues, usage, and costs to drive smarter maintenance decisions." },
      { title: "Faster Turnarounds", desc: "Automation reduces manual tasks, accelerates approvals and scheduling, and cuts downtime across workshops and depots." },
      { title: "Accurate Records", desc: "Generate precise job cards and service histories with timestamps and checklists, improving accountability and compliance." },
      { title: "Proven Stack", desc: "Built on NestJS, Prisma, and MySQL for reliability, performance, and maintainable integrations your team needs." },
      { title: "Secure & Audit-Ready", desc: "Simple deployment with role permissions, encryption, and audit logs keeps data safe and inspections effortless." },
    ],
    ctaQuestion: "You want to explore this App?",
    ctaLabel: "Schedule a Call",
  },
  "bone-memorization": {
    heroTitle: "Bone Memorization - Your Anatomy Study",
    heroHighlight: "Assistant",
    heroDesc:
      "Bone Memorization lets you look at, play with, and learn the bones of the human body using simple, visual cards. Built for iOS and Android with Objective-C and Android Java, it helps you memorize bones through three menus: look at the cards, play picture matching, and find them from the list.",
    heroImage: "/images/products/bone-memorization/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Full-Body Bone Cards", desc: "Explore bones from head to toe with photos, upper limbs, and lower limbs with clear titles and helpful descriptions.", icon: BoneIcon },
      { title: "Interactive Anatomy Views", desc: "Rotate, zoom, and pan simplified bone models/cards to study different related bones and regions for faster, focused learning.", icon: Eye },
      { title: "Picture Matching Game", desc: "Strengthen memory by matching bone images and names; timed rounds and instant feedback make practice fun and effective.", icon: ImageIcon },
      { title: "Find From List", desc: "Browse organized lists by region and bone type; tap to reveal details, landmarks, and related cards for quick revision.", icon: ClipboardList },
      { title: "Smart Search & Filters", desc: "Search by bone name or region, and filter by side or function to locate the right card instantly.", icon: Search },
      { title: "Progress & Review", desc: "Track practice results, mark favorites, and redo review tough cards to improve recall over sessions.", icon: WorkflowIcon },
    ],
    whyTitle: "Why Choose Bone Memorization?",
    whyImage: "/images/products/bone-memorization/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: anatomyChecklist("Memorization That Works"),
    ctaQuestion: "You want to explore the solution?",
    ctaLabel: "Schedule a Call",
  },
  "bones-in-3d": {
    heroTitle: "Bones in 3D - Your 3D Fracture Learning",
    heroHighlight: "Assistant",
    heroDesc:
      "Bones in 3D is an educational app that shows fractures and dislocations using detailed 3D CC models and animations. Built with Unity3D for iOS and Android, it helps learners visualize injury mechanisms across upper and lower limbs in a clear, interactive way.",
    heroImage: "/images/products/bones-3d/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "3D Fracture Models", desc: "Explore realistic bone breaks in rotatable 3D, with clear geometry that highlights displacement, angulation, and comminution for better understanding.", icon: Box },
      { title: "Dislocation Animations", desc: "Watch step-by-step dislocation sequences that demonstrate joint misalignment, reduction concepts, and movement constraints in a simple, visual format.", icon: BoneIcon },
      { title: "Upper & Lower Limb Library", desc: "Review detailed modules for shoulder, elbow, wrist, hand, hip, knee, ankle, and foot-organized for quick access during study sessions.", icon: ArrowUpRightIcon },
      { title: "Interactive Controls", desc: "Rotate, zoom, and pan models; toggle layers to see bones, joints, and fragments' positions to focus on key injury views.", icon: SlidersHorizontal },
      { title: "Anatomical Labels", desc: "Tap labels to learn landmarks, joint surfaces, and fracture lines; build a stronger simplified and detailed view of different learning levels.", icon: Tag },
      { title: "Study Mode & Notes", desc: "Use guided explanations, bookmarks, and brief quizzes to reinforce concepts over practical notes tied to specific models and animations.", icon: BookOpenIcon },
    ],
    whyTitle: "Why Choose Bones in 3D?",
    whyImage: "/images/products/bones-3d/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: anatomyChecklist("Curriculum-Ready"),
    ctaQuestion: "You want to explore the solution?",
    ctaLabel: "Schedule a Call",
  },
  "fractures-and-dislocations": {
    heroTitle: "Fractures and Dislocations - Your 3D",
    heroHighlight: "Musculoskeletal Assistant",
    heroDesc:
      "Fractures and Dislocations offers complete coverage from the bones of the head to the bones of the trunk, upper, and lower limbs. Built with Unity3D for iOS and Android, it lets you rotate, zoom, and move freely in 3D to observe bones and bone parts with clear labels.",
    heroImage: "/images/products/bone-fractures/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Full-Body Skeleton Atlas", desc: "Explore the whole skeleton: skull, spine, rib cage, pelvis, upper and lower limbs organized by region for quick, structured learning.", icon: BoneIcon },
      { title: "Free 3D Controls", desc: "Rotate, zoom, and pan with smooth gestures to inspect bone surfaces, joints, and views in the app for clear orientation.", icon: Box },
      { title: "Bone Parts & Landmarks", desc: "Highlight individual bone parts and anatomical landmarks: processes, fossae, condyles, shafts with concise labels and tooltips.", icon: BoneIcon },
      { title: "Joints & Alignment Views", desc: "Visualize joint surfaces and spatial relationships; understand how bones fit together for alignment and movement.", icon: Eye },
      { title: "Region Filters & Search", desc: "Filter by body region, bone, or side; jump right to what you need to support your study in the shortest time possible.", icon: Search },
      { title: "Study Tools", desc: "Add notes and bookmarks, capture snapshots, and use brief flashcards or quizzes to reinforce key concepts during study.", icon: BookOpenIcon },
    ],
    whyTitle: "Why Choose Fractures and Dislocations?",
    whyImage: "/images/products/bone-fractures/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: anatomyChecklist("Curriculum-Ready"),
    ctaQuestion: "You want to explore the solution?",
    ctaLabel: "Schedule a Call",
  },
  "muscle-memorization": {
    heroTitle: "Muscle Memorization - Your Anatomy Study",
    heroHighlight: "Assistant",
    heroDesc:
      "Muscle Memorization lets you look at, play with, and learn the muscles of the whole body through simple, visual cards. Built for iOS and Android with Objective-C and Android Java, it helps you memorize muscles using three menus: look at the cards, play picture matching, and find them from the list.",
    heroImage: "/images/products/muscle-memorization/hero.webp",
    heroImageMaxWidth: "max-w-md",
    featuresTitle: "Key Features",
    features: [
      { title: "Full-Body Muscle Cards", desc: "Explore muscles from head to trunk, upper limbs, and lower limbs with clear card layouts, clear names, and concise descriptions.", icon: BoneIcon },
      { title: "Interactive Anatomy Views", desc: "Rotate, zoom, and pan simplified muscle models/cards to study related muscles and functional groups for faster learning.", icon: Eye },
      { title: "Picture Matching Game", desc: "Strengthen memory by matching muscle images and names; timed rounds and instant feedback make practice engaging and effective.", icon: ImageIcon },
      { title: "Find From List", desc: "Browse organized lists by region and category; tap to reveal details, landmarks, and related cards for quick revision.", icon: ClipboardList },
      { title: "Smart Search & Filters", desc: "Search by muscle name or region and filter by function to locate the right card instantly.", icon: Search },
      { title: "Progress & Review", desc: "Track practice results, mark favorites, and redo review tough cards to improve recall over sessions.", icon: WorkflowIcon },
    ],
    whyTitle: "Why Choose Muscle Memorization?",
    whyImage: "/images/products/muscle-memorization/why.webp",
    whyImageMaxWidth: "max-w-md",
    whyChecklist: anatomyChecklist("Memorization That Works"),
    ctaQuestion: "You want to explore the solution?",
    ctaLabel: "Schedule a Call",
  },
}

export function generateStaticParams() {
  return Object.keys(content).map((slug) => ({ slug }))
}

function ProductHero({ title, highlight, description, image, imageMaxWidth }: { title: string; highlight: string; description: string; image: string; imageMaxWidth?: string }) {
  return (
    <section className="relative overflow-hidden px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
          {title} <span className="text-white">{highlight}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
      <div className={`mx-auto mt-10 ${imageMaxWidth ?? "max-w-5xl"}`}>
        <div className="relative overflow-hidden rounded-2xl bg-card/40 p-4">
          <Image src={image} alt="App preview" width={1024} height={640} className="h-auto w-full rounded-xl object-contain" />
        </div>
      </div>
    </section>
  )
}

function FeaturesGrid({ title, items }: { title: string; items: FeatureItem[] }) {
  const gridClass = items.length === 6 ? "lg:grid-cols-3" : "lg:grid-cols-5"
  const cardHeight = items.length === 6 ? "min-h-32" : "min-h-65"

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        <div className={`mt-10 grid gap-5 sm:grid-cols-2 ${gridClass}`}>
          {items.map((item) => {
            const Icon = item.icon
            return (
              <TiltCard key={item.title} intensity={10} className="rounded-2xl h-full">
                <div
                  className={`card-glow flex h-full ${cardHeight} flex-col items-center rounded-2xl border-2 px-5 py-8 text-center transition-all duration-300 ${
                    item.featured
                      ? "border-white/60 bg-primary text-white"
                      : "border-white/60 bg-card/40 hover:border-primary/45 hover:shadow-[0_16px_50px_-20px_rgba(41,179,255,0.45)]"
                  }`}
                >
                  <Icon size={36} className={item.featured ? "text-white" : "text-foreground"} />
                  <p className="mt-4 text-sm font-bold sm:text-base">{item.title}</p>
                  <p className={`mt-2 text-xs ${item.featured ? "text-white/85" : "text-muted-foreground"}`}>{item.desc}</p>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhySection({ title, image, image2, items, imageMaxWidth }: { title: string; image: string; image2?: string; items: ChecklistItem[]; imageMaxWidth?: string }) {
  const imageBlock = (
    <div className={`relative mx-auto overflow-hidden rounded-2xl bg-card/40 p-3 ${imageMaxWidth ?? "max-w-none"}`}>
      <Image src={image} alt="App highlights" width={1024} height={640} className="h-auto w-full rounded-xl object-contain" />
    </div>
  )

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {title && <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>}
        {image2 && items.length === 0 ? (
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {imageBlock}
            <div className={`relative mx-auto overflow-hidden rounded-2xl bg-card/40 p-3 ${imageMaxWidth ?? "max-w-none"}`}>
              <Image src={image2} alt="App highlights" width={1024} height={640} className="h-auto w-full rounded-xl object-contain" />
            </div>
          </div>
        ) : (
        <div className={`${title ? "mt-10" : ""} grid gap-10 lg:grid-cols-[1.2fr_1fr]`}>
          {imageBlock}
          <div className="space-y-4">
            {items.map((item) => (
              <TiltCard key={item.title} intensity={8} className="rounded-xl">
                <div className="card-glow flex items-start gap-3 rounded-xl border-2 border-white/60 bg-card/40 px-4 py-4 transition-all duration-300 hover:border-primary/45 hover:shadow-[0_16px_50px_-20px_rgba(41,179,255,0.45)]">
                  <SquareCheckBig size={24} className="mt-0.5 shrink-0 text-foreground" />
                  <div>
                    <span className="text-sm font-bold text-foreground">{item.title}</span>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = content[slug]
  if (!data) return notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <ProductHero title={data.heroTitle} highlight={data.heroHighlight} description={data.heroDesc} image={data.heroImage} imageMaxWidth={data.heroImageMaxWidth} />
        <FeaturesGrid title={data.featuresTitle} items={data.features} />
        <WhySection title={data.whyTitle} image={data.whyImage} image2={data.whyImage2} items={data.whyChecklist} imageMaxWidth={data.whyImageMaxWidth} />
        <ServiceCta title={data.ctaQuestion} cta={data.ctaLabel} />
      </main>
      <SiteFooter />
    </>
  )
}
