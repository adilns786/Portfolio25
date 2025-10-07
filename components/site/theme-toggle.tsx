"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const d = stored ? stored === "dark" : prefersDark
    setDark(d)
    document.documentElement.classList.toggle("dark", d)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-2 text-sm backdrop-blur hover:bg-card glow transition-colors"
      onClick={toggle}
      data-cursor="hover"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden md:inline">{dark ? "Light" : "Dark"}</span>
    </button>
  )
}
