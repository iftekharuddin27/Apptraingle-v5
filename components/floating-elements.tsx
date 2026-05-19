"use client"

import { motion } from "framer-motion"

type Shape = {
  size: number
  top: string
  left: string
  delay: number
  duration: number
  blur: number
  opacity: number
  color?: string
  rotate?: number
}

const defaultShapes: Shape[] = [
  { size: 120, top: "8%", left: "6%", delay: 0, duration: 14, blur: 28, opacity: 0.7, rotate: 12 },
  { size: 80, top: "22%", left: "82%", delay: 1.2, duration: 16, blur: 18, opacity: 0.6, rotate: -8 },
  { size: 160, top: "62%", left: "10%", delay: 0.6, duration: 18, blur: 36, opacity: 0.55, rotate: 18 },
  { size: 100, top: "70%", left: "78%", delay: 2, duration: 15, blur: 26, opacity: 0.65, rotate: -16 },
  { size: 60, top: "40%", left: "48%", delay: 1.6, duration: 12, blur: 14, opacity: 0.5, rotate: 24 },
  { size: 90, top: "12%", left: "55%", delay: 0.8, duration: 17, blur: 22, opacity: 0.6, rotate: -22 },
  { size: 110, top: "28%", left: "18%", delay: 0.4, duration: 13, blur: 24, opacity: 0.6, rotate: 8 },
  { size: 70, top: "58%", left: "68%", delay: 1.1, duration: 14, blur: 18, opacity: 0.55, rotate: -10 },
  { size: 140, top: "78%", left: "32%", delay: 1.8, duration: 19, blur: 32, opacity: 0.6, rotate: 14 },
]

/**
 * Reusable decorative background layer with continuously floating, glowing
 * isometric-style blocks and soft particles. Drop into any section that has
 * `relative overflow-hidden` set on a parent.
 */
export function FloatingElements({
  shapes = defaultShapes,
  variant = "blocks",
}: {
  shapes?: Shape[]
  variant?: "blocks" | "particles" | "mixed"
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Breathing radial glow */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(41,179,255,0.35), rgba(41,179,255,0.08) 50%, transparent 75%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] bottom-[15%] h-[380px] w-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(120,200,255,0.28), rgba(120,200,255,0.06) 55%, transparent 80%)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Floating blocks */}
      {(variant === "blocks" || variant === "mixed") &&
        shapes.map((s, i) => (
          <motion.div
            key={`block-${i}`}
            className="absolute"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
            }}
            initial={{ y: 0, rotate: s.rotate ?? 0 }}
            animate={{
              y: [0, -24, 0, 16, 0],
              x: [0, 12, 0, -10, 0],
              rotate: [(s.rotate ?? 0) - 4, (s.rotate ?? 0) + 6, (s.rotate ?? 0) - 4],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          >
            <div
              className="h-full w-full rounded-2xl border border-primary/40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(41,179,255,0.3), rgba(120,200,255,0.1) 60%, transparent)",
                boxShadow:
                  "0 0 55px rgba(41,179,255,0.35), inset 0 0 50px rgba(41,179,255,0.12)",
                opacity: s.opacity,
                filter: `blur(${Math.max(0, s.blur - 14)}px)`,
              }}
            />
          </motion.div>
        ))}

      {/* Particles */}
      {(variant === "particles" || variant === "mixed") &&
        Array.from({ length: 14 }).map((_, i) => {
          const top = `${(i * 37) % 100}%`
          const left = `${(i * 53) % 100}%`
          const size = 4 + ((i * 3) % 6)
          return (
            <motion.span
              key={`p-${i}`}
              className="absolute rounded-full bg-primary/60"
              style={{
                top,
                left,
                width: size,
                height: size,
                boxShadow: "0 0 12px rgba(41,179,255,0.7)",
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.9, 0.2],
              }}
              transition={{
                duration: 6 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 7) * 0.4,
              }}
            />
          )
        })}
    </div>
  )
}

export default FloatingElements
