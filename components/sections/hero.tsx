"use client"

import { motion } from "framer-motion"
import { useGSAPCore } from "@/lib/gsap"
import Magnetic from "@/components/site/magnetic"

export default function Hero() {
  const gsap = useGSAPCore()

  const scrollToBegin = () => {
    if (typeof window === "undefined") return
    // Use gsap ScrollTo for smooth jump past hero
    gsap.to(window, { duration: 1, scrollTo: "#about", ease: "power2.out" })
  }

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <BackgroundParticles />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.p
          className="mb-3 font-display text-sm tracking-[0.3em] uppercase opacity-75"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          The Beginning
        </motion.p>
        <motion.h1
          className="font-display text-pretty text-4xl md:text-6xl lg:text-7xl text-gradient-animate text-ambient"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {"Hi, I’m Aadil — a Software Engineer crafting ideas into code."}
        </motion.h1>
        <motion.p
          className="mt-3 font-display italic opacity-80"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.28 }}
        >
          {"Where imagination meets reliable engineering."}
        </motion.p>
        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Magnetic>
            <button
              onClick={scrollToBegin}
              className="rounded-full border border-border/60 bg-card/70 px-6 py-3 font-medium tracking-wide backdrop-blur hover:bg-card glow border-illuminate transition-colors"
              data-cursor="hover"
            >
              Scroll to Begin
            </button>
          </Magnetic>
        </motion.div>
      </div>
      <IdleFloat />
    </section>
  )
}

function BackgroundParticles() {
  // simple floating dots using CSS + minimal motion
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-[var(--brand)] opacity-60 blur-[1px] animate-float" />
      <div className="absolute left-2/3 top-1/4 h-2 w-2 rounded-full bg-[var(--brand)] opacity-60 blur-[1px] animate-float-slow" />
      <div className="absolute left-1/2 top-2/3 h-2 w-2 rounded-full bg-[var(--brand-2)] opacity-60 blur-[1px] animate-float" />
    </div>
  )
}

function IdleFloat() {
  return (
    <motion.div
      className="absolute bottom-10 right-8 z-10 rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur glow"
      animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <div className="h-10 w-10 rounded-lg bg-[var(--brand)]/20" />
    </motion.div>
  )
}
