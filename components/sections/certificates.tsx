"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const certs = [
  { title: "Google Cloud Fundamentals", img: "https://picsum.photos/600/400?random=31" },
  { title: "DeepLearning.AI – Machine Learning Specialization", img: "https://picsum.photos/600/400?random=32" },
  { title: "AWS Educate Program", img: "https://picsum.photos/600/400?random=33" },
]

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <motion.p
        className="mb-6 font-display text-sm uppercase tracking-[0.28em] opacity-70"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Achievements
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div key={i} whileHover={{ y: -4, rotate: -0.5 }} className="group">
            <Card className="glass glow overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={c.img || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg">{c.title}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
