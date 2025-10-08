"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Magnetic from "@/components/site/magnetic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    name: "Shakaar Setu – AI-powered collaboration system",
    img: "/dummy.png",
    tech: "Next.js, TypeScript, Python, ML",
    summary: "Bringing teams together with AI-assisted workflows.",
  },
  {
    name: "Beach Warrior – Tech for CSR",
    img: "/dummy.png",
    tech: "React, Flask, Postgres",
    summary: "Community-first platform for coastal cleanup.",
  },
  {
    name: "Cultura – Digital heritage experience",
    img: "/dummy.png",
    tech: "Next.js, Three.js",
    summary: "Immersive interactive experiences for culture.",
  },
  {
    name: "Nivaran – AI-driven IT helpdesk",
    img: "/dummy.png",
    tech: "Next.js, LLM tooling",
    summary: "Faster resolutions with intelligent triage.",
  },
  {
    name: "Sentinel UI Lab",
    img: "/dummy.png",
    tech: "React, Motion, GSAP",
    summary: "Cinematic interface explorations.",
  },
  {
    name: "Atlas Data Canvas",
    img: "/dummy.png",
    tech: "Next.js, D3",
    summary: "Visual data stories on the web.",
  },
]

const spans = [
  { col: "md:col-span-6", row: "md:row-span-2" },
  { col: "md:col-span-6", row: "md:row-span-1" },
  { col: "md:col-span-4", row: "md:row-span-1" },
  { col: "md:col-span-8", row: "md:row-span-2" },
  { col: "md:col-span-5", row: "md:row-span-1" },
  { col: "md:col-span-7", row: "md:row-span-1" },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <motion.p
        className="mb-6 font-display text-sm uppercase tracking-[0.28em] opacity-70 text-ambient"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Creations
      </motion.p>

      <div
        className="grid auto-rows-[22rem] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-12"
        style={{ gridAutoFlow: "dense" }}
      >
        {projects.map((p, i) => {
          const span = spans[i % spans.length]
          return (
            <motion.div
              key={p.name}
              className={`group ${span.col} ${span.row}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Magnetic>
                <Card className="relative h-full w-full overflow-hidden rounded-2xl glass glow border-illuminate">
                  <CardContent className="relative h-full p-0">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      {/* Softer overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Overlay text */}
                    <div className="absolute bottom-0 z-10 p-5 text-white">
                      <h3 className="font-display text-lg md:text-xl font-semibold drop-shadow-md">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-200">{p.summary}</p>
                      <p className="mt-1 text-xs text-gray-300">{p.tech}</p>

                      <div className="mt-4 flex gap-3">
                        <Magnetic strength={10}>
                          <Button size="sm" variant="default" asChild>
                            <a href="#" target="_blank" rel="noreferrer">
                              View Demo
                            </a>
                          </Button>
                        </Magnetic>
                        <Magnetic strength={10}>
                          <Button size="sm" variant="secondary" asChild>
                            <a href="#" target="_blank" rel="noreferrer">
                              View Code
                            </a>
                          </Button>
                        </Magnetic>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Magnetic>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
