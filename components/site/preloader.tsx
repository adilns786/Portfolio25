"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="relative grid place-items-center rounded-2xl p-8 glass glow"
            initial={{ scale: 0.9, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <span className="font-display text-4xl tracking-tight">A</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
