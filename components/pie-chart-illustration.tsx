"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const PIE_CENTER = { x: 170, y: 200 }

export function PieChartIllustration({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = containerRef.current
      if (!root) return

      const character = root.querySelector<SVGGElement>(".character-group")
      const slices = root.querySelectorAll<SVGPathElement>(".pie-slice")
      const lines = root.querySelectorAll<SVGPathElement>(".data-line")
      const boxes = root.querySelectorAll<SVGGElement>(".text-box")

      // anchor every slice's scale origin to the shared pie center, not its own bounding box
      slices.forEach((slice) => {
        const box = slice.getBBox()
        slice.style.transformBox = "fill-box"
        slice.style.transformOrigin = `${PIE_CENTER.x - box.x}px ${PIE_CENTER.y - box.y}px`
      })

      lines.forEach((line) => {
        const length = line.getTotalLength()
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
      })

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.1 })

      tl.fromTo(character, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: "power1.inOut" })
        .fromTo(
          slices,
          { scale: 0 },
          { scale: 1, duration: 0.55, stagger: 0.15, ease: "power3.out" },
          "-=0.2",
        )
        .to(lines, { strokeDashoffset: 0, duration: 0.9, stagger: 0.3, ease: "power1.inOut" }, "-=0.1")
        .fromTo(
          boxes,
          { opacity: 0 },
          { opacity: 1, duration: 0.45, stagger: 0.2, ease: "power1.inOut" },
          "-=0.35",
        )
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className={className ?? "w-full max-w-xl"}>
      <svg
        viewBox="0 0 620 420"
        role="img"
        aria-label="Illustration of a person presenting pie chart data"
        className="h-auto w-full"
      >
        <path className="data-line" d="M255,150 L300,150 L320,75" fill="none" stroke="#9aa0b5" strokeWidth="2" strokeLinecap="round" />
        <path className="data-line" d="M230,260 L300,260 L320,305" fill="none" stroke="#9aa0b5" strokeWidth="2" strokeLinecap="round" />

        <path className="pie-slice" d="M170,200 L170,90 A110,110 0 0,1 225,295.26 Z" fill="#426be4" />
        <path className="pie-slice" d="M170,200 L225,295.26 A110,110 0 0,1 99.29,284.26 Z" fill="#f2f2f2" />
        <path className="pie-slice" d="M170,200 L99.29,284.26 A110,110 0 0,1 85.74,129.29 Z" fill="#d6d6e3" />
        <path className="pie-slice" d="M170,200 L85.74,129.29 A110,110 0 0,1 170,90 Z" fill="#f2f2f2" />

        <g className="text-box">
          <rect x="320" y="40" width="160" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
          <rect x="336" y="58" width="128" height="6" rx="3" fill="#426be4" />
          <rect x="336" y="74" width="128" height="6" rx="3" fill="#426be4" />
          <rect x="336" y="90" width="90" height="6" rx="3" fill="#426be4" />
        </g>

        <g className="text-box">
          <rect x="320" y="270" width="160" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
          <rect x="336" y="288" width="128" height="6" rx="3" fill="#d6d6e3" />
          <rect x="336" y="304" width="128" height="6" rx="3" fill="#d6d6e3" />
          <rect x="336" y="320" width="90" height="6" rx="3" fill="#d6d6e3" />
        </g>

        <g className="character-group">
          <path d="M500,400 L520,205 L536,205 L548,400 Z" fill="#2f2e41" />
          <path d="M548,400 L568,205 L584,205 L596,400 Z" fill="#2f2e41" />
          <path
            d="M505,210 C505,170 520,140 552,140 C584,140 599,170 599,210 L599,255 C599,265 591,272 581,272 L523,272 C513,272 505,265 505,255 Z"
            fill="#3f3d56"
          />
          <path d="M478,295 C478,280 492,272 505,272 L523,272 L523,300 L490,308 C483,310 478,303 478,295 Z" fill="#3f3d56" />
          <circle cx="490" cy="304" r="9" fill="#ffb9b9" />
          <circle cx="552" cy="118" r="28" fill="#ffb9b9" />
          <path
            d="M524,108 C524,90 536,76 552,76 C568,76 580,90 580,108 C580,98 568,92 552,94 C540,95 528,100 524,108 Z"
            fill="#3f3d56"
          />
        </g>
      </svg>
    </div>
  )
}
