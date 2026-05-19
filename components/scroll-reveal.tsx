"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 28,
  once = true,
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "section" | "span" | "li" | "article"
  y?: number
  once?: boolean
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.1,
  as = "div",
  once = true,
}: {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
  as?: "div" | "ul" | "ol" | "section"
  once?: boolean
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren, delayChildren },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({
  children,
  className,
  as = "div",
  y = 28,
}: {
  children: ReactNode
  className?: string
  as?: "div" | "li" | "article" | "section" | "span"
  y?: number
}) {
  const MotionTag = motion[as] as typeof motion.div
  const v: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }
  return (
    <MotionTag className={className} variants={v}>
      {children}
    </MotionTag>
  )
}

export { fadeUp }
