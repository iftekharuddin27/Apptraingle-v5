/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/all-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/email-collaboration-solutions",
        destination: "/services/email-collaboration",
        permanent: true,
      },
      {
        source: "/case-study-guest-management-system",
        destination: "/case-studies/guest-management-system",
        permanent: true,
      },
      {
        source: "/software-licensing-reselling",
        destination: "/services/software-licensing",
        permanent: true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
