"use client"

export default function AmbientGlows() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="ambient-fog absolute -inset-24" />
    </div>
  )
}
