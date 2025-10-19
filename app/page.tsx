import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Certificates from "@/components/sections/certificates"
import Contact from "@/components/sections/contact"
import Hello from "@/components/sections/hello"
import ContactSection from "@/components/sections/footer"
import FAQPage from "@/components/sections/faq"
import FounderProfilePage from "@/components/sections/timeline"
import CaseStudiesPortfolio from "@/components/sections/gallery"
import NavBox from "@/components/sections/navbox"

export default function Page() {
  return (
    <main id="top" className="grain">
      <NavBox />
      <Hero />
      {/* <About /> */}
      {/* <Skills /> */}
      <Projects />
      <FounderProfilePage/>
      <Hello />
      <CaseStudiesPortfolio/>
      <FAQPage/>
      {/* <Experience /> */}
      {/* <Certificates /> */}
      {/* <Contact /> */}
      <ContactSection />
    </main>
  )
}
