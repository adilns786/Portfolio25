import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projectsold"
import Experience from "@/components/sections/experience"
import Certificates from "@/components/sections/certificates"
import Contact from "@/components/sections/contact"

export default function Page() {
  return (
    <main id="top" className="grain">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </main>
  )
}
