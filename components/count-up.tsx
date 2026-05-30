"use client"

import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  value: string | number
  className?: string
  duration?: number
}

function parseValue(value: string | number) {
  if (typeof value === "number") {
    return { target: value, suffix: "" }
  }

  const match = value.trim().match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) {
    return { target: 0, suffix: value }
  }

  return {
    target: Number.parseFloat(match[1]),
    suffix: match[2],
  }
}

export function CountUp({ value, className = "", duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const mountedRef = useRef(false)
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)

  const { target, suffix } = parseValue(value)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return

        setHasAnimated(true)
        const startTime = performance.now()
        const startValue = 0

        const animate = (currentTime: number) => {
          if (!mountedRef.current) return

          const progress = Math.min((currentTime - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const currentValue = startValue + (target - startValue) * eased
          const formatted = Number.isInteger(target)
            ? Math.round(currentValue).toLocaleString()
            : currentValue.toFixed(1)

          setDisplayValue(formatted)

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [duration, hasAnimated, target])

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  )
}
