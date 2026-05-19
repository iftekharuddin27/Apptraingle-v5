"use client"

import { useRef, useState, type ReactNode, type CSSProperties } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

type TiltCardProps = {
  children: ReactNode
  className?: string
  intensity?: number
  spotlight?: boolean
  glare?: boolean
  style?: CSSProperties
}

/**
 * Premium 3D mouse-tracked tilt card with cursor spotlight and animated
 * gradient border. Drop any content inside.
 */
export function TiltCard({
  children,
  className = "",
  intensity = 12,
  spotlight = true,
  glare = true,
  style,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const rx = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 20,
  })
  const ry = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 20,
  })

  const sx = useTransform(mx, (v) => `${v * 100}%`)
  const sy = useTransform(my, (v) => `${v * 100}%`)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    mx.set(0.5)
    my.set(0.5)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        ...style,
      }}
      className={`relative ${className}`}
    >
      {/* Animated conic gradient border */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500"
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{
          background: useTransform(
            [mx, my] as any,
            ([x, y]: number[]) =>
              `conic-gradient(from ${x * 360}deg at ${x * 100}% ${y * 100}%, rgba(41,179,255,0.9), rgba(120,200,255,0.4), rgba(41,179,255,0.0) 40%, rgba(41,179,255,0.9))`,
          ),
          padding: 1,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor" as any,
          maskComposite: "exclude" as any,
        }}
      />

      {/* Spotlight that follows the cursor */}
      {spotlight && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{
            background: useTransform(
              [sx, sy] as any,
              ([x, y]: string[]) =>
                `radial-gradient(420px circle at ${x} ${y}, rgba(41,179,255,0.22), transparent 55%)`,
            ),
          }}
        />
      )}

      {/* Glare highlight */}
      {glare && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-300 mix-blend-overlay"
          animate={{ opacity: hovered ? 0.6 : 0 }}
          style={{
            background: useTransform(
              [sx, sy] as any,
              ([x, y]: string[]) =>
                `radial-gradient(220px circle at ${x} ${y}, rgba(255,255,255,0.35), transparent 60%)`,
            ),
          }}
        />
      )}

      <div style={{ transform: "translateZ(0)" }} className="relative h-full">
        {children}
      </div>
    </motion.div>
  )
}

export default TiltCard
