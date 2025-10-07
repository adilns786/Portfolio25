"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

let registered = false
export function useGSAPCore() {
  if (!registered) {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    }
    registered = true
  }
  return gsap
}
export { ScrollTrigger }
