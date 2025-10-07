"use client"

import type React from "react"
import { useEffect, useRef } from "react"

type Props = React.PropsWithChildren<{
  strength?: number // px max translate
  asChild?: boolean
  className?: string
}>

export default function Magnetic({ children, strength = 12, asChild, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const mx = e.clientX - (rect.left + rect.width / 2)
      const my = e.clientY - (rect.top + rect.height / 2)
      const dx = (mx / (rect.width / 2)) * strength
      const dy = (my / (rect.height / 2)) * strength
      targetX = dx
      targetY = dy
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
    }

    const loop = () => {
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [strength])

  if (asChild) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }
  return (
    <div ref={ref} className={`magnetic ${className || ""}`} data-cursor="hover">
      {children}
    </div>
  )
}
