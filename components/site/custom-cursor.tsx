"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const haloRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let x = 0,
      y = 0
    let tx = 0,
      ty = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top = `${y}px`
      }
    }

    let raf = 0
    const loop = () => {
      tx += (x - tx) * 0.15
      ty += (y - ty) * 0.15
      if (haloRef.current) {
        haloRef.current.style.left = `${tx}px`
        haloRef.current.style.top = `${ty}px`
      }
      raf = requestAnimationFrame(loop)
    }

    const enlarge = () => {
      if (haloRef.current) {
        haloRef.current.style.width = "60px"
        haloRef.current.style.height = "60px"
        haloRef.current.style.opacity = "0.9"
      }
    }
    const shrink = () => {
      if (haloRef.current) {
        haloRef.current.style.width = "36px"
        haloRef.current.style.height = "36px"
        haloRef.current.style.opacity = "1"
      }
    }

    window.addEventListener("mousemove", onMove)
    document.addEventListener("pointerover", (e) => {
      const el = e.target as HTMLElement
      if (el.closest('a,button,[role="button"],[data-cursor="hover"]')) enlarge()
      else shrink()
    })

    loop()
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="cursor-ring">
      <div ref={haloRef} className="cursor-halo" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  )
}
