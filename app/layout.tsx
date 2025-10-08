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
          
          {children}
          
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
