"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SendHorizonal } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const form = e.target as HTMLFormElement
      const data = Object.fromEntries(new FormData(form).entries())
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setDone(true)
      form.reset()
    } finally {
      setSending(false)
      setTimeout(() => setDone(false), 2000)
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-4 py-24 text-center md:px-8">
      <motion.p
        className="mb-4 font-display text-sm uppercase tracking-[0.28em] opacity-70"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Connection
      </motion.p>
      <motion.h2
        className="font-display text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {"Let's build something amazing together."}
      </motion.h2>

      <form
        onSubmit={onSubmit}
        className="mx-auto mt-8 grid gap-4 rounded-2xl border border-border/60 bg-card/60 p-6 text-left backdrop-blur glass md:p-8"
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm opacity-80">
            Name
          </label>
          <Input id="name" name="name" required placeholder="John Doe" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm opacity-80">
            Email
          </label>
          <Input id="email" type="email" name="email" required placeholder="john@doe.com" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm opacity-80">
            Message
          </label>
          <Textarea id="message" name="message" required placeholder="Tell me about your idea..." rows={5} />
        </div>
        <div className="flex items-center justify-end gap-3">
          <Button type="submit" disabled={sending} data-cursor="hover" className="inline-flex items-center gap-2">
            <SendHorizonal size={16} className={sending ? "animate-pulse" : ""} />
            {sending ? "Sending..." : done ? "Sent!" : "Send"}
          </Button>
        </div>
      </form>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="ambient-fog absolute -inset-24" />
      </div>
    </section>
  )
}
