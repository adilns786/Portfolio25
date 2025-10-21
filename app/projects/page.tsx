"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, FileText } from "lucide-react";

// Sample project data - in real app, this would come from props or API
const projectData = {
  id: "gramlink",
  title: "GramLink",
  shortDescription: "Comprehensive digital governance platform transforming SC-majority villages into Adarsh Grams through AI-driven gap analysis and transparent project management.",
  thumbnail: "/images/projects/gramlink/thumbnail.jpg",
  tags: ["AI", "Social Impact", "Government Tech", "Full Stack", "SIH 2025"],
  techStack: ["Next.js", "n8n", "Flask", "Firebase", "RAG", "Hugging Face", "Shadcn UI", "Tailwind CSS"],
  links: {
    github: "https://github.com/username/gramlink",
    demo: "https://gramlink.vercel.app",
    presentation: "/docs/gramlink-presentation.pdf",
    caseStudy: "/projects/gramlink"
  },
  highlights: [
    "Auto data fill solves baseline data availability challenges in remote villages.",
    "Smart survey app with offline-first capabilities for field data collection.",
    "Blockchain-based fund tracking ensures complete transparency.",
    "AI analytics and density heatmaps for data-driven prioritization of interventions.",
    "Comprehensive role-based dashboards from national to village level.",
    "Auto-generated VDP drafts and approval workflows accelerate planning."
  ],
  detailsPage: {
    heroImage: "/images/projects/gramlink/hero.jpg",
    gallery: [
      "/images/projects/gramlink/field-visit.jpg",
      "/images/projects/gramlink/dashboard.jpg",
      "/images/projects/gramlink/survey-app.jpg",
      "/images/projects/gramlink/heatmap.jpg"
    ],
    sections: [
      {
        subtitle: "The Challenge",
        content: "The Pradhan Mantri Anusuchit Jaati Abhyudaya Yojana (PM-AJAY) aims to transform Scheduled Caste majority villages into Adarsh Grams by addressing gaps in infrastructure and services across education, healthcare, sanitation, connectivity, water, electricity, and livelihood opportunities. But there were real challenges: no real-time project status updates, difficulty identifying precise gaps due to limited data integration, and no data-driven mechanism to prioritize interventions based on actual ground-level needs."
      },
      {
        subtitle: "Going Beyond the Screen",
        content: "This wasn't just a hackathon project we built from our computers. We conducted extensive interviews with government officials and actually visited Rahatoli village in Thane, Maharashtra - a place where this scheme was being implemented. Walking through the village, talking to local workers, understanding the bureaucratic processes, and seeing the ground reality firsthand completely shaped how we designed our solution. We realized technology alone isn't enough - it needs to work for everyone involved, from national planners to the village citizens."
      },
      {
        subtitle: "A System for Everyone",
        content: "GramLink considers every single stakeholder in this complex ecosystem: national administrators, state officials, district coordinators, ward officers, panchayat members, village workers, citizens, contractors, and inspection officers. Each has their own dashboard with features tailored to their needs and workflows. This isn't about forcing everyone onto one generic platform - it's about giving each person the exact tools they need to do their job effectively while keeping everyone connected."
      }
    ]
  },
  duration: "Jan 2025 – Mar 2025",
  role: "Full Stack Developer & Field Research",
  status: "In Development",
  priority: 1
};

// Mock related projects
const relatedProjects = [
  {
    id: "sahakaar-setu",
    title: "Sahakaar Setu",
    thumbnail: "/images/projects/sahakaar-setu/thumbnail.jpg",
    tags: ["AI", "Government Tech"]
  },
  {
    id: "nivaran",
    title: "Nivaran",
    thumbnail: "/images/projects/nivaran/thumbnail.jpg",
    tags: ["AI", "Enterprise"]
  }
];

export default function ProjectDetailsPage() {
  return (
    <div className="min-h-screen bg-[#E6E6E6]">
      

      {/* Status Badge - Vertical */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-black text-white px-3 py-4 rounded-full">
          <p className="text-xs uppercase tracking-wider" style={{ writingMode: 'vertical-rl' }}>
            {projectData.status}
          </p>
        </div>
      </div>

      <div className="pt-24 px-8 md:px-24 lg:px-32 pb-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {projectData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm text-[#666666]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
            {projectData.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#666666] max-w-4xl mb-12 leading-relaxed">
            {projectData.shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {projectData.links.demo && (
              <motion.a
                href={projectData.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            
            {projectData.links.github && (
              <motion.a
                href={projectData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </motion.a>
            )}

            {projectData.links.presentation && (
              <motion.a
                href={projectData.links.presentation}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium"
              >
                <FileText className="w-4 h-4" />
                <span>Presentation</span>
              </motion.a>
            )}
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-8 text-[#666666]">
            <div>
              <p className="text-sm uppercase tracking-wide mb-1">Duration</p>
              <p className="font-medium text-black">{projectData.duration}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide mb-1">Role</p>
              <p className="font-medium text-black">{projectData.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32 rounded-3xl overflow-hidden bg-white shadow-2xl"
        >
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <p className="text-gray-400">Hero Image Placeholder</p>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <p className="text-[#666666] leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Project Showcase
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectData.detailsPage.gallery.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden bg-white shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <p className="text-gray-400">Screenshot {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Sections */}
        {projectData.detailsPage.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24 max-w-5xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              {section.subtitle}
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {projectData.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white border-2 border-black rounded-full text-black font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-[#666666]">
              More Projects
            </h2>
            <motion.button
              whileHover={{ x: 4 }}
              className="text-[#AAAAAA] font-medium flex items-center gap-2"
            >
              <span>See all</span>
              <span>→</span>
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <p className="text-gray-400">{project.title}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F8F8F8] rounded-full text-sm text-[#666666]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle background texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.2] blur-[1px]"
        style={{
          backgroundImage: `url("./papertexture.png")`,
        }}
      />
    </div>
  );
}