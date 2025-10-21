import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Certificates from "@/components/sections/certificates";
import Contact from "@/components/sections/contact";
import Hello from "@/components/sections/hello";
import Footer from "@/components/sections/Footer";
import InfiniteProjects from "@/components/sections/InfiniteProjects";
import GalleryProjects from "@/components/sections/GalleryProjects";
import AboutUs from "@/components/sections/AboutUs";
import Skills from "@/components/sections/skills";
import NavBox from "@/components/sections/navbox";
import CircularGallery from "@/components/sections/ImageGallery";

export default function Page() {
  return (
    <main id="top" className="grain">
      <NavBox />
      <div className="fixed right-20 top-20 w-16 h-16 bg-yellow-400 border-2 border-yellow-600 rounded-full flex items-center justify-center transform rotate-12 shadow-lg z-50">
  <div className="text-center leading-tight">
    <span className="block text-xs font-bold text-yellow-900">WORK</span>
    <span className="block text-xs font-bold text-yellow-900">IN</span>
    <span className="block text-xs font-bold text-yellow-900">PROGRESS</span>
  </div>
</div>
      <Hero />
      {/* <About /> */}
      {/* <Skills /> */}
      <InfiniteProjects />
      <AboutUs />
      {/* <Hello /> */}
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={2}
          textColor="#000000"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
      <GalleryProjects />
      <Skills />
      {/* <Experience /> */}
      {/* <Certificates /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
