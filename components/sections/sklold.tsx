"use client"

import { motion } from "framer-motion"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiPython, SiFlask, SiNodedotjs } from "react-icons/si"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const skills = [
  { name: "JavaScript", icon: SiJavascript, level: "Expert" },
  { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
  { name: "React", icon: SiReact, level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
  { name: "Python", icon: SiPython, level: "Advanced" },
  { name: "Flask", icon: SiFlask, level: "Intermediate" },
  { name: "Node.js", icon: SiNodedotjs, level: "Advanced" },
]

function OLD() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <motion.p
        className="mb-6 font-display text-sm uppercase tracking-[0.28em] opacity-70"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Arsenal
      </motion.p>
      <TooltipProvider>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {skills.map((s) => {
            const Icon = s.icon as any
            return (
              <Tooltip key={s.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    className="group flex flex-col items-center rounded-xl border border-border/60 bg-card/70 p-5 text-center backdrop-blur hover:bg-card glow transition-colors"
                    whileHover={{ y: -3 }}
                    data-cursor="hover"
                  >
                    <Icon className="h-8 w-8 opacity-90 group-hover:opacity-100" />
                    <div className="mt-2 text-sm font-medium">{s.name}</div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass">
                  <p>{s.level}</p>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </TooltipProvider>
    </section>
  )
}
