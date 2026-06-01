"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

type FloatingImageProps = {
  src: string
  alt: string
  className?: string
  rounded?: string
  priority?: boolean
  floating?: boolean
  glow?: boolean
  transparent?: boolean
  fit?: "cover" | "contain"
  tilt?: boolean
}

/**
 * Premium floating image: continuous breathing float + mouse-tracked 3D tilt,
 * inner glare, ambient glow halo. Designed to feel like the image is
 * suspended in air.
 */
export function FloatingImage({
  src,
  alt,
  className = "",
  rounded = "rounded-3xl",
  priority,
  floating = true,
  glow = true,
  transparent = false,
  fit = "cover",
  tilt = true,
}: FloatingImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const rx = useSpring(useTransform(my, [0, 1], [10, -10]), {
    stiffness: 120,
    damping: 18,
  })
  const ry = useSpring(useTransform(mx, [0, 1], [-14, 14]), {
    stiffness: 120,
    damping: 18,
  })

  const sx = useTransform(mx, (v) => `${v * 100}%`)
  const sy = useTransform(my, (v) => `${v * 100}%`)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tilt) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    if (!tilt) return
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <div className={`relative ${className}`} style={{ perspective: 1200 }}>
      {/* Floating wrapper (continuous up/down + tilt parallax) */}
      <motion.div
        animate={floating ? { y: [0, -16, 0, 10, 0] } : undefined}
        transition={floating ? { duration: 9, repeat: Infinity, ease: "easeInOut" } : undefined}
        className="relative"
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{
            rotateX: tilt ? rx : 0,
            rotateY: tilt ? ry : 0,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden ${rounded} ${
            transparent
              ? "bg-transparent"
              : "border border-primary/25 bg-card"
          } ${glow && !transparent ? "shadow-[0_30px_120px_-30px_rgba(41,179,255,0.6)]" : "shadow-none"}`}
        >
          <div className="relative aspect-16/10 w-full">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              data-floating="true"
              className={fit === "contain" ? "object-contain" : "object-cover"}
              sizes="(max-width: 1024px) 90vw, 60vw"
            />
            {/* Sheen */}
            {glow && !transparent && (
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 mix-blend-overlay"
                style={{
                  background: useTransform(
                    [sx, sy] as any,
                    ([x, y]: string[]) =>
                      `radial-gradient(360px circle at ${x} ${y}, rgba(255,255,255,0.32), transparent 55%)`,
                  ),
                }}
              />
            )}
            {glow && !transparent && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit]"
                style={{ boxShadow: "inset 0 0 80px rgba(41,179,255,0.25)" }}
              />
            )}
          </div>

        </motion.div>
      </motion.div>
    </div>
  )
}

export default FloatingImage
