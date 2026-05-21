import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const products = [
  { title: "Expense Tracker", image: "/images/products/Expense-Tracker-240x300.webp", description: "Track your daily expenses easily with this intuitive system, designed to help you manage finances and optimize your overall budget." },
  { title: "E-commerce", image: "/images/products/Ecommerce-300x300.webp", description: "Boost your online sales with our powerful platform, featuring seamless checkout experiences and comprehensive product management for growing digital businesses." },
  { title: "Ride Share", image: "/images/products/RideShare-240x300.png", description: "Connect drivers and passengers efficiently using real-time tracking, ensuring secure payments, seamless navigation, and reliable transportation across the entire city." },
  { title: "Asset Management", image: "/images/products/Asset-Management-300x300.webp", description: "Keep accurate records of your corporate assets, track depreciation over time, and streamline inventory audits with our comprehensive management solution." },
  { title: "Task Management", image: "/images/products/Task-Management-300x300.webp", description: "Organize your team workflow effortlessly with intuitive boards, automated reminders, and real-time collaboration tools that boost productivity and project success." },
  { title: "School Management System", image: "/images/products/School-management-300x300.webp", description: "Simplify educational administration with integrated modules for attendance, grading, student records, and seamless communication between teachers, parents, and administrative staff." },
  { title: "Treal", image: "/images/products/Treal-300x300.webp", description: "Experience a unified digital workspace that brings your teams together, centralizing communications and optimizing daily operational workflows for maximum efficiency." },
  { title: "Car Movement on Map", image: "/images/products/Car-Movement-On-Map-240x300.webp", description: "Monitor vehicle fleets in real time with high-precision GPS integration, route optimization, and detailed analytics for advanced logistical fleet management." },
  { title: "HRM", image: "/images/products/HRM-300x300.webp", description: "Automate your human resources operations, from seamless onboarding and payroll processing to performance tracking and employee engagement within your company." },
  { title: "Help Desk", image: "/images/products/HelpDesk-300x300.webp", description: "Deliver exceptional customer support through a centralized ticketing system, featuring automated routing, quick responses, and comprehensive service performance analytics dashboards." },
  { title: "Inventory Pro", image: "/images/products/Inventory-Pro-300x300.webp", description: "Gain total control over your stock levels with automated alerts, seamless barcode scanning, and intelligent supply chain optimization and reporting." },
  { title: "QRBar Scanner", image: "/images/products/QRBar-240x300.png", description: "Instantly scan and process QR and barcodes with rapid precision, enabling efficient data retrieval and seamless integration into existing workflows." },
  { title: "OMS", image: "/images/products/OMS-300x300.webp", description: "Streamline your order management processes from initial placement to final delivery, ensuring total accuracy, real-time tracking, and optimal customer satisfaction." },
  { title: "Back Office AI", image: "/images/products/BackOffice-300x300.webp", description: "Revolutionize your administrative tasks with intelligent automation, reducing manual data entry and accelerating internal processes through advanced artificial intelligence algorithms." },
  { title: "Creative Memo", image: "/images/products/Creative-Memo-240x300.webp", description: "Capture your innovative ideas instantly with our digital notepad, offering rich formatting, seamless cloud syncing, and collaborative sharing for teams." },
  { title: "Secure Vault", image: "/images/products/Vault-240x300.png", description: "Safeguard your most sensitive corporate documents with military-grade encryption, strict access controls, and comprehensive audit logs for ultimate data protection." },
  { title: "Path Finder", image: "/images/products/Path-Finder-240x300.png", description: "Navigate complex indoor and outdoor environments effortlessly with an intelligent routing algorithm, offering real-time directions and dynamic obstacle avoidance tracking." },
  { title: "Car Service", image: "/images/products/Car-Service-240x300.png", description: "Manage your automotive repair shop efficiently with integrated scheduling, parts inventory tracking, and seamless customer communication for reliable service delivery." },
  { title: "Bone Memorization", image: "/images/products/Bone-Memorization-240x300.webp", description: "Enhance your medical studies with an interactive learning tool, specifically designed to help students master human skeletal anatomy with precision." },
  { title: "3D Bone Memorization", image: "/images/products/3D-Bone-Memorization-240x300.webp", description: "Immerse yourself in detailed 3D anatomical models, allowing medical students to rotate, zoom, and study the human skeleton with clarity." },
  { title: "Bone Fractures", image: "/images/products/Bone-Fractures-240x300.webp", description: "Analyze complex skeletal injuries through comprehensive visual guides, helping medical professionals accurately diagnose and plan effective treatments for various fractures." },
  { title: "Muscle Memorization", image: "/images/products/Muscle-Memorization-240x300.webp", description: "Master the complexities of the human muscular system with engaging quizzes, detailed diagrams, and interactive study modules tailored for students." },
]

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-5 pb-24 pt-20 sm:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Our Products</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Smart, secure, and scalable digital solutions for modern organizations.
            </p>
          </div>

          <div className="mt-16 mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Hero Products</h2>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="group card-glow rounded-2xl border border-border/60 bg-card/40 p-6"
              >
                <div className="air-float-wrap relative flex h-48 items-center justify-center rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={320}
                    height={220}
                    className="h-50 w-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-semibold text-foreground sm:text-base">
                  {product.title}
                </p>
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="mt-3 text-center text-sm text-gray-400">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
