import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

import Preloader from "@/components/site/preloader"
import CustomCursor from "@/components/site/custom-cursor"
import SmoothScroll from "@/components/site/smooth-scroll"
import AmbientGlows from "@/components/site/ambient-glows"
import ThemeToggle from "@/components/site/theme-toggle"

export const metadata: Metadata = {
  title: "Aadil Shah — Portfolio",
  description: "A cinematic, narrative-driven software engineering portfolio.",
  generator: "v0.app",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={null}>
          <Preloader />
          <CustomCursor />
          <SmoothScroll />
          <AmbientGlows />
          <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-4 py-3 md:px-8">
            <a href="#top" className="font-display text-xl tracking-tight hover:opacity-90 transition-opacity">
              Aadil
            </a>
            <nav className="hidden gap-6 md:flex">
              <a href="#about" className="hover:underline underline-offset-4">
                About
              </a>
              <a href="#skills" className="hover:underline underline-offset-4">
                Skills
              </a>
              <a href="#projects" className="hover:underline underline-offset-4">
                Projects
              </a>
              <a href="#experience" className="hover:underline underline-offset-4">
                Experience
              </a>
              <a href="#certificates" className="hover:underline underline-offset-4">
                Certificates
              </a>
              <a href="#contact" className="hover:underline underline-offset-4">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </header>
          {children}
          <footer className="mt-24 border-t border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
              <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                <p className="text-sm opacity-80">© 2025 Aadil Shah. All rights reserved.</p>
                <div className="flex items-center gap-4 text-sm">
                  <a
                    className="hover:underline underline-offset-4"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="hover:underline underline-offset-4"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a className="hover:underline underline-offset-4" href="mailto:hello@example.com">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
