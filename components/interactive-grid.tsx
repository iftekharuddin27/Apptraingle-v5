"use client"

import { MouseEvent } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

export function InteractiveGrid() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div 
      className="absolute inset-0 overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* Base faint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(147,165,191,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Hover reveal grid (Cyan) */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(rgba(41,179,255,0.6)_1px,transparent_1px)] [background-size:32px_32px] opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          maskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
        }}
      />
    </div>
  )
}