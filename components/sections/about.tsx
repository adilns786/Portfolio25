"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 md:px-8">
      <motion.p
        className="mb-6 font-display text-sm uppercase tracking-[0.28em] opacity-70"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Journey
      </motion.p>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <motion.div
          className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-sm backdrop-blur glass"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://picsum.photos/800/800?random=11"
            alt="Aadil portrait"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-balance text-3xl md:text-4xl">
            Building AI-driven systems & digital experiences
          </h2>
          <p className="mt-4 leading-relaxed opacity-90">
            I am a software engineer focused on turning ideas into robust, scalable products. I blend systems thinking,
            user-centered design, and reliable engineering to deliver immersive digital experiences.
          </p>
          <p className="mt-3 leading-relaxed opacity-90">
            I love crafting performant interfaces, thoughtful APIs, and intelligent automation.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center rounded-full border border-border/60 bg-card/70 px-5 py-2.5 backdrop-blur hover:bg-card glow transition-colors"
            data-cursor="hover"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
