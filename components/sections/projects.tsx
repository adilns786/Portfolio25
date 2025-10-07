"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Magnetic from "@/components/site/magnetic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    name: "Shakaar Setu – AI-powered collaboration system",
    img: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d6?q=80&w=1600&auto=format&fit=crop",
    tech: "Next.js, TypeScript, Python, ML",
    summary: "Bringing teams together with AI-assisted workflows.",
  },
  {
    name: "Beach Warrior – Tech for CSR",
    img: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1600&auto=format&fit=crop",
    tech: "React, Flask, Postgres",
    summary: "Community-first platform for coastal cleanup.",
  },
  {
    name: "Cultura – Digital heritage experience",
    img: "https://images.unsplash.com/photo-1460164516190-2b6df92a6549?q=80&w=1600&auto=format&fit=crop",
    tech: "Next.js, Three.js",
    summary: "Immersive interactive experiences for culture.",
  },
  {
    name: "Nivaran – AI-driven IT helpdesk",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    tech: "Next.js, LLM tooling",
    summary: "Faster resolutions with intelligent triage.",
  },
  {
    name: "Sentinel UI Lab",
    img: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop",
    tech: "React, Motion, GSAP",
    summary: "Cinematic interface explorations.",
  },
  {
    name: "Atlas Data Canvas",
    img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop",
    tech: "Next.js, D3",
    summary: "Visual data stories on the web.",
  },
]

const spans = [
  // colSpan, rowSpan (desktop-first, responsive falls back to single)
  { col: "md:col-span-6", row: "md:row-span-2" }, // portrait/tall
  { col: "md:col-span-6", row: "md:row-span-1" }, // wide
  { col: "md:col-span-4", row: "md:row-span-1" },
  { col: "md:col-span-8", row: "md:row-span-2" }, // hero wide
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
        className="grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12"
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
                <Card className="relative h-full w-full overflow-hidden glass glow border-illuminate">
                  <CardContent className="h-full p-0">
                    <div className="relative h-full w-full">
                      <Image
                        src={p.img || "/placeholder.svg"}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      {/* gradient veil for depth */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
                    </div>
                    {/* overlay content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
                      <h3 className="font-display text-lg md:text-xl">{p.name}</h3>
                      <p className="mt-1 text-sm opacity-85">{p.summary}</p>
                      <p className="mt-1 text-xs opacity-70">{p.tech}</p>
                      <div className="mt-3 flex gap-3">
                        <Magnetic strength={10}>
                          <Button size="sm" asChild>
                            <a href="#" target="_blank" rel="noreferrer" data-cursor="hover">
                              View Demo
                            </a>
                          </Button>
                        </Magnetic>
                        <Magnetic strength={10}>
                          <Button size="sm" variant="secondary" asChild>
                            <a href="#" target="_blank" rel="noreferrer" data-cursor="hover">
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
