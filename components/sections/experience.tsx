"use client"

import { motion } from "framer-motion"

const entries = [
  {
    title: "Junior Analyst Intern @ Nomura",
    year: "2025",
    desc: "Worked on software automation tools.",
  },
  {
    title: "Freelance Developer",
    year: "2024",
    desc: "Built full-stack apps with Next.js & Flask.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <motion.p
        className="mb-6 font-display text-sm uppercase tracking-[0.28em] opacity-70"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Forge
      </motion.p>

      <div className="relative">
        <svg className="absolute left-6 top-0 h-full w-px md:left-8" aria-hidden>
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="currentColor" className="opacity-20" />
        </svg>
        <ol className="relative space-y-12">
          {entries.map((e, i) => (
            <li key={i} className="relative pl-12 md:pl-16">
              <motion.span
                className="absolute left-4 top-0 grid h-5 w-5 place-items-center rounded-full border border-border/60 bg-card glow md:left-6"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
              </motion.span>
              <motion.h3
                className="font-display text-xl md:text-2xl"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                {e.title} <span className="opacity-60">({e.year})</span>
              </motion.h3>
              <motion.p
                className="mt-2 leading-relaxed opacity-90"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                {e.desc}
              </motion.p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
